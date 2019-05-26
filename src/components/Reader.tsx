import React, { FunctionComponent, useEffect, memo } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { ACTIONS } from '../redux';

interface ReaderProps {
	feed: [],
	isFetching: boolean,
	renderedItems: [],
	numRenderedItems: number,
	renderItem(item: any): void,
}

let timer: NodeJS.Timeout; // timeout subscription object

const Reader: FunctionComponent<ReaderProps> = memo(({
	feed,
	isFetching,
	renderedItems,
	numRenderedItems,
	renderItem,
}) => {
	/**
	 * Initiates the rendering loop when numRenderedItems is reset.
	 * 
	 * The return function will clear the timeout subscription once each
	 * item in the feed is rendered. Similar to componentDidUnmount().
	 */
	useEffect(() => {
		if(feed.length !== 0 && numRenderedItems === 0)
			scheduleNextUpdate();

		return () => {
			if(feed.length === numRenderedItems) clearTimeout(timer);
		}
	});

	/**
	 * Sets the timeout subscription for each item added to renderedItems.
	 */
	const scheduleNextUpdate = (): void => {
		timer = setTimeout(updateRenderedItems, 40);
	}

	/**
	 * Renders each item from the feed successively, with a timeout in
	 * between each iteration.
	 */
	const updateRenderedItems = (): void => {
		renderItem(feed[numRenderedItems]);

		if(feed.length > numRenderedItems)
			scheduleNextUpdate();
	}

	/**
	 * Renders the renderedItems array if not fetching.
	 */
	if (!isFetching)
		return (
			<ul id="feed">
				{renderedItems.map((item: any, i: number) =>
					item &&						
					<li key={i}>
						<a href={item.guid}>
							<h2>{item.title}</h2>
							<h5>{moment(item.isoDate).fromNow()}</h5>
							<p>{item.contentSnippet}</p>
						</a>
					</li>
				)}
			</ul>
		)
	else
		return null;
});

const mapStateToProps = (state: any) => ({
	feed: state.feed,
	isFetching: state.isFetching,
	renderedItems: state.renderedItems,
	numRenderedItems: state.numRenderedItems,
});

const mapDispatchToProps = (dispatch: any) => ({
	renderItem: (item: any) => dispatch(ACTIONS.renderItem(item)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Reader)

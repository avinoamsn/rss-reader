import React, { Component } from 'react';
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

class Reader extends Component<ReaderProps> {
	timer!: NodeJS.Timeout;

	componentDidUpdate() {
		// starts the rendering loop
		if(this.props.feed.length !== 0 && this.props.numRenderedItems === 0)
			this.scheduleNextUpdate();
	}

	// component doesn't currently unmount, but this is necessary in that scenario
	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	// sets timer for each item added to renderedItems
	scheduleNextUpdate = (): void => {
		this.timer = setTimeout(this.updateRenderedItems, 40);
	}

	/**
	 * Renders each item from the feed successively, with a timeout in between
	 * each iteration.
 	*/
	updateRenderedItems = (): void => {
		this.props.renderItem(this.props.feed[this.props.numRenderedItems]);

		if(this.props.feed.length > this.props.numRenderedItems)
			this.scheduleNextUpdate();
	}

	render() {
		// checks for loading
		if (!this.props.isFetching)
			return (
				<ul id="feed">
					{this.props.renderedItems.map((item: any, i: number) =>
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
	}
}

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

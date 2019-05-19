import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

interface ReaderProps {
	feed: [],
	isFetching: boolean,
}

interface ReaderState {
	renderedItems: any,
	numItemsRendered: number,
}

class Reader extends Component<ReaderProps, ReaderState> {
	render() {
		if(!this.props.isFetching)
			return (
				<ul id="feed">
					{this.props.feed.map((item: any, i) =>
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
});

export default connect(mapStateToProps)(Reader)

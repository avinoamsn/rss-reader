import React, { Component } from 'react';
import { connect } from 'react-redux';

interface ReaderProps {
	feed: [],
}

interface ReaderState {
	renderedItems: any,
	numItemsRendered: number,
}

class Reader extends Component<ReaderProps, ReaderState> {
	tileClasses: any = [];

	render() {

		return (
			<ul id="feed">
				{this.props.feed.map((item: any, i) =>
					<a className="card code" href={item.guid}>
						<li key={i}>
							<p>{item.title}</p>
						</li>
					</a>
				)}
			</ul>
		)
	}
}

const mapStateToProps = (state: any) => ({
	feed: state.feed,
	isFetching: state.isFetching,
});

export default connect(mapStateToProps)(Reader)

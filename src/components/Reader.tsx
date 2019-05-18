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
	timer!: NodeJS.Timeout;

	constructor(props: ReaderProps) {
		super(props)
		this.state = {
			renderedItems: [],
			numItemsRendered: 0,
		}
	}

	componentDidUpdate() {
		// check that feed is populated
		if(this.props.feed.length !== 0)
			this.scheduleNextUpdate();
	}

	componentWillUnmount() {
    clearTimeout(this.timer)
  }

	// sets timer for each item added to renderedItems
	scheduleNextUpdate = () => {
		this.timer = setTimeout(this.updateRenderedItems, 1000);
	}

	/**
	 * TODO
	 */
	updateRenderedItems = () => {
		this.setState({
      renderedItems: this.state.renderedItems.concat(this.props.feed[this.state.numItemsRendered]),
      numItemsRendered: this.state.numItemsRendered + 1,
		});

  	if(this.state.numItemsRendered < this.props.feed.length) {
      this.scheduleNextUpdate();
		}
	}

	render() {
		return (
			<div id="feed">
				{this.state.renderedItems.map((item: any) =>
					<p key={item.guid}>{item.title}</p>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state: any) => ({
	feed: state.feed,
	isFetching: state.isFetching,
});

export default connect(mapStateToProps)(Reader)

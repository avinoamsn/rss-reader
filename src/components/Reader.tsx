import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

interface ReaderProps {
	feed: [],
	isFetching: boolean,
	renderedItems: [],
	numRenderedItems: number,
}

interface ReaderState {
	renderedItems: any[],
	numItemsRendered: number,
}

class Reader extends Component<ReaderProps, ReaderState> {
	timer!: NodeJS.Timeout;
	i!: number;

	constructor(props: ReaderProps) {
		super(props)
		this.state = {
			renderedItems: [],
			numItemsRendered: 0,
		}

		this.i = 0;
	}

	// sets timer for each item added to renderedItems
	scheduleNextUpdate = () => {
		this.timer = setTimeout(this.updateRenderedItems, 50);
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
		} // else {
		// 	// resets numItemsRendered for following render
		// 	this.setState({ numItemsRendered: -1 });
		// }
	}

	// arrayEquals = (): boolean => {
	// 	this.props.feed.forEach((el, i) => {
	// 		if(el !== this.state.renderedItems[i]) {
	// 			console.log('false')
	// 			return false;}
	// 	});
	// 	return true;
	// }

	componentDidUpdate() {
		// starts the rendering loop
		if(this.props.feed.length !== 0 && this.state.numItemsRendered === 0)
			this.scheduleNextUpdate();
	}

	// component doesn't currently unmount, but this is necessary in that scenario
	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	render() {
		console.log(this.state.numItemsRendered);
		// checks for loading
		if (!this.props.isFetching)
			return (
				<ul id="feed">
					{this.state.renderedItems.map((item: any, i: number) =>
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

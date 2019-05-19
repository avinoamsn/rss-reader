import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

interface ReaderProps {
	feed: [],
	isFetching: boolean,
	error: boolean,
}

interface ReaderState {
	renderedItems: any,
	numItemsRendered: number,
}

class Reader extends Component<ReaderProps, ReaderState> {
	errorHandler() {
		let errorMsg = this.props.feed.toString();

		// basic error checking
		if(errorMsg.includes('Malformed comment') ||
		errorMsg.includes('Invalid character') 		|| 
		errorMsg.includes('Attribute without value'))	// case not an RSS feed
			errorMsg = 'Not a valid feed.';
		else if(errorMsg.includes('404'))	// case resource unavailable
			errorMsg = 'The resource is not available.'

		return(
			<div className="error">Error: {errorMsg}</div>
		)
	}

	render() {
		// checks for spinner & error
		if(!this.props.isFetching && !this.props.error)
			return(
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
		else if(!this.props.isFetching && this.props.error) // case error
			return this.errorHandler();
		else
			return null; // case isFetching
	}
}

const mapStateToProps = (state: any) => ({
	feed: state.feed,
	isFetching: state.isFetching,
	error: state.error,
});

export default connect(mapStateToProps)(Reader)

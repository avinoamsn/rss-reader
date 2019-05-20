import React, { Component } from 'react';

import { connect } from "react-redux";
import { ACTIONS } from "../redux";

interface FormProps {
	fetchFeed(url: string): void,
}

interface FormState {
	url: string,
}

class Form extends Component<FormProps, FormState> {
	constructor(props: FormProps) {
		super(props);
		this.state = {
			url: '',
		};
  }
	
	render() {
		const handleChange = (event: any) => {
			this.setState({url: event.target.value}) 
		};
		const handleSubmit = (event: any): void => {
			event.preventDefault();
			this.props.fetchFeed(this.state.url);
		}

		return (
			<header>
				<h1><span>a</span>reses</h1>

				<form onSubmit={handleSubmit}>
					<input type="text" value={this.state.url} onChange={handleChange} />
					<input type="submit" value="fetch feed" />
				</form>
			</header>
		)
	}
}

const mapStateToProps = (state: any) => ({
	feed: state.feed,
});

const mapDispatchToProps = (dispatch: any) => ({
	fetchFeed: (url: string) => dispatch(ACTIONS.fetchFeed(url)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Form);
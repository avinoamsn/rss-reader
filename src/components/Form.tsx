import React, { Component } from 'react';

import { connect } from "react-redux";
import { ACTIONS } from "../redux";

interface FormProps {
	fetchFeed(url: string): void,
}

interface FormInterface {
	url: any,
}

class Form extends Component<FormProps, FormInterface> {
	constructor(props: FormProps) {
		super(props);
		this.state = {
			url: '',
		};

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event: any): void => {
		this.setState({url: event.target.value});
	}
	
  handleSubmit = (event: any): void => {
		event.preventDefault();
		this.props.fetchFeed(this.state.url);
	}
	
	render() {
		return (
			<header>
				<h1><span>a</span>reses</h1>

				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.url} onChange={this.handleChange} />
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

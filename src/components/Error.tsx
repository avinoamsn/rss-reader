import React, { Component } from 'react';
import { connect } from 'react-redux';

interface ErrorProps {
	error: boolean,
	errorMessage: string,
}

interface ErrorState {
	show: boolean;
}

class Error extends Component<ErrorProps, ErrorState> {
	constructor(props: any) {
		super(props);
		this.state = {
			show: true,
		};
	}

	componentWillReceiveProps() {
		this.setState({ show: true });
	}

	render() {
		const handleHide = () => this.setState({ show: false });

		if(this.props.error && this.state.show)
			return(
				<div className="error">
					<h3>ERROR:</h3> 
					<p>{this.props.errorMessage}</p>
					<p>This may not be a valid RSS feed. Please try a different URL.</p>
					<button onClick={handleHide}>dismiss</button>
				</div>
			);
		else
			return null;
	}
}

const mapStateToProps = (state: any) => ({
	error: state.error,
	errorMessage: state.errorMessage,
});

export default connect(mapStateToProps)(Error);

import React, { Component } from 'react';
import { connect } from "react-redux";

interface SpinnerProps {
	isFetching: boolean;
}

class Spinner extends Component<SpinnerProps> {
	randomAnimation = () => {
		return { animationDelay: Math.random() / 3.2 + 's' };
	}

	renderSpinner =() => {
		if(this.props.isFetching) {
			return (
				<div id="spinner">
					<div style={this.randomAnimation()} className="spinner-component" id="spin-1" />
					<div style={this.randomAnimation()} className="spinner-component" id="spin-2" />
					<br />
					<div style={this.randomAnimation()} className="spinner-component" id="spin-3" />
					<div style={this.randomAnimation()} className="spinner-component" id="spin-4" />
				</div>
			);
		} else
			return null;
	}

	render() {
		return (this.renderSpinner());
	}
}

const mapStateToProps = (state: any) => ({
	isFetching: state.isFetching,
});

export default connect(
	mapStateToProps,
)(Spinner);

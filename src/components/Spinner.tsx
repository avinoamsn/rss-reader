import React, { FunctionComponent, memo } from 'react'
import { connect } from "react-redux"

interface SpinnerProps {
	isFetching: boolean
}

const Spinner: FunctionComponent<SpinnerProps> = memo(({ isFetching }) => {
	const randomAnimation = () => {
		return { animationDelay: Math.random() / 3.2 + 's' }
	}

	if (isFetching) {
		return (
			<div id="spinner">
				<div style={randomAnimation()} className="spinner-component" id="spin-1" />
				<div style={randomAnimation()} className="spinner-component" id="spin-2" />
				<br />
				<div style={randomAnimation()} className="spinner-component" id="spin-3" />
				<div style={randomAnimation()} className="spinner-component" id="spin-4" />
			</div>
		)
	} else
		return null
})

const mapStateToProps = (state: any) => ({
	isFetching: state.isFetching,
})

export default connect(
	mapStateToProps,
)(Spinner)

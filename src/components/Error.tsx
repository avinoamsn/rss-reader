import React, { useState, useEffect, FunctionComponent, memo } from 'react'
import { connect } from 'react-redux'

interface ErrorProps {
	error: boolean,
	errorMessage: string,
}

/**
 * Displays message on fetch returning an error.
 */
const Error: FunctionComponent<ErrorProps> = memo(({ error, errorMessage }) => {
	const [show, setShow] = useState(false)

	// only executes if error or errorMessage have changed
	useEffect(() => setShow(true), [error, errorMessage])

	// if conditional only uses "show", the message is displayed on page reload,
	// although the reason isn't entirely clear
	if(error && show)
		return(
			<div className="error">
				<h3>ERROR:</h3>
				<p>{errorMessage}</p>
				<p>This may not be a valid RSS feed. Please try a different URL.</p>
			<button onClick={e => setShow(false)}>dismiss</button>
			</div>
		)
	else
		return null
})

const mapStateToProps = (state: any) => ({
	error: state.error,
	errorMessage: state.errorMessage,
})

export default connect(mapStateToProps)(Error)

import React, { useState, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';

interface ErrorProps {
	error: boolean,
	errorMessage: string,
}
/**
 * @TODO use reducer to set error to false once dismissed(?)
 */
const Error: FunctionComponent<ErrorProps> = ({ error, errorMessage }) => {
	const [show, setShow] = useState(false);

	// avoid infinite loop by checking if error & errorMessage have changed
	useEffect(() => setShow(true), [error, errorMessage]);

	if(error && show)
		return(
			<div className="error">
				<h3>ERROR:</h3> 
				<p>{errorMessage}</p>
				<p>This may not be a valid RSS feed. Please try a different URL.</p>
			<button onClick={e => setShow(false)}>dismiss</button>
			</div>
		);
	else
		return null;
}

const mapStateToProps = (state: any) => ({
	error: state.error,
	errorMessage: state.errorMessage,
});

export default connect(mapStateToProps)(Error);

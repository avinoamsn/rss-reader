import React, { useState, FunctionComponent, memo } from 'react'

import { connect } from "react-redux"
import { ACTIONS } from "../redux"

interface FormProps {
	fetchFeed(url: string): void,
}

/**
 * Accepts an RSS feed URL and dispatches the fetch action.
 */
const Form: FunctionComponent<FormProps> = memo(({ fetchFeed }) => {
	const [url, setUrl] = useState('')

	const handleSubmit = (e: any) => {
		e.preventDefault()
		fetchFeed(url)
	}

	return (
		<header>
			<h1><span>a</span>reses</h1>

			<form onSubmit={e => handleSubmit(e)}>
				<input type="text" value={url} onChange={e => setUrl(e.target.value)} />
				<input type="submit" value="fetch feed" />
			</form>
		</header>
	)
})

const dispatch = {
	fetchFeed: (url: string) => ACTIONS.fetchFeed(url),
}

export default connect(
	null, // https://tinyurl.com/y63rhvg5
	dispatch,
)(Form)

import Parser from 'rss-parser'
import { Types } from '.'

/**
 * Feed is being fetched.
 *
 * @note the url arg is currently unused.
 * @param url the url being fetched
 */
const requestFeed = (url: string) => ({
	type: Types.REQUEST_FEED,
	payload: url,
})

/**
 * Feed has been recieved.
 *
 * @param feed the JSON object returned from rss-parser
 */
const recieveFeed = (feed: any) => ({
	type: Types.RECIEVE_FEED,
	payload: feed.items,
})

/**
 * Fetch has returned an error.
 *
 * @param error the caught error object
 */
const catchError = (error: any) => ({
	type: Types.ERROR,
	payload: error.message || 'Something went wrong.',
})

/**
 * The next item from feed will be added to the renderedItems array.
 *
 * @param item the item to be added to the rnederedItems array
 */
const renderItem = (item: any) => ({
	type: Types.RENDER_ITEM,
	payload: item,
})

/**
 * Handles asynchronous request for RSS feed.
 *
 * Redux-thunk lets us pass the dispatch method as an argument to the returned
 * function, which in turn lets the function dispatch actions itself.
 *
 * @param url the URL of the RSS feed
 */
const fetchFeed = (url: any) => {
	// proxy server to avoid CORS, clone of https://github.com/Rob--W/cors-anywhere/
	const PROXY_URL = 'https://boiling-citadel-49650.herokuapp.com/'
	const parser = new Parser()

	return async(dispatch: any) => {
		dispatch(requestFeed(url))
		// parser returns feed as a JSON object
		parser.parseURL(PROXY_URL + url, (err, feed) => {
			if(err)
				dispatch(catchError(err))
			else
				dispatch(recieveFeed(feed))
		})

	}
}

export default {
	fetchFeed,
	renderItem,
	catchError,
	Types,
}

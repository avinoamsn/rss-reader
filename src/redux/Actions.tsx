import Parser from 'rss-parser';

// action type(s)
const Types = {
	REQUEST_FEED: "REQUEST_FEED",
	RECIEVE_FEED: "RECIEVE_FEED",
	ERROR: "ERROR",
};

// action(s)
const requestFeed = (url: any) => ({
	type: Types.REQUEST_FEED,
	payload: url,
});

const recieveFeed = (feed: any) => ({
	type: Types.RECIEVE_FEED,
	payload: feed.items,
});

/**
 * Action creator that handles asynchronous requests.
 * 
 * Redux-thunk lets us pass the dispatch method as an argument to the returned
 * function, which in turn lets the function dispatch actions itself.
 * 
 * @param url the URL of the RSS feed
 */
const fetchFeed = (url: any) => {
	// proxy server to avoid CORS, clone of https://github.com/Rob--W/cors-anywhere/
	// there is likely a better way to handle this on a prod server, but this works for now
	const PROXY_URL = 'https://boiling-citadel-49650.herokuapp.com/';
	const parser = new Parser();

	return async(dispatch: any) => {
		dispatch(requestFeed(url))
		// parser returns feed as a JSON object
		dispatch(recieveFeed(await parser.parseURL(PROXY_URL + url)));
	}
};

const error = (error: any) => ({
	type: Types.ERROR,
	payload: error,
});

export default {
	fetchFeed,
	error,
	Types,
};

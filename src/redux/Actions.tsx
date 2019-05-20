import Parser from 'rss-parser';

// action type(s)
const Types = {
	REQUEST_FEED: 'REQUEST_FEED',
	RECIEVE_FEED: 'RECIEVE_FEED',
	ERROR: 'ERROR',
	RENDER_ITEM: 'RENDER_ITEM',
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

const catchError = (error: any) => ({
	type: Types.ERROR,
	payload: error.message || 'Something went wrong.',
});

const renderItem = (item: any) => ({
	type: Types.RENDER_ITEM,
	payload: item,
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
		parser.parseURL(PROXY_URL + url, (err, feed) => {
			if(err)
				dispatch(catchError(err));
			else
				dispatch(recieveFeed(feed));
		});
		;
	}
};

export default {
	fetchFeed,
	renderItem,
	Types,
};

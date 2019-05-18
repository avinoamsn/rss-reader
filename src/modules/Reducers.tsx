import  { ACTIONS } from '.';

const defaultState = {
	isFetching: false,
	error: false,
	feed: [],
}

const feed = (state = defaultState, action: any) => {
	switch(action.type) {
	 	case ACTIONS.Types.REQUEST_FEED:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case ACTIONS.Types.RECIEVE_FEED:
			return Object.assign({}, state, {
				isFetching: false,
				error: false,
				feed: action.payload
			});
		case ACTIONS.Types.ERROR:
			return Object.assign({}, state, {
				error: true,
			});
		default:
			return state;
	}
}

export default feed;

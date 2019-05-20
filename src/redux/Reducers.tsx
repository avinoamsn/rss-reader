import  { ACTIONS } from '.';

const defaultState = {
	isFetching: false,
	error: false,
	errorMessage: '',
	feed: [],
	renderedItems: [],
	numRenderedItems: 0,
}

const feed = (state = defaultState, action: any) => {
	switch(action.type) {
	 	case ACTIONS.Types.REQUEST_FEED:
			return Object.assign({}, state, {
				isFetching: true,
				error: false,
			});
		case ACTIONS.Types.RECIEVE_FEED:
			return Object.assign({}, state, {
				isFetching: false,
				error: false,
				feed: action.payload
			});
		case ACTIONS.Types.ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				error: true,
				errorMessage: action.payload,
			});
		case ACTIONS.Types.RENDER_ITEM:
			return Object.assign({}, state, {
				renderedItems: state.renderedItems.concat(state.feed[state.numRenderedItems]),
				numRenderedItems: state.numRenderedItems + 1,
			});
		default:
			return state;
	}
}

export default feed;

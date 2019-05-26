import  { ACTIONS } from '.';

const defaultState = {
	url: '',
	isFetching: false,
	feed: [],
	error: false,
	errorMessage: '',
	renderedItems: [],
	numRenderedItems: 0,
}

/**
 * The root reducer.
 * 
 * @param state the state of the app
 * @param action the action being performed
 */
const feed = (state = defaultState, action: any) => {
	switch(action.type) {
	 	case ACTIONS.Types.REQUEST_FEED:
			return Object.assign({}, state, {
				isFetching: true,
				error: false,
				errorMessage: '',
			});
		case ACTIONS.Types.RECIEVE_FEED:
			return Object.assign({}, state, {
				isFetching: false,
				feed: action.payload,
				renderedItems: [],
				numRenderedItems: 0,
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

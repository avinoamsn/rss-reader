import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'; // logger with default options
import thunkMiddleware from 'redux-thunk'

import { reducers } from '.';

export default function configureStore(initialState: any) {
	// store enhancer for Redux DevTools
	const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(
			thunkMiddleware,
			logger // https://github.com/LogRocket/redux-logger/issues/302
			)),
		);
  return store;
}

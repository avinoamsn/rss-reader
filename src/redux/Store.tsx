import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from '.'

const persistConfig = {
  key: 'root',
  storage,
}

// persist redux state
const persistedReducer = persistReducer(persistConfig, rootReducer)

// enhancer for Redux DevTools
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(initialState: any) {
  const store = createStore(
		persistedReducer,
		initialState,
		composeEnhancers(applyMiddleware(
			thunkMiddleware,
			logger // https://github.com/LogRocket/redux-logger/issues/302
			)),
		)
	const persistor = persistStore(store)
  return { store, persistor }
}

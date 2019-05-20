import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './redux';

import { Form, Reader, Spinner, Error } from './components';
import './App.scss';

export const store = configureStore((window as any).REDUX_INITIAL_DATA);

function App() {
  return (
		<ReduxProvider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
			<div id="fb-root"></div>				
				<div id="app">
					<Form />
					<Spinner />
					<Reader />
					<Error />
				</div>
			</PersistGate>
		</ReduxProvider>
  );
}

export default App;

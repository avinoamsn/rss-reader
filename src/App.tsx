import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from './redux';

import { Form, Reader, Spinner } from './components';
import './App.scss';

export const store = configureStore((window as any).REDUX_INITIAL_DATA);

function App() {
  return (
		<ReduxProvider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<div id="app">
					<Form />
					<Spinner />
					<Reader />
				</div>
			</PersistGate>
		</ReduxProvider>
  );
}

export default App;

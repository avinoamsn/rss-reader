import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from './modules';

import { Form, Reader } from './components';
import './App.scss';

export const store = configureStore((window as any).REDUX_INITIAL_DATA);

function App() {
  return (
		<ReduxProvider store={store}>
			<div id="app">
				<Form />
				<Reader />
			</div>
		</ReduxProvider>
  );
}

export default App;

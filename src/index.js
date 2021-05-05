import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    { id: Math.floor((Math.random() * 100) + 1), title: 'Mobby Dick', category: 'Kids' },
    { id: Math.floor((Math.random() * 100) + 1), title: 'Dread Doctor', category: 'Horror' },
    { id: Math.floor((Math.random() * 100) + 1), title: 'E.T', category: 'Sci-Fi' },
    { id: Math.floor((Math.random() * 100) + 1), title: 'The Book of Negroes', category: 'History' },
    { id: Math.floor((Math.random() * 100) + 1), title: 'Barak Obama', category: 'Biography' },
  ]
}

const store = createStore(
  rootReducer,
  initialState,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
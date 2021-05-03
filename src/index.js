import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    { id: 1, title: 'Mobby Dick', category: 'Kids' },
    { id: 2, title: 'Dread Doctor', category: 'Horror' },
    { id: 3, title: 'E.T', category: 'Sci-Fi' },
    { id: 4, title: 'The Book of Negroes', category: 'History' },
  ]
}

const store = createStore(
  rootReducer,
  initialState,
);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
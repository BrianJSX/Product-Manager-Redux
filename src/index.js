import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import redux
import { Provider } from 'react-redux'
import myReducer from './reducers/index'
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

const store = createStore(
  myReducer,
  compose(
    applyMiddleware(
      thunk       
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

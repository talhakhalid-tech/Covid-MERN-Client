import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

ReactDOM.render(
    <Provider store={createStore(reducer,composeEnhancers(applyMiddleware(thunk)))}>
      <App />
    </Provider>
  ,document.getElementById('root')
);

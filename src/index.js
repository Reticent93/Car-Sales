import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/title'





// create our store or "global state object"
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const rootElement = document.getElementById('root');
ReactDOM.render(
     // gives all children components access to the store
<Provider store={store}>
<App />
</Provider>
, rootElement);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import {createStore} from 'redux'
import movies from './reducers/index'

const store=createStore(movies)
console.log("store",store);
console.log('state',store.getState())


store.dispatch(
  {
    type:'Add Movies',
    movies:[{name:"Superman"}]
}
)

console.log('after-state',store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);



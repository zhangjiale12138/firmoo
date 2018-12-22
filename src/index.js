import store from './store.js';
import {addToCart, updateCart, deleteFormCart} from './actions/cart-actions';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
console.log('initial state:', store.getState());

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})
// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));
// store.dispatch(updateCart('Flour 1kg', 5, 110));
// store.dispatch(deleteFormCart('Coffee 500gm'));

unsubscribe();



ReactDOM.render(
    <Provider store={store}>
     <App />
    </Provider>,
    document.getElementById('root')
)
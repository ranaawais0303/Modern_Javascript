//importing module
// import cloneDeep from './node_modules/loda  sh-es/cloneDeep.js';
import cloneDeep from 'lodash-es ';
import './shoppingCart.js';
// import { addToCart } from './shoppingCart.js';
console.log('importing the module');
// addToCart('my', 40);

//////////////////////state object user from system//
// const totalPrice = 80;
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

//from object,assign
const stateClone = Object.assign({}, state);

//from cloneDeep
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

//by using this without triggering a whol page(browser)
//reload and maintaining the page whenever we are
//testing out something
if (module.hot) {
  module.hot.accept();
}

//babel
//automatic with parcel

//babel
import 'core-js/stable';

import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
// import cartItems from "./cart-items";
// redux stuff

import {createStore} from "redux";
import reducer from "./reducer"
// react-redux - Provider - wraps app , conntect - used in components
import {Provider} from 'react-redux';
import HomeAlert from "./components/HomeAlert";
// initial store
// const initialStore = {
//   cart: cartItems,
//   total: 0,
//   amount: 0
// }

// store
const store = createStore(reducer);


function App() {
  // cart setup

  return (
    <main>
      <Provider store={store}>
      <HomeAlert />
      <Navbar />
      <CartContainer />
      </Provider>
    </main>
  );
}

export default App;

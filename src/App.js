import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Orders from "./Orders";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HTNUbDIxbE6OJmZJo1T7JrBZySw8jxKE0pZ573kwY0NEeYSGVboUsxwE0wgLkhvJQ1AwbhT3gRKSc6cseLavEKi002UarfeIv"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when app component loads...

    auth.onAuthStateChanged((authUser) => {
      //console.log("the user is :", authUser);

      if (authUser) {
        // user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* Home */}
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Auth from './utils/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import VerificationPage from "./pages/Verify";
import VoterInfo from "./pages/VoterInfo";
import RepSearch from "./pages/RepSearch";
import ElectionsSearch from "./pages/Elections";
import ContestsPage from "./pages/absentee-ballot";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar";
import Login from "./pages/Login/index";
import Logout from "./components/Logout";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const App = () =>
  <Router>
    <div id="universal-styling">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/verification" component={VerificationPage} />
        <PrivateRoute exact path="/representatives" component={RepSearch} />
        <PrivateRoute exact path="/elections" component={ElectionsSearch} />
        <PrivateRoute exact path="/voter-information" component={VoterInfo} />
        <Route exact path="/absentee-ballot" component={ContestsPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={HomePage} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;

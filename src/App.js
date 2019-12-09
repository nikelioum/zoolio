import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NRoute from "./components/Route";
import CookieConsent, { Cookies } from "react-cookie-consent";

class App extends Component {
  render() {
    Cookies.set("test", "nice")
    return (
      <div>
        <Router>
          <NRoute />
        </Router>
        <CookieConsent
          debug={true}
          buttonText="Αποδέχομαι"
          expires={150}
        >
          Ο ιστότοπος χρησιμοποιεί cookies για να έχετε καλύτερη εμπερία χρήσης.{" "}
          <span>
            Για περισσότερες πληροφορίες πατήστε <a href="#">εδώ</a>.
          </span>
        </CookieConsent>
      </div>
    );
  }
}

export default App;

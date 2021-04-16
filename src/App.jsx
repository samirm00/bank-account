import React from "react";

import AccountStatus from "./components/AccountStatus";
import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";
import ExtraFeatures from "./components/ExtraFeatures";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
      <ExtraFeatures />
    </div>
  );
};

export default App;

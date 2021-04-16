/*
two different account Saving and Checking
 */

import React from "react";
import { useSelector } from "react-redux";

const AccountStatus = () => {
  const savingAccount = useSelector((state) => state.banking.savingAccount);
  return (
    <div className="mt-5">
      <h1>{savingAccount ? "Saving Account" : "Checking Account"}</h1>
    </div>
  );
};

export default AccountStatus;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
// action creators
import {
  deposit,
  withdraw,
  collectInterest,
  deleteAccount,
  toggleAccount,
} from "../redux/actions/bankingActions";

const Banking = () => {
  //local state balance
  const [balance, setBalance] = useState("");
  const dispatch = useDispatch();
  const intBalance = parseInt(balance);

  // deposit
  const handleDeposit = () => {
    dispatch(deposit(intBalance));
  };
  // withdraw
  const handleWithdraw = () => {
    dispatch(withdraw(intBalance));
  };
  // collect interest
  const handleCollectInterest = () => {
    dispatch(collectInterest());
  };
  // delete account
  const handleDelete = () => {
    dispatch(deleteAccount());
  };
  //account type changer
  const handleAccountType = () => {
    dispatch(toggleAccount());
  };

  return (
    <div className="form-group">
      <input
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
        type="text"
        className="form-control mt-4 mb-4 "
      />
      <button
        onClick={handleDeposit}
        className="btn btn-success mt-3 mr-1 ml-1"
      >
        Deposit
      </button>
      <button
        onClick={handleWithdraw}
        className="btn btn-primary mt-3 mr-1 ml-1"
      >
        Withdraw
      </button>
      <button
        onClick={handleCollectInterest}
        className="btn btn-warning mt-3 mr-1 ml-1"
      >
        Collect Interest
      </button>
      <button onClick={handleDelete} className="btn btn-danger mt-3 mr-1 ml-1">
        Delete Account{" "}
      </button>
      <button
        onClick={handleAccountType}
        className="btn btn-secondary mt-3 mr-1 ml-1"
      >
        Change Account Type
      </button>
    </div>
  );
};

export default Banking;

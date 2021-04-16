import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const amount = useSelector((state) => state.banking.amount);
  return (
    <div className="mt-4">
      <h1>{amount}</h1>
    </div>
  );
};

export default Balance;

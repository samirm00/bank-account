/*
three different extra features 
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  smsFeatures,
  visaCard,
  onlineCard,
} from "../redux/actions/extraFeatures";

const ExtraFeatures = () => {
  const extraFeatures = useSelector((state) => state.extraFeatures);
  const dispatch = useDispatch();

  const handleSms = () => {
    dispatch(smsFeatures());
  };
  const handleVisaCard = () => {
    dispatch(visaCard());
  };
  const handleOnlineCard = () => {
    dispatch(onlineCard());
  };
  return (
    <div className="mt-5">
      <h2 className="text-center">Extra Services</h2>
      <div className="form-group mt-5">
        <button onClick={handleSms} className="btn btn-success mr-2 ml-2">
          {extraFeatures.smsService
            ? "SMS service is activated"
            : "Active SMS service"}
        </button>
        <button onClick={handleVisaCard} className="btn btn-info mr-2 ml-2">
          {extraFeatures.visaCard
            ? "Visa card has been ordered"
            : "Order a visa card"}
        </button>
        <button
          onClick={handleOnlineCard}
          className="btn btn-secondary mr-2 ml-2"
        >
          {extraFeatures.onlineCard
            ? "Online card has been ordered"
            : "Order an online card"}
        </button>
      </div>
    </div>
  );
};

export default ExtraFeatures;

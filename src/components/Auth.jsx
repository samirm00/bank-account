import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleAccount } from "../redux/actions/authAction";

const Auth = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(toggleAccount());
  };
  return (
    <div>
      <button onClick={handleAuth} className="btn btn-info mt-2">
        {isLogged ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Auth;

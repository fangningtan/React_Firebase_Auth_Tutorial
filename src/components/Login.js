import React from "react";
import { Link } from "react-router-dom";
// import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import GoogleButton from "react-google-button";
// import { useUserAuth } from "../context/UserAuthContext";

import Lottie from 'react-lottie';
import animationData from '../lotties/female-avatar'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Login = () => {

  return (
    <>
      <div className="p-2">
        <div className="w-100 p-2" id="helper-char">
        <Lottie options={defaultOptions}/>
        </div>
        <h2 className="text-center mb-3">Welcome to Learn.ink</h2>
        <h6 className="text-center mb-1">Click on me for help if you get stuck</h6>
        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit">
              Start sign up
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import  PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import OtpInput from "react18-otp-input";
import isValidOtp from "./OtpValidation";
import 'react-phone-number-input/style.css'
import { isPossiblePhoneNumber } from "react-phone-number-input";

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState("");
  const { setUpRecaptcha } = useUserAuth();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [isdisabled, setIsDisabled] = useState(true) // For button

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptcha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const onNumChange = (e) => {
    setNumber(e)
    if (e === undefined) {
      setIsDisabled(true)
    } else if (!isPossiblePhoneNumber(e.toString())) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }

  return (
    <>
      <div className="p-2">
        <h2 className="mb-3">Enter your mobile number</h2>
        <h6 className="mb-3">You will get a 6-digit code in your Messages</h6>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput
              style={{"--PhoneInputCountryFlag-height": "1.5em"}}
              defaultCountry="GB"
              value={number}
              onChange={onNumChange}
              placeholder="07123456789"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Button id="phone-num-submit-btn" type="submit" variant="primary" disabled={isdisabled}>
              Submit
            </Button>
          </div>
        </Form>

        <div className="p-2">
        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <div>
          <OtpInput
            inputStyle="otpInput"
            numInputs={6}
            onChange={(value) => setOtp(value)}
            separator={""}
            isInputNum={true}
            shouldAutoFocus
            value={otp}
          />
          </div>
          <div className="d-grid gap-2 m-3">
            <Button type="submit" variant="primary" disabled={!isValidOtp(otp)}>
              Verify
            </Button>
          </div>
        </Form>
      </div>
      </div>
    </>
  );
};

export default PhoneSignUp;

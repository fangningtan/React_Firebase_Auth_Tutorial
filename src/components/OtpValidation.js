function isValidOtp(otp) {
    if (otp.length !== 6){
        return false;
    }
    return true;
}

export default isValidOtp;
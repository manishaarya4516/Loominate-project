import { useState } from "react";
import { useApplicationContext } from "../../context/app-context";

const OTPValidationComponent = () => {
  const { otpReader } = useApplicationContext();
  const [userInput, setUserInput] = useState(null);
  const [warning, setWarning] = useState("");

  const { setIsEmailVerified } = useApplicationContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = parseInt(userInput);
    console.log(otpReader, " ", number);
    if (otpReader === number) {
      setIsEmailVerified(true);
      return;
    } else {
      setWarning("Invalid OTP");
      return;
    }
  };

  return (
    <>
      <div className="carousel-inner">
        <div className="active carousel-item">
          <h3>Enter Verification Code</h3>
        </div>
        <p>
          Please type in the <span class="highlight">4-digit code</span>
          sent to your email. If it does not appear in your Inbox, please check
          your Updates, Quarantined or Spam folders.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setUserInput(e.target.value)} type="number" />
        <p style={{ color: "red" }}>{warning}</p>
        <br />
        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default OTPValidationComponent;

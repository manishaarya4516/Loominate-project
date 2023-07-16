import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [otpReader, setOtpReader] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [username, setUsername] = useState("starboy123");
  const value = {
    otpReader,
    setOtpReader,
    isEmailVerified,
    setIsEmailVerified,
    username,
    setUsername,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useApplicationContext = () => {
  return useContext(MyContext);
};

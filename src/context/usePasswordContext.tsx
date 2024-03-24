import React, { useState, createContext } from "react";

interface PasswordContextValue {
  Password: string | null;
  setUsername?: React.Dispatch<React.SetStateAction<string | null>>;
  Passwordset: Function;
}

interface child {
  children: React.ReactNode;
}

export const PasswordContext = createContext<PasswordContextValue | undefined>(
  undefined
);

export const PasswordContextProvider = ({ children }: child) => {
  const [Password, setPassword] = useState("");

  const Passwordset = (pwod: string) => {
    setPassword(pwod);
  };
  return (
    <PasswordContext.Provider value={{ Password, Passwordset }}>
      {children}
    </PasswordContext.Provider>
  );
};

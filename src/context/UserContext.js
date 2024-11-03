import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useTranslation } from "react-i18next";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  // useEffect to run once the application mounts
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, changeLanguage, t }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [username, setusername] = useState(null);


  function login(username, password) {
    if (username === "saksham" && password === "saksham") {
      setAuth(true);
      setusername(username)
      return true;
    } else {
      setAuth(false);
      return false;
    }
  }

  function logout() {
    setusername(null)
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);

  function login(username, password) {
    if (username === "saksham" && password === "saksham") {
      setAuth(true);
      return true;
    } else {
      setAuth(false);
      return false;
    }
  }

  function logout() {
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

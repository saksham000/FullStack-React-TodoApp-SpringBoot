import { createContext, useContext, useState } from "react";
import { executeJwtAuthService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [username, setusername] = useState(null);
  const [token, setToken] = useState(null);


  async function login(username, password) {

    try {
      const response = await executeJwtAuthService(username, password);
      if (response.status == 200) {
        const jwatToken = 'Bearer ' + response.data.token
        setAuth(true);
        setusername(username);
        setToken(jwatToken);

        apiClient.interceptors.request.use(
          (config)=> {
            console.log("interspeting and adding a token")
            config.headers.Authorization = jwatToken
            return config
          } 
        )
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setusername(null);
    setAuth(false);
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, username, token }}>
      {children}
    </AuthContext.Provider>
  );
}

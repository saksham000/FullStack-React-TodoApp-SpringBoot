import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState("saksham");
  const [password, SetPassword] = useState("");
  const [showErrorMessage, SetShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handelUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handelPasswordChange(event) {
    SetPassword(event.target.value);
  }

  function handelSubmit() {
    if (authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      SetShowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      <h1>Time To Login !</h1>

      {showErrorMessage && (
        <div className="errorMessage">Please Check Your Credientials.</div>
      )}

      <div className="LoginForm">
        <div>
          <label>Enter User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handelUsernameChange}
          />
        </div>
      </div>
      <div>
        <label>Enter Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handelPasswordChange}
        />
      </div>
      <div>
        <button type="button" name="login" onClick={handelSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

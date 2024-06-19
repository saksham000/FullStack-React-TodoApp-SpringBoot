import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useParams,
    Link,
  } from "react-router-dom";
  import { useState } from "react";


export default function LoginComponent() {
    const [username, setUsername] = useState("saksham");
    const [password, SetPassword] = useState("");
    const [showSuccessMessage, SetShowSuccessMessage] = useState(false);
    const [showErrorMessage, SetShowErrorMessage] = useState(false);
    const navigate = useNavigate();
  
    function handelUsernameChange(event) {
      setUsername(event.target.value);
    }
  
    function handelPasswordChange(event) {
      SetPassword(event.target.value);
    }
  
    function handelSubmit() {
      if (username === "saksham" && password === "saksham") {
        console.log("Success");
        SetShowSuccessMessage(true);
        SetShowErrorMessage(false);
        navigate(`/welcome/${username}`);
      } else {
        console.log("Invalid Credentials");
        SetShowSuccessMessage(false);
        SetShowErrorMessage(true);
      }
    }
  
    return (
      <div className="Login">
        <h1>Time To Login !</h1>
  
        {showSuccessMessage && (
          <div className="successMessage">Authenticated Successfully</div>
        )}
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
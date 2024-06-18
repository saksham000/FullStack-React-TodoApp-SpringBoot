import { useState } from "react";
import "./TodoApp.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />

          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodoComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {
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

function WelcomeComponent() {
  const { username } = useParams();
  console.log(username);
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>Welcome Component</div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>We Are Working Really Hard!</h1>
      <div>Soory for 404 Error</div>
    </div>
  );
}

function ListTodoComponent() {
  const todos = { id: 1, description: "I want to Learn AWS" };

  return (
    <div className="ListTodoComponent">
      <h1>Things You want to do !</h1>
      <div>
        <table>
          <thead></thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

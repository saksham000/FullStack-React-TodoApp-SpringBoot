import "./TodoApp.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodoComponent from "./ListTodoComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import  TodoComponent  from "./TodoComponent";

function AuthRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuth) return children;

  return <Navigate to="/" />;
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />

          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />

            <Route
              path="/welcome/:username"
              element={
                <AuthRoute>
                  <WelcomeComponent />
                </AuthRoute>
              }
            />

            <Route
              path="/todos"
              element={
                <AuthRoute>
                  <ListTodoComponent />
                </AuthRoute>
              }
            />

            <Route
              path="/todo/:id"
              element={
                <AuthRoute>
                  <TodoComponent />
                </AuthRoute>
              }
            />

            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutComponent />
                </AuthRoute>
              }
            />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

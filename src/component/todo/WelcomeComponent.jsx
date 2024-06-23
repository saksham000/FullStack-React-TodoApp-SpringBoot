import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retriveHelloWorldPathBean } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

export default function WelcomeComponent() {
  const { username } = useParams();
  const [message, setMessage] = useState(null);

  const authContext = useAuth()
  function callHelloWorldApi() {
    console.log("call hello");

    retriveHelloWorldPathBean("saksham", authContext.token)
      .then((response) => successfullResponse(response))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("clean Up"));
  }
    
  function successfullResponse(response) {
    console.log(response);
    setMessage(response.data.message);
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Manage Your Todos. <Link to="/todos">Go Here</Link>
      </div>
      <div>
        {/* <button className="btn btn-success m-5" onClick={callHelloWorldApi}>
          Call Hello World
        </button> */}
      </div>
      <div className="test-info">{message}</div>
    </div>
  );
}

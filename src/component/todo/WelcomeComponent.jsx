import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retriveHelloWorldPathBean } from "./api/HelloWorldApiService";

export default function WelcomeComponent() {
  const { username } = useParams();
  const [message, setMessage] = useState(null);

  function callHelloWorldApi() {
    console.log("call hello");

    retriveHelloWorldPathBean("saksham")
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
        <button className="btn btn-success m-5" onClick={callHelloWorldApi}>
          Call Hello World
        </button>
      </div>
      <div className="test-info">{message}</div>
    </div>
  );
}

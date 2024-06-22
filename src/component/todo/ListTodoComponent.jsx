import { useEffect, useState } from "react";
import {
  deleteTodoApi,
  retriveAllTodosForUsernameApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodoComponent() {
  const authContext = useAuth();
  const username = authContext.username;
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate()
  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    retriveAllTodosForUsernameApi(username)
      .then((response) => {
        setTodos(response.data);
      })

      .catch((error) => console.log(error));
  }

  function deleteTodo(id) {
    console.log("delete todo is called" + id);
    deleteTodoApi(username, id)
      .then(() => {
        setMessage(`Todo with id ${id} deleted successfully`);
        refreshTodos();
      })
      .catch((error) => console.log(error));
  }

  function updateTodo(id) {
    console.log("clicked " + id);
    navigate(`/todo/${id}`)
  }

  return (
    <div className="container">
      <h1>Things You want to do !</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done ?</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListTodoComponent;

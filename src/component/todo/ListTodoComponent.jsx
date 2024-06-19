function ListTodoComponent() {
    const today = new Date();
    const targetDate = new Date(
      today.getFullYear() + 12,
      today.getMonth(),
      today.getDay()
    );
    const todos = [
      {
        id: 1,
        description: "I want to Learn AWS",
        done: false,
        targetDate: targetDate,
      },
      {
        id: 2,
        description: "I want to Learn SpringBoot",
        done: false,
        targetDate: targetDate,
      },
      {
        id: 3,
        description: "I want to Learn DevOPs",
        done: false,
        targetDate: targetDate,
      },
    ];
  
    return (
      <div className="container">
        <h1>Things You want to do !</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>ID</td>
                <td>Description</td>
                <td>Done ?</td>
                <td>Target Date</td>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  export default ListTodoComponent
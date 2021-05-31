function App(){
    // Main component to be rendered by the ReactDOM
  
    const [todos, setTodos] = React.useState([
      // Sets the initial state of To Dos and stores them in the toDos variable
        // Note: This is an array of objects!
      {
        text: 'Learn React',
        isCompleted: false,
      },
      {
        text: 'Build To Do App',
        isCompleted: false,
      }        
    ]);
    // Closes initialization of state

    const addTodo = text => {
        const newToDos = [...todos, {text:text, isCompleted: false}];
        // New array todos array containing the new input
        setTodos(newToDos);
        //Sets the state of the todos to the new array.
    }
    
    const removeTodo = index => {
      let temp = [...todos];
      temp.splice(index, 1);
      setTodos(temp);
    };
    
    return(
        <div key = 'app' className = 'app'>
            <div key = 'todo-list' className = 'todo-list'>
                {todos.map((todo, i) => 
                    <Todo index = {i} todo = {todo} remove = {removeTodo}/>
                )}
            </div>
            <div key = 'todo-input' className = 'todo-input'>
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
  };
  
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
  // Renders the component to the HTML div ID of 'root'
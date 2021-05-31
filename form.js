function TodoForm ({addTodo}) {

    const [value, setValue] = React.useState('');
    // Managed variable monitors the state of the application

    const handleSubmit = e => {
        e.preventDefault(); // Restricts refreshing on submission
        if (!value) return; // Returns if input is empty
    
        addTodo(value);
        // Adds value to the to dos list (exists in index.js)
        setValue('');
        // Returns the value in the input field to an empty string
      };

    return (
        <form onSubmit = {handleSubmit}>
        <input 
          type = 'text'
          className = 'input'
          placeholder = 'Add To Do...'
          value = {value}
          onChange = {e => setValue(e.target.value)}
          />
      </form>
    );
}
function Todo ({todo, index, remove}) {

    function handle () {
        remove(index);
    }

    return (
        <div key = {index} className = 'todo' onClick = {handle} >{todo.text} </div>
    );
};
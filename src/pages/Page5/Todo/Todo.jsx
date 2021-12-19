import './Todo.css'
function Todo({ todo, removeHandler }) {
    return (
        <li className="post-textarea " key={todo.id}>
            {todo.title}
            <button key={todo.id} className="post-delete-btn" data-id={todo.id} onClick={(evt) => removeHandler(evt)}>x</button>
        </li>)
}

export default Todo;
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({ todos, onDeleted }) => {

  const elements = todos.map((el) => {

    const {id, ...itemProps} = el;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
        {...itemProps}
        onDeleted={() => onDeleted(id)}/>
        </li>
    )
  })

    return (
      <div>
        <ul className="list">
          { elements }
        </ul>
      </div>
    )
}

export default TodoList;
import './todo-list-item.css'

const TodoListItem = ({ name }) => {
    return (
        <span className="todo-list-item">
          <span
            className="todo-list-item-name">
            {name}
          </span>
          <button type="button"
                  className="btn done-btn icons">
            <i className="fa fa-check" />
          </button>
    
          <button type="button"
                  className="btn delete-btn icons">
            <i className="fa fa-trash-o" />
          </button>
        </span>
      );
}

export default TodoListItem;
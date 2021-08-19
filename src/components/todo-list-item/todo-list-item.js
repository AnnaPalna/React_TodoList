import './todo-list-item.css'

// class TodoListItem extends React.Component {

//   render() {

//     this.props;

//     return (
//       <span className="todo-list-item">
//         <span
//           className="todo-list-item-name">
//           {name}
//         </span>
//         <button type="button"
//                 className="btn done-btn icons">
//           <i class="fas fa-exclamation-circle"></i>
//         </button>
  
//         <button type="button"
//                 className="btn delete-btn icons">
//           <i className="fa fa-trash-o" />
//         </button>
//       </span>
//     );
//   }
// }

const TodoListItem = ({ name, important = false }) => {
    
  const style = {
    color: important ? 'tomato' : 'black'
  }

  return (
        <span style = {style} className="todo-list-item">
          <span
            className="todo-list-item-name">
            {name}
          </span>
          <button type="button"
                  className="btn done-btn icons">
            <i className="fas fa-exclamation-circle"></i>
          </button>
    
          <button type="button"
                  className="btn delete-btn icons">
            <i className="fa fa-trash-o" />
          </button>
        </span>
      );
}

export default TodoListItem;
import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
      done: false,
      important: false
    }

    onLabelClick = () => {
      console.log(`Done: ${this.props.name}`)
      this.setState((state) => {
        return {
          done: !state.done
        }
      })
    }

    onMarkImportant = () => {
      this.setState((state) => {
        return {
          important: !state.important
        }
      })
    }

  render() {

    const { name } = this.props
    const { done, important } = this.state

    let classNames = 'todo-list-item'
    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <span className={ classNames }>
        <span
          className="todo-list-item-name"
          onClick = { this.onLabelClick }>
          {name}
        </span>
        <button type="button"
                className="btn done-btn icons"
                onClick = { this.onMarkImportant }>
          <i class="fas fa-exclamation-circle"></i>
        </button>
  
        <button type="button"
                className="btn delete-btn icons">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

// const TodoListItemFunc = ({ name, important = false }) => {
    
//   const style = {
//     color: important ? 'tomato' : 'black'
//   }

//   return (
//         <span style = {style} className="todo-list-item">
//           <span
//             className="todo-list-item-name">
//             {name}
//           </span>
//           <button type="button"
//                   className="btn done-btn icons">
//             <i className="fas fa-exclamation-circle"></i>
//           </button>
    
//           <button type="button"
//                   className="btn delete-btn icons">
//             <i className="fa fa-trash-o" />
//           </button>
//         </span>
//       );
// }


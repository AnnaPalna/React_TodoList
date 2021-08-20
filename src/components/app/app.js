import { Component } from 'react';
import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form"; 
import './app.css'

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      {name: 'do', important: false, id: 1},
      {name: 'die', important: true, id: 2},
      {name: 'cry', important: false, id: 3}
    ]
  }

    deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id)
        let newTodoData = [...todoData]
        newTodoData.splice(idx, 1)

        return {
          todoData: newTodoData
        }
      })
    }

    addItem = (text) => {
      //generate id
      const newItem = {
        name: text,
        important: false,
        id: this.maxId++
      }

      this.setState(({ todoData }) => {
        const newArr = [...todoData, newItem]

        return {
          todoData: newArr
        }
      })
    }

    render(){
    return (
      <div className='wrapper'>
      <AppHeader />
      <ItemAddForm onItemAdded = { this.addItem } />
      <TodoList todos = { this.state.todoData }
      onDeleted = { this.deleteItem }/>
    </div>
    )
  }
}

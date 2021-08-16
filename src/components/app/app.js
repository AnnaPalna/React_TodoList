import AppHeader from "../app-header/app-header";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";
import './app.css'

const App = () => {

  const todoData = [
    {name: 'do', id: 1},
    {name: 'die', id: 2},
    {name: 'cry', id: 3}
  ];

    return (
      <div className='wrapper'>
      <AppHeader />
      <ItemAddForm />
      <TodoList todos = {todoData}/>
    </div>
    )
}

export default App;
import { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        name: ''
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onItemAdded(this.state.name)
        this.setState({
            name: ''
        })
    }

    render() {
    return (
        <div>
            <form onSubmit = { this.onSubmit }>
                <input type='text' required aria-required="true" maxlength="15"
                        className=''
                        onChange = { this.onNameChange }
                        placeholder="What needs to be done"
                        value = {this.state.name}>
                </input>
                <button 
                    className="btn add-btn">
                    Add
                </button>
            </form>
        </div>
    )
}
}
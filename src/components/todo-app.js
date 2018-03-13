import React from 'react'
import List from './list'
import Input from './input'

class ToDoApp extends React.Component {

    componentWillMount() {
        this.setState({
            list: ['thing1', 'thing2', 'thing3'],
            newToDo: ''
        })
    }

    onInputChange = (event) => {
        this.props.inputChange(event.target.value)
    }

    onInputSubmit = (event) => {
        event.preventDefault()
        this.props.inputSubmit()
    }

    onDeleteItem = (i) => {
        event.preventDefault()
        this.props.deleteListItem(i)
    }

    render() {
        console.log(this.props)
        return (
            <div className="panel-body">
                <h1>My To Do App</h1>
                <hr/>
                List goes here：
                <List items={this.props.toDoApp.list} onDeleteItem={this.onDeleteItem}/>
                <Input onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit}/>
            </div>
        );
    }
}

export default ToDoApp
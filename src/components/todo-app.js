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
        this.setState({newToDo: event.target.value})
    }

    onInputSubmit = (event) => {
        event.preventDefault()
        this.setState((previousState) => ({
            list: [...previousState.list, previousState.newToDo ],
            newToDo: ''
        }))
        console.log('-------------------')
        console.log(this.state.list)
    }

    onDeleteItem = (i) => {
        event.preventDefault()
        this.setState((previousState) => ({
            list: [
                ...previousState.list.slice(0, i),
                ...previousState.list.slice(i+1)
            ]
        }))
    }

    render() {
        return (
            <div className="panel-body">
                <h1>My To Do App</h1>
                <hr/>
                List goes here：
                <List items={this.state.list} onDeleteItem={this.onDeleteItem}/>
                <Input onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit}/>
            </div>
        );
    }
}

export default ToDoApp
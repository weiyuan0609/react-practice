import React from 'react'
import List from './list'

class ToDoApp extends React.Component {

    componentWillMount() {
        this.setState({
            list: ['thing1', 'thing2', 'thing3']
        })
    }

    render() {
        return (
            <div className="panel-body">
                <h1>My To Do App</h1>
                <hr/>
                List goes here：
                <List items={this.state.list} />
            </div>
        );
    }
}

export default ToDoApp
import { connect } from 'react-redux'
import ToDoApp from '../components/todo-app'
import { inputChange, inputSubmit, deleteListItem } from '../redux/modules/toDoApp'

function mapStateToProps(state) {
    return {
        toDoApp: state.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputChange: (value) => dispatch(inputChange(value)),
        inputSubmit: () => dispatch(inputSubmit()),
        deleteListItem: (i) => dispatch(deleteListItem(i))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp)

const INPUT_CHANGED = 'INPUT_CHANGED'
const INPUT_SUBMIT = 'INPUT_SUBMIT'
const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM'

export function inputChange (value) {
    return {
        type: INPUT_CHANGED,
        value
    }
}

export function inputSubmit () {
    return {
        type: INPUT_SUBMIT
    }
}

export function deleteListItem (index) {
    return {
        type: DELETE_LIST_ITEM,
        index
    }
}

const initialState = {
    list: ['thing1', 'thing2', 'thing3'],
    newToDo: ''
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
    case INPUT_CHANGED:
        return Object.assign(
            {},
            state,
            {newToDo: action.value}
        )
    case INPUT_SUBMIT:
        return Object.assign(
            {},
            state,
            {
                list: [...state.list, state.newToDo],
                newToDo: ''
            }
        )
    case DELETE_LIST_ITEM:
        return Object.assign(
            {},
            state,
            {
                list: [
                    ...state.list.slice(0, action.index),
                    ...state.list.slice(action.index + 1)
                ]
            }
        )
    default:
        return state
    }
}

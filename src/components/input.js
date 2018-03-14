import React from 'react'

const Input = (props) => {
    return (
        <form action="">
            <div className="group">
                <label htmlFor="listInput">Email address</label>
                <input
                    type="text"
                    className="form-control"
                    id="listItemInput"
                    placeholder="Add new todo"
                    onChange={props.onInputChange}
                />
                <button className="btn" onClick={props.onInputSubmit}>Add Item</button>
            </div>
        </form>
    )
}

export default Input

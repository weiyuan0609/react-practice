import React from 'react'

const List = (props) => {
    return (
        <div>
            <ul>
                {
                    props.items.map((el, i) => (
                        <li key={i}>
                            <span>{el}</span>
                            <button className="btn" onClick={() => props.onDeleteItem(i)}>x</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
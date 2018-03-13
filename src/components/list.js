import React from 'react'

const List = (props) => {
    console.log(props.items)
    const list = props.items.map((el, i)=>(
        <li key={i}>
            <span>{el}</span>
            <button className="btn" onClick={() => props.onDeleteItem(i)}>x</button>
        </li>
    ));

    return (
        <div>
            <ul>
                {
                    list
                }
            </ul>
        </div>
    )
}

export default List
import React from 'react'

const List = (props) => {
    console.log(props.items)
    const list = props.items.map((el, i)=>(
        <li key={i}><h2>{el}</h2></li>
    ));

    console.log({ list })
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
import React from 'react'

const HelloJSX = props =>{
    console.log(props)
    return(
        <div>
            <h1>in HELLO {props.name}</h1>
            {props.children}
        </div>
    )
}

export default HelloJSX
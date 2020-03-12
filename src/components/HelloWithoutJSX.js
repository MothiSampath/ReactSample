import React from 'react'

const HelloWithoutJSX = () =>{
   return React.createElement('div' , null , React.createElement('h1' , null , 'in without JSX'))
}

export default HelloWithoutJSX
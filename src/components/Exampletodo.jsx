import React from 'react'
import { useTodo } from '../contexts/TodoContext'

function Exampletodo() {
    const {todos} = useTodo()
  return (
    <div>
        {console.log(todos)}
    </div>
  )
}

export default Exampletodo
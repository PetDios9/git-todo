import { TextField } from '@material-ui/core'
import React from 'react'

const TodoInputBar = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <TextField 
                id="todoInputBar" 
                label="Enter Todo!" 
                value={props.todosText} 
                onChange={props.updateTodoInputBar}
            />

        </form>
    )
}

export default TodoInputBar
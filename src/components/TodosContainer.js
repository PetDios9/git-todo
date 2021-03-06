import { Button, Grid } from '@material-ui/core'
import {React, useState} from 'react'
import TodoCards from './TodoCards'
import TodoInputBar from './TodoInputBar'

const TodosContainer = () =>{

    let [todoText, setTodoText] = useState('')
    let [todoItems, setTodoItems] = useState([])

    const clearFinishedTodos = () => {
        setTodoItems(prevState => {
            let unFinishedTodos = prevState.filter(todo => !todo.completed)
            return unFinishedTodos
        })
    }

    const updateTodoInputBar = event => {
        let {value} = event.target
        setTodoText(value)
    }

    const clearTodosInputBar = () => {
        setTodoText('')
    }

    const updateCompletedProperty = event => {
        setTodoItems(prevState => {
            let {id} = event.target
            let updatedTodos = prevState.map(todo => {
                 // eslint-disable-next-line
                if (id == todo.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                else{
                    return todo
                }
            })
            return updatedTodos
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        let updatedTodos = todoItems
        updatedTodos.push({
            id: todoItems.length.toString(),
            todoText: todoText,
            completed: false
        })
        setTodoItems(updatedTodos)
        clearTodosInputBar()
    }

    let renderedTodos = todoItems.map(todo =>
        <TodoCards  
            key={todo.id}
            id={todo.id} 
            todoText={todo.todoText} 
            completed={todo.completed} 
            updateCompletedProperty={updateCompletedProperty}
        />
        )

    return (
            <Grid container spacing={1} direction="row" alignContent="center" style={{overflowX: 'hidden', paddingLeft: '3%'}}>

                <Grid item xs={12}>
                    <TodoInputBar 
                    todosText={todoText} 
                    updateTodoInputBar={updateTodoInputBar} 
                    handleSubmit={handleSubmit} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleSubmit}>
                        Add Todo
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={clearFinishedTodos} >
                        Clear finished Todos
                    </Button>
                </Grid>
                {renderedTodos}
            </Grid>
    )
}


export default TodosContainer
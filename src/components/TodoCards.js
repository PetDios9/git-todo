import { Card, CardContent, Typography, makeStyles, Grid, Checkbox } from '@material-ui/core'
import React from 'react'

const TodoCards = props => {

    const useStyles = makeStyles({
        root: {
            backgroundColor: '#212121',
            maxWidth: 300,
            height: 100,
            color: "#FFF",
        }
    })
    let cardStyles = useStyles()

    return(
        <Grid item xs={3}>
            <Card id={props.id} variant="outlined" className={cardStyles.root}>
                <CardContent>
                    <Checkbox checked={props.completed} id={props.id} onChange={props.changeCompletedProperty}/>
                    <Typography variant="body1"
                    style={{
                        textDecoration: props.completed ? 'line-through' : ''
                    }}
                    >
                        {props.todoText}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default TodoCards
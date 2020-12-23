import React from 'react'
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core/'

const Header = () => {
    const useStyles = makeStyles({
        root: {
            backgroundColor: '#333333'
        }
    })

    const classes = useStyles()

    return(
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar variant='dense' >
                    <Typography variant="h6">
                        Things To Do
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
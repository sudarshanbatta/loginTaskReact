import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles({
    root: {
      width: 400,
      margin:'auto',
      marginTop:30,
      height:'90vh'
    },
})

function SimpleCard(props) {
    const classes = useStyles();
    return (
        <div>
             <Card className={classes.root}>
             <CardContent>
              {props.children}
             </CardContent>
             </Card>
        </div>
    )
}

export default SimpleCard

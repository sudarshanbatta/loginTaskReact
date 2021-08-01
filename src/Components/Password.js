import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        width: '41ch',
      },
    },
  }));
  

const Password = (props) => {
    const classes = useStyles();
    return (
        <div>
            <TextField id={props.id}
              value={props.value} 
              label={props.placeholder} 
              name={props.name} 
              type={props.type}
              onChange={props.onValueChange}
              onBlur={props.onInputBlur}
              className={classes.root}
              />
            
        </div>
    )
}

export default Password

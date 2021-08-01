import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: 45,
      textalign:"center",
      width:'100%',
      height:'45px'
    },
  },
}));
const LoginButton = (props) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Button variant="contained" type={props.buttonType} color="primary">
        Login
      </Button>
    </div>
  )
}
export default LoginButton;
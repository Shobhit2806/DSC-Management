import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddApplicant() {
  const classes = useStyles();

  return (
      <div className="">
          <div className="">
              <h1>Add Applicant</h1>
          </div>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Notes" variant="outlined" />
      <TextField id="outlined-basic" label="Technologies" variant="outlined" />
    </form>
    </div>
  );
}

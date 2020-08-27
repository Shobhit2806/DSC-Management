import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './AddPosition.css'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddPosition() {
  const classes = useStyles();

  return (
    <div className="forms">
      <div className="mainposition">
          <div className="positiontitle">
              <h1>Add Position</h1>
          </div>
    <form className="formposition" noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <TextField id="outlined-basic" label="Technologies" variant="outlined" />
    </form>
    </div>
     <div className="mainapplicant">
     <div className="applicanttitle">
         <h1>Add Applicant</h1>
     </div>
<form className="applicantformposition"  noValidate autoComplete="off">
 <TextField id="outlined-basic" label="Name" variant="outlined" />
 <TextField id="outlined-basic" label="Notes" variant="outlined" />
 <TextField id="outlined-basic" label="Technologies" variant="outlined" />
</form>
</div>
</div>
  );
}

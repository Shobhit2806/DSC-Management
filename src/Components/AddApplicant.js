import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import './AddPosition.css'


export default class AddApplicant extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      name:'',
      notes:'',
      tech:[]
    }
  }
  changeHandler = e =>{
    this.setState({[e.target.name]:e.target.value})
    
  }
  submitHandler = e =>{

    e.preventDefault();
    console.log(this.state)
    const {name,notes,tech}=this.state
    localStorage.setItem('name-applicant',name);
    localStorage.setItem('notes-app',notes);
    localStorage.setItem('tech-app',tech);

    
  }

  render()
  {
    const {name,notes,tech}=this.state
    return (
     
     
       <div className="mainapplicant">
       <div className="applicanttitle">
           <h1>Add Applicant</h1>
       </div>
  <form onSubmit={this.submitHandler} className="applicantformposition"  noValidate autoComplete="off">
   <TextField onChange={this.changeHandler} name="name" id="outlined-basic" label="Name" variant="outlined" />
   <TextField onChange={this.changeHandler} name="notes" id="outlined-basic" label="Notes" variant="outlined" />
   <TextField onChange={this.changeHandler} name="tech" id="outlined-basic" label="Technologies" variant="outlined" />
   <br/>
   <button className="btnsubmit" type="submit">Submit</button>
  </form>
  </div>
  
    );
  }
  
}

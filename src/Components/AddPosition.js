import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import './AddPosition.css'
import AddApplicant from './AddApplicant';


export default class AddPosition extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      name:'',
      desc:'',
      tech:[]
    }
  }
  changeHandler = e =>{
    this.setState({[e.target.name]:e.target.value})
    
  }
  submitHandler = e =>{

    e.preventDefault();
    console.log(this.state)
    const {name,desc,tech}=this.state
    localStorage.setItem('name',name);
    localStorage.setItem('desc',desc);
    localStorage.setItem('tech',tech);

    
  }

  render()
  {
    const {name,desc,tech}=this.state
    return (
      <div className="forms">
        <div className="mainposition">
            <div className="positiontitle">
                <h1>Add Position</h1>
            </div>
      <form onSubmit={this.submitHandler} className="formposition" noValidate autoComplete="off">
        <TextField onChange={this.changeHandler} name = "name" id="outlined-basic" label="Name" variant="outlined" />
        <TextField onChange={this.changeHandler} name = "desc" id="outlined-basic" label="Description" variant="outlined" />
        <TextField onChange={this.changeHandler} name = "tech" id="outlined-basic" label="Technologies" variant="outlined" />
        <br/>
        <button className="btnsubmit" type="submit">Submit</button>
      </form>
      </div>
       <AddApplicant />
  </div>
    );
  }
  
}

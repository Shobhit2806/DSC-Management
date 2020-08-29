import React, { Component } from 'react'
import Navbar from './Navbar'
import SearchBar from "material-ui-search-bar";
import SearchResult from './SearchResult'

export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:'',
             name:'',
             tech:''
        }
    }
    
    render() {
        const {value,name,tech}=this.state
        const fun=e=>{
            console.log(value);
            var name = localStorage.getItem("name")
            var tech = localStorage.getItem("tech")
            
            this.setState({name:name});
            this.setState({tech:tech})

            
        }
        
        return (
          
            <div>
                
                <Navbar />
                <SearchBar
                    
                    value={this.state.value}
                    onChange={(newValue) => this.setState({ value: newValue })}
                    // onRequestSearch={() => console.log(this.state.value)}
                    onRequestSearch={fun}
                />
                                {
                    value.length?
                value.map(name,tech =><SearchResult name={name} tech={tech}/>):
                null
                }


                
                
                

            </div>
        )
    }
}

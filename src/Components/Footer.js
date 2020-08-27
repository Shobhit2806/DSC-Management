import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import fblogo from '../assests/facebook.png'
import githublogo from '../assests/githublogo.png'
import dsclogo from '../assests/dsc.png'
function Footer() {
    return (
        <div className="Footer">
            <footer id="footer">
    <div className="container footercont">
    <div className="socialcontainer" >
   <div className="textc"><h1>Catch Us On</h1></div>
	<div className="social-links">
      
  <a href="https://www.facebook.com/dscjiitnoida" className="facebook"><img  className="facebookicon" src={fblogo}/></a>
        <a href="https://github.com/dsc-jiit-128" className="github"><img  className="githubicon" src={githublogo}/></a>
        
        
		
		 
      </div>
      </div>
	 
	 <div className="row">
	 <div>Made with ❤ for  </div>
	 <div className="col-md-3 text">
   
   <img className="logofooter" src = {dsclogo}/>
   
            <div className="footerhead">Developer Student Clubs<b><br/> JIIT128</b></div>
            <p className=" MainDsc"> </p>
            
          </div>

       
        
         
        </div>
    

    

      
      
        
      
    </div>
  </footer>
 
        </div>
    )
}

export default Footer;

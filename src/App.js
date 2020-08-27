import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import AddPosition from './Components/AddPosition';
import AddApplicant from './Components/AddApplicant';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AddPosition />
      <Footer /> 
    </div>
  );
}

export default App;

import './App.css';
import { React, useState, useEffect } from 'react'


  // Import components
  import Homescreen from './Homescreen'
  import About from './About'
  import Login from './Login'
  import Signup from './Signup'

  let App = () => {
    const [loginValidated, setLoginValidated] = useState(false)
    const [visitorData, setVisitorData] = useState([])
    const [shelterData, setShelterData] = useState([])

  useEffect (() => {
    fetch('http://localhost:9393/visitors/')
    .then(res => res.json())
    .then(data => setVisitorData(data.visitors))
  },[])

  return (
    <div className="App"> 
      <Homescreen visitorData = {visitorData}/>
      <About />
      <Login />
    </div>
  );
}

export default App;

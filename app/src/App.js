import './App.css';
import { React, useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

  // Import components
  import Home from './Home'
  import Login from './Login'
  import Signup from './Signup'
  import Dog from './Dog'
  import Cat from './Cat'
  import Adoption from './Adoption'
  import Shelter from './Shelter'

  let App = () => {
      // set login validated to true if you want to work on the rest of the app
    const [loginValidated, setLoginValidated] = useState(false)
    const [visitorData, setVisitorData] = useState([])
    const [animalData, setAnimalData] = useState([])
    const [shelterData, setShelterData] = useState([])
    const [adoptionData, setAdoptionData] = useState([])
    const [currentUser, setCurrentUser] = useState({
      username: "",
      password: ""
    })
    const history = useHistory()

  useEffect (() => {
    fetch('http://localhost:9393/visitors/')
    .then(res => res.json())
    .then(data => setVisitorData(data.visitors))
  },[])

  useEffect (() => {
    fetch('http://localhost:9393/animals/')
    .then(res => res.json())
    .then(data => setAnimalData(data.animals))
  },[])

  useEffect (() => {
    fetch('http://localhost:9393/shelters/')
    .then(res => res.json())
    .then(data => setShelterData(data.shelters))
  },[])

  useEffect (() => {
    fetch('http://localhost:9393/adoptions/')
    .then(res => res.json())
    .then(data => setAdoptionData(data.adoptions))
  },[])

  if (loginValidated === false) {
    history.push("/login")
    return (
      <div className = "App">
        <Switch>
          <Route exact path="/login">
            <Login 
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              loginValidated={loginValidated}
              setLoginValidated={setLoginValidated}
              visitorData={visitorData}
            />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    )
  } else {
    return (
      <div className="App"> 
        <Switch>
          <Route exact path="/login">
            <Login 
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  loginValidated={loginValidated}
                  setLoginValidated={setLoginValidated}
                  visitorData={visitorData}
            />
          </Route>
          <Route  exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home visitorData = {visitorData}/>
          </Route>
          <Route exact path="/dogs">
            <Dog animalData = {animalData}/>
          </Route>
          <Route exact path="/cats">
            <Cat animalData = {animalData}/>
          </Route>
          <Route exact path="/shelters">
            <Shelter shelterData = {shelterData}/>
          </Route>
          <Route exact path="/adoptions">
            <Adoption adoptionData = {adoptionData} animalData = {animalData}/>
          </Route>
        </Switch>
      </div>
    );
  }
  }

export default App;

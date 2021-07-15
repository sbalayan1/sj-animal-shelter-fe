import './App.css';
import { React, useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

  // Import components
  import Home from './Home'
  import Login from './Login'
  import Signup from './Signup'

  let App = () => {
      // set login validated to true if you want to work on the rest of the app
    const [loginValidated, setLoginValidated] = useState(false)
    const [visitorData, setVisitorData] = useState([])
    const [shelterData, setShelterData] = useState([])
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

  if (loginValidated === false) {
    history.push('/login')
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
        </Switch>
      </div>
    );
  }
  }

export default App;

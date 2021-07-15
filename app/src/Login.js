import { useState } from 'react'
import { useHistory } from 'react-router-dom'

let Login = ({ currentUser, setCurrentUser, loginValidated, setLoginValidated, visitorData }) => {
    const history = useHistory()

    let handleCreateLogin = () => {
        console.log('working')
        history.push('/signup')
    }
    
    let handleChange = (e) => {
        setCurrentUser({
            ...currentUser,
            [e.target.id] :e.target.value
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        console.log("hi i'm working")
        console.log(visitorData)

        fetch('http://localhost:9393/visitors')
        .then(res => res.json())
        .then(data => {
            console.log(visitorData)
            console.log(currentUser)
            if (currentUser.username === "" || currentUser.username===undefined) {
                alert ('Please input a username')
                setLoginValidated(false)
            } else {
                let foundUser = Object.values(visitorData).find(user => {
                    if (user.name === currentUser.username) {
                        return user.name === currentUser.username
                    } else {
                        history.push("/login")
                        setLoginValidated(false)
                    }
                })
                
                console.log(foundUser)

                if (foundUser === "" || foundUser === undefined) {
                    alert('That user does not exist. Please create a new login.')
                } else {
                    console.log(currentUser.password)
                    console.log(foundUser.password)
                    if (currentUser.password === undefined || currentUser.password === "") {
                        alert('Please input a password')
                        history.push('/login')
                        setLoginValidated(false)
                    } else if (currentUser.password==foundUser.password) {
                        setLoginValidated(true)
                        history.push('/')
                        alert('Login Validated')
                    }     
                }
            }
        })
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-card">
                <div>
                    Username: 
                    <input id="username" onChange={handleChange} />
                </div>
                <div>
                    Password:
                    <input id="password" onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={handleCreateLogin}>Sign Up</button>
                </div>
            </div>
        </form>    
    )
}

export default Login
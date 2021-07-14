import { useState } from 'react'
import { useHistory } from 'react-router-dom'

let Login = ({ currentUser, setCurrentUser, loginValidated, setLoginValidated }) => {
    const history = useHistory()

    let handleCreateLogin = () => {
        history.push('/signup')
    }
    
    let handleChange = (e) => {
        // setCurrentUser({
        //     ...currentUser,
        //     [e.target.name] :e.target.value
        // })
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:9393/visitors')
        .then(res => res.json())
        .then(data => {
            console.log(data.visitors)
            // if (currentUser.username === "" || currentUser.username===undefined) {
            //     alert ('Please input a username')
            //     setLoginValidated(false)
            // } else {
            //     let foundUser = data.find(user => {
            //         return user.username===currentUser.username
            //     })
            // }
        })
    }

    return (
        <form className="login_form" onSubmit={handleSubmit}>
            <div>
                Username: 
                <input onChange={handleChange} />
            </div>
            <div>
                Password:
                <input onChange={handleChange} label="password"/>
            </div>
            <div>
                <button type="submit">Submit</button>
                <button onClick={() => handleCreateLogin}>Sign Up</button>
            </div>
        </form>
    )
}

export default Login
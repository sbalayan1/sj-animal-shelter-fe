import { useState } from 'react'
import { useHistory } from 'react-router-dom'

let Signup = () => {

    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        location_id: 53
    })
    const history = useHistory()

    let handleChange = (e) => {
        setNewUser({
            ...newUser, 
            [e.target.id] : e.target.value
        })

        console.log(newUser)
    }

    let handleZipCode = (e) => {
        setNewUser({
            ...newUser,
            location_id : e.target.value === "San Francisco" ? 53 : 54
        })

        console.log(newUser)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        if(newUser.username === "" || newUser.password === ""){
            alert('Please input a valid username or password.')
            setNewUser({
                username: "",
                password: "", 
                location_id: 0
            })
        } else {
            alert('Thank you for signing up! Please login with your new user information.')
            fetch('http://localhost:9393/visitors', {
            method: 'POST',
            headers: {'Content-type':'Application/json'}, 
            body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                history.push('/login')
            })
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-card">
                <div>
                    Username: 
                    <input id="username"onChange={handleChange} />
                </div>
                <div>
                    Password:
                    <input id="password" onChange={handleChange}/>
                </div>
                <div> Set your location:
                    <select onChange={handleZipCode}>
                        <option>San Francisco</option>
                        <option>Los Angeles</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>  
    )
}

export default Signup
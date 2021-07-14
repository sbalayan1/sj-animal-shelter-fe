let Signup = () => {

    let handleChange = () => { 
    }

    let handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login_form" onSubmit={handleSubmit}>
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
            </div>
        </div>  
    )
}

export default Signup
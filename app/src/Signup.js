let Signup = () => {

    let handleChange = () => { 
    }

    let handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-card">
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
        </form>  
    )
}

export default Signup
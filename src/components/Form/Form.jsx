import "./Form.css"

const Form = () => {

    return (
        <div className="form">
            <h2 className="form-title">Login / Register</h2>
            <div className="inputs">

                <label htmlFor="">Insert your full <span className="dark-purple-highlight">Name</span></label>
                <input type="text" placeholder="Juan Andres Yotti"/>
                
                <label htmlFor="">Insert your <span className="dark-purple-highlight">Username</span></label>
                <input type="text" placeholder="Yants2002"/>

                <label htmlFor="">Insert your <span className="dark-purple-highlight">Email</span></label>
                <input type="email" placeholder="youremail@gmail.com"/>

                <label htmlFor="">Insert your <span className="dark-purple-highlight">Password</span></label>
                <input type="password" placeholder="....................."/>
            </div>
            <button className="login-btn">Log In</button>
        </div>
    )
}


export default Form;
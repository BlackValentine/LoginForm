import './App.css';
import { useState } from 'react'

function App() {

    const [toggleForm, setToggleForm] = useState(true)

    const signin = () => {
        setToggleForm(!toggleForm)
    }

    return (
        <div className={toggleForm ? "body" : "body active"}>
            <div className="container">
                <div className="blueBg">
                    <div className="box signin">
                        <h2>Already have an Account?</h2>
                        <button className="signinBtn" onClick={signin}>Sign in</button>
                    </div>
                    <div className="box signup">
                        <h2>Don't have an Account?</h2>
                        <button className="signupBtn" onClick={signin}>Sign up</button>
                    </div>
                </div>

                <div className={toggleForm ? "formBx" : "formBx active"}>
                    <div className="form signinForm">
                        <form>
                            <h3>Sign In</h3>
                            <input type="text" placeholder='Username' />
                            <input type="password" placeholder='Password' />
                            <input type="submit" value="Login" />
                            <a href="#" class="forgot">Forgot Password</a>
                        </form>
                    </div>

                    <div className="form signupForm">
                        <form>
                            <h3>Sign Up</h3>
                            <input type="text" placeholder='Username' />
                            <input type="text" placeholder='Email Address' />
                            <input type="password" placeholder='Password' />
                            <input type="password" placeholder='Confirm Password' />
                            <input type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

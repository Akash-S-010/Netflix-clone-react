import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { logIn, signUp } from "../../firebase";

function Login() {
  const [signState, setSignState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = (event) => {
    event.preventDefault();
    if (signState === "Sign Up") {
      signUp(name, email, password);
    } else {
      logIn(email, password);
    }
  }

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="login logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit" onClick={user_auth}>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign Up" ? (
            <p>
              Alredy have account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          ) : (
            <p>
              New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

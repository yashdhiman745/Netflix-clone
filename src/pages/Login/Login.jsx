import React, { useState } from "react";
import "./login.css";
import logo from "../../netflix_react_assets/logo.png";
import { login, signup } from "../../firebase";
import { toast } from "react-toastify";
import netflixspinner from "../../netflix_react_assets/netflix_spinner.gif";

const Login = () => {
  const [sigin, setsignin] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [loading, setloading] = useState(false);
  const user_auth = async (e) => {
    setloading(true);
    e.preventDefault();
    if (sigin === "Sign In") {
      await login(email, pass);
    } else {
      await signup(name, email, pass);
      // toast.success("Signed up successfully")
      // setsignin("Sign In")
    }
    setloading(false);
  };
  return loading ? (
    <div className="login-spinner">
      <img src={netflixspinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="" />
      <div className="login-form">
        <h1>{sigin}</h1>
        <form>
          {sigin === "Sign Up" ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Your Email"
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            placeholder="Your Password"
          />
          <button onClick={user_auth} type="submit">
            {sigin}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="check" />
              <label htmlFor="check">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {sigin === "Sign In" ? (
            <p>
              New to Netflix{" "}
              <span onClick={() => setsignin("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setsignin("Sign In")}>Sign in Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

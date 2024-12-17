import { Link } from "react-router";
export default function Signin() {
    return (
        <div id="signin-screen">
            <h3>Sign in</h3>
            <input className="username" placeholder="username" /> <br/>
            <input className="password" placeholder="password" type="password"/> <br/>
           <button> <Link id="signin-btn" to="/Kanbas/Dashboard">Sign in</Link></button><br/>
            <Link id="signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
        </div>
    )
}
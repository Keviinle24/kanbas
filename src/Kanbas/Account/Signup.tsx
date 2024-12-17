import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="username" /><br/>
      <input placeholder="password" type="password" className="password" /><br/>
      <input placeholder="verify password" type="password" className="password-verify" /><br/>
      <Link  to="/Kanbas/Account/Profile" > Sign up </Link><br />
      <Link  to="/Kanbas/Account/Signin" >Sign in</Link>
    </div>
);}

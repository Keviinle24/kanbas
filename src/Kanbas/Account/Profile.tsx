import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="profile-screen">
      <h3>Profile</h3>
      <input defaultValue="alice" placeholder="username" className="username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" id="firstname" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="email" /><br/>
      <select defaultValue="FACULTY" id="role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kanbas/Account/Signin" >Sign out</Link>
    </div>
);}

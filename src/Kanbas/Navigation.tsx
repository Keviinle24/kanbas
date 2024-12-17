import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div id="kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="neu-link" target="_blank">Northeastern</a><br/>
      <Link to="/Kanbas/Account" id="account-link">Account</Link><br/>
      <Link to="/Kanbas/Dashboard" id="dashboard-link">Dashboard</Link><br/>
      <Link to="/Kanbas/Dashboard" id="course-link">Courses</Link><br/>
      <Link to="/Kanbas/Calendar" id="calendar-link">Calendar</Link><br/>
      <Link to="/Kanbas/Inbox" id="inbox-link">Inbox</Link><br/>
      <Link to="/Labs" id="labs-link">Labs</Link><br/>
    </div>
);}

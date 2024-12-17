import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="dashboard">
      <h1 id="dashboard-title">Dashboard</h1> <hr />
      <h2 id="dashboard-published">Published Courses (12)</h2> <hr />
      <div id="dashboard-courses">
        <div className="dashboard-course">
          <Link className="dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="dashboard-course"> ... </div>
        <div className="dashboard-course"> ... </div>
      </div>
    </div>
  );
}

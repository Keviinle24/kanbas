import { Link } from "react-router-dom";
export default function CoursesNavigation() {
  return (
    <div id="courses-navigation">
      <Link id="course-home-link"    to="/Kanbas/Courses/1234/Home">Home</Link><br/>
      <Link id="course-modules-link" to="/Kanbas/Courses/1234/Modules">Modules
        </Link><br/>
      <Link id="course-piazza-link"  to="/Kanbas/Courses/1234/Piazza">Piazza</Link><br/>
      <Link id="course-zoom-link"    to="/Kanbas/Courses/1234/Zoom">Zoom</Link><br/>
      <Link id="course-quizzes-link" to="/Kanbas/Courses/1234/Assignments">
          Assignments</Link><br/>
      <Link id="course-assignments-link" to="/Kanbas/Courses/1234/Quizzes">Quizzes
        </Link><br/>
      <Link id="course-grades-link"  to="/Kanbas/Courses/1234/Grades">Grades</Link><br/>
      <Link id="course-people-link"  to="/Kanbas/People">People</Link><br/>
    </div>
);}

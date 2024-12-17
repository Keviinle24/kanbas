export default function Assignments() {
    return (
      <div id="assignments">
        <input id="search-assignment"
               placeholder="Search for Assignments" />
        <button id="add-assignment-group">+ Group</button>
        <button id="add-assignment">+ Assignment</button>
        <h3 id="assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="assignment-list">
          <li className="assignment-list-item">
            <a className="assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <br/>
            <div>Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts</div>
          </li>
          <li className="assignment-list-item">
          <a className="assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/567">
              A1 - ENV + HTML
            </a>
            <br/>
            <div>Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts</div>
          </li>
          <li className="assignment-list-item">
          <a className="assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/890">
              A1 - ENV + HTML
            </a>
            <br/>
            <div>Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts</div>
          </li>
        </ul>
      </div>
  );}
  
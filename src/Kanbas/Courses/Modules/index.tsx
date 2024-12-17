export default function Modules() {
    return (
        <div>
            {/* Implement Collapse All button, View Progress button, etc. */}
            <button id="collase-all-btn">Collapse All</button>
            <button id="view-progress-btn">View Progress</button>
            <select id="options">
                <option selected value="publish-all">Publish All</option>
                <option value="option-2">Option 2</option>
            </select>
            <button id="add-module-btn">+ Module</button>
            <ul id="modules">
                <li className="module">
                    <div className="title">Week 1</div>
                    <ul className="lessons">
                        <li className="lesson">
                            <span className="title">LEARNING OBJECTIVES</span>
                            <ul className="content">
                                <li className="content-item">Introduction to the course</li>
                                <li className="content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="module">
                    <div className="title">Week 2</div>
                    <ul className="lessons">
                        <li className="lesson">
                            <span className="title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

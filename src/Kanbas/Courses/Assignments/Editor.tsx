export default function AssignmentEditor() {
    return (
        <div id="assignments-editor">
            <strong> <label htmlFor="name">Assignment Name</label></strong><br /><br />
            <input id="name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="description" cols={50} rows={15}>
                The assignment is available online. The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online. The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.The assignment is available online.
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="points">Points</label>
                    </td>
                    <td>
                        <input id="points" value={100} />
                    </td>

                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="assignment-group">
                            <option value="assignment-group">Assignment Group</option>

                        </select>
                    </td>
                </tr>

                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="display-grade-as">
                            <option value="display-grade-as">Percentage</option>

                        </select>
                    </td>
                </tr>

                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="online">Submission Type</label>
                    </td>
                    <td>
                        <select id="online">
                            <option value="online">Online</option>

                        </select><br /><br />

                        <label>Online Entry Options</label><br />

                        <input type="checkbox" name="check-genre" id="text-entry" />
                        <label htmlFor="text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-genre" id="website-url" />
                        <label htmlFor="website-url">Website URL</label><br />

                        <input type="checkbox" name="check-genre" id="media-recordings" />
                        <label htmlFor="media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-genre" id="student-annotation" />
                        <label htmlFor="student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-genre" id="file-uploads" />
                        <label htmlFor="file-uploads">File Uploads</label>
                    </td>


                </tr>

                <td align="right" valign="top">
                </td>
                <td><br /><label htmlFor="assign-to">Assign to</label><br />
                    <input id="assign-to" value="Everyone" />



                    <tr><br /><label htmlFor="date">Due</label><br />
                        <input type="date"
                            id="date"
                            value="2000-01-21" />
                    </tr>

                    <tr><br /><label htmlFor="available">Available From</label><br />    <input type="date"
                        id="available"
                        value="2000-01-21" />    <td><br /><label htmlFor="until">Until</label><br />    <input type="date"
                            id="until"
                            value="2000-01-21" />  </td>  </tr>

                </td>

            

            </table>
              <hr />
              <button id="Save" style={{float: "right"}}>Save</button>
            
                <button id="cancel" style={{float: "right", marginRight: 10}}  >Cancel</button>
               




        </div>
    );
}

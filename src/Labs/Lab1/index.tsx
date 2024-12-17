export default function Lab1() {
    return (
        <div id="lab1">
            <h2>Lab 1</h2>
            <h3>HTML Exmaples</h3>
            <div id="h-tag">
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
            </div>
            <div id="p-tag">
                <h4>Paragraph Tags</h4>
                <p id="p-1">This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag</p>
                This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.

                This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.

                <p id="p-3">This is the third paragraph. Wrap this paragraph with the paragraph tag to tell browsers to render the gap.</p>
            </div>

            <div id="lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>

                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
            </div>

            <div id="tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>2/17/21</td>
                            <td>95</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div id="images">
                <h4>Image tag</h4>
                Loading an image from the internet:
                <br />
                <img id="starship"
                    width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                />
                <br />
                Loading a local image:
                <br />
                <img id="random-image" src="images/doggyIcon.jpg" height="200px" />
            </div>

            <div id="forms">
                <h4>Form Elements</h4>
                <form id="text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="text-fields-username">Username:</label>
                    <input id="text-fields-username" placeholder="jdoe" /> <br />
                    <label htmlFor="text-fields-password">Password:</label>
                    <input type="password" id="text-fields-password" value="123@#$asd" />
                    <br />
                    <label htmlFor="text-fields-first-name">First name:</label>
                    <input type="text" id="text-fields-first-name" placeholder="John" title="John" /> <br />
                    <label htmlFor="text-fields-last-name">Last name:</label>
                    <input type="text" id="text-fields-last-name" placeholder="Doe"
                        title="The last name" />
                </form>
            </div>

            <h5>Text boxes</h5>
            <label>Biography:</label><br />
            <textarea id="textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>

            <h5 id="buttons">Buttons</h5>
            <button id="all-good" onClick={() => alert("Life is Good!")} type="button">
                Hello World!
            </button>

            <h5>File upload</h5>
            <input id="upload" type="file" />

            <h5 id="radio-buttons">Radio buttons</h5>

            <label>Favorite movie genre:</label><br />

            <input type="radio" name="radio-genre" id="radio-comedy" />
            <label htmlFor="radio-comedy">Comedy</label><br />

            <input type="radio" name="radio-genre" id="radio-drama" />
            <label htmlFor="radio-drama">Drama</label><br />

            <input type="radio" name="radio-genre" id="radio-scifi" />
            <label htmlFor="radio-scifi">Science Fiction</label><br />

            <input type="radio" name="radio-genre" id="radio-fantasy" />
            <label htmlFor="radio-fantasy">Fantasy</label>

            <h5 id="checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label><br />

            <input type="checkbox" name="check-genre" id="checkbox-comedy" />
            <label htmlFor="checkbox-comedy">Comedy</label><br />

            <input type="checkbox" name="check-genre" id="checkbox-drama" />
            <label htmlFor="chkbox-drama">Drama</label><br />

            <input type="checkbox" name="check-genre" id="checkbox-scifi" />
            <label htmlFor="chkbox-scifi">Science Fiction</label><br />

            <input type="checkbox" name="check-genre" id="checkbox-fantasy" />
            <label htmlFor="checkbox-fantasy">Fantasy</label>

            <h4 id="dropdowns">Dropdowns</h4>

            <h5>Select one</h5>
            <label htmlFor="select-one-genre"> Favorite movie genre: </label><br />
            <select id="select-one-genre">
                <option value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">
                    Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>

            <h5>Select many</h5>
            <label htmlFor="select-many-genre"> Favorite movie genres: </label><br />
            <select id="select-many-genre" multiple>
                <option selected value="COMEDY">Comedy</option>
                <option value="DRAMA">Drama</option>
                <option selected value="SCIFI">
                    Science Fiction</option>
                <option value="FANTASY">Fantasy</option>
            </select>

            <h4>Other HTML field types</h4>

            <label htmlFor="text-fields-email"> Email: </label>
            <input type="email"
                placeholder="jdoe@somewhere.com"
                id="text-fields-email" /><br />

            <label htmlFor="text-fields-salary-start"> Starting salary:
            </label>
            <input type="number"
                id="text-fields-salary-start"
                placeholder="1000"
            /><br />

            <label htmlFor="text-fields-rating"> Rating: </label>
            <input type="range" id="text-fields-rating"
                placeholder="Doe"
                max="5"
            /><br />

            <label htmlFor="text-fields-dob"> Date of birth: </label>
            <input type="date"
                id="text-fields-dob"
            /><br />


            <h4>Anchor tag</h4>
            Please&nbsp;
            <a id="lipsum" href="https://www.lipsum.com">click here</a>&nbsp;to get dummy text<br />
        </div>
    );
}
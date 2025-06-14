import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./ProblemPage.css";

const ProblemPage = ({ problems }) => {
  const [CodeSeg, setCodeSeg] = useState("");
  const { pid } = useParams();
  const cleanId = pid.substring(0);

  // console.log(cleanId) ;

  const found = problems.find((prob) => prob.problemsId === cleanId);

  


  const handleKey = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const { selectionStart, value } = event.target;
      const newVal =
        value.substring(0, selectionStart) +
        "\t" +
        value.substring(selectionStart);
      event.target.value = newVal;
      event.target.selectionStart = event.target.selectionEnd =
        selectionStart + 1;
    }
    setCodeSeg(event.target.value);
  };

  return (
    <div>
      {found ? (
        <div id="problempage" className="flex-row">
          <div className="ques">
            <h1>{found.title}</h1>
            <h5>Description</h5>
            <p>{found.description}</p>
            <code>Input : {found.exampleIn}</code>
            <code>Output : {found.exampleOut}</code>
          </div>
          <div className="code">
            <h1>Code Here</h1>
            <form className="code-form" method="post" action="/runprogram">
              <textarea
                name="SolvedCode"
                onKeyDown={(event) => handleKey(event)}
              ></textarea>
              <button type="submit" id="test">
                TestCode
              </button>
              <button type="submit" id="submit">
                SubmitCode
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>The searched Question Doesn't exist</div>
      )}
    </div>
  );
};

export default ProblemPage;

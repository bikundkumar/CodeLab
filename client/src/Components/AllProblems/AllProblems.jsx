import React from "react";
import { Link } from "react-router-dom";
import "./AllProblems.css";

const AllProblemsPage = ({ problems }) => {
  return (
    <div id="allproblems">
      <div className="table-header">
        <h1 className="table-title">All Problems</h1>
        <div className="table-stats">
          <div className="stat-item">
            <span className="stat-number">{problems.length}</span>
            <span>Problems</span>
          </div>
        </div>
      </div>
      
      <table className="problems-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((prob) => (
            <tr key={prob.problemsId}>
              <td className="problem-title-cell">
                <Link 
                  className="problem-title-link" 
                  to={`/problems/${prob.problemsId}`}
                >
                  <span className="problem-id">{prob.problemsId}</span>
                  {prob.title}
                </Link>
              </td>
              <td>
                <span className={`difficulty-badge ${prob.difficulty}`}>
                  {prob.difficulty}
                </span>
              </td>
              <td>
                <span className="acceptance-rate">
                  {prob.acceptance.replace('%', '')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProblemsPage;
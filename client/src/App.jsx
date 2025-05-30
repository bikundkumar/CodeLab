import { BrowserRouter , Routes , Route } from "react-router-dom";

import Navbar from "./Constants/Navbar/Navbar";
import AllProblems from "./Components/AllProblems/AllProblems";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import ProblemPage from "./Components/ProblemPage/ProblemPage";
import Signup from "./Components/Signup/Signup"
import "./App.css";

const problems = [
  {
    problemsId: "1",
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND  of all numbers in this range, inclusive.",
    exampleIn: "left = 5, right = 7",
    exampleOut: "4",
  },
  {
    problemsId: "2",
    title: "202. Add two numbers",
    difficulty: "Medium",
    acceptance: "41%",
    description:
      "Given two numbers, add them and return them in integer range. use MOD=1e9+7.",
    exampleIn: "a = 100, b = 200",
    exampleOut: "300",
  },
  {
    problemsId: "3",
    title: "203. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy.",
    exampleIn: "n = 19",
    exampleOut: "true",
  },
  {
    problemsId: "4",
    title: "204. Removed Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    description: "Given number k , removed kth element",
    exampleIn: "list: 1->2->3 , k = 2",
    exampleOut: "1->3",
  },
  {
    problemsId: "5",
    title: "205. Add two numbers",
    difficulty: "Medium",
    acceptance: "41%",
    description:
      "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
    exampleIn: "a = 100 , b = 200",
    exampleOut: "300",
  },
  {
    problemsId: "6",
    title: "206. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy.",
    exampleIn: "n = 19",
    exampleOut: "true",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/problemset/all"
          element={<AllProblems problems={problems} />}
        />
        <Route
          path="/problems/:pid"
          element={<ProblemPage problems={problems} />}
        />
        <Route path="/*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

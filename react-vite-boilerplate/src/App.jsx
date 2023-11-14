<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Students from "./Students";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Router>
    </>
  );
}
=======
function App() {
  return (
    <>
      <h1>Start here</h1>
    </>
  );
}

export default App;
>>>>>>> f9f625c959e14e4ef0e32d0ddc6933a7e9f7906d

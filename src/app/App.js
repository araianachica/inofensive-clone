import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PreventFraud } from "../pages";

function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
        <Route exact path="/" element={<PreventFraud />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

import "./app.css";
import Header from "./components/Header";
import Add from "./components/Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

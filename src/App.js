import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
// import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Home from "./Home";
import Navbar from "./Navbar";
import Main from "./Main/Main";
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/index" element={<Main />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

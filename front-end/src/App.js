import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./home/home";
import HomePage from "./home/test";
import { Login } from "./login/login";
import Register from "./register/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

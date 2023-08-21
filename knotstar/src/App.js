import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Action from "./components/Action";
import Adventure from "./components/Adventure";


// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='signup/' element={<Signup />}></Route>
    <Route path='login/' element={<Login />}></Route>
    <Route component ={Action} path={'/Action'}></Route>
    <Route component ={Adventure }  path={'/Adventure'}></Route>
   </Routes>
   </BrowserRouter>
   
      
    </div>
  );
}

export default App;

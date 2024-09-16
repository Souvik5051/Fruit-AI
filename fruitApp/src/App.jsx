import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Login";
import Join from "./component/Join/Join";
import Chat from "./component/Join/Chat";
import Faq from "./component/Faq";
import Translator from "./component/Translator";




function App() {
 
  return (
    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/join" element={<Join/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/translator" element={<Translator/>}/>
    </Routes>
  );
}

export default App;

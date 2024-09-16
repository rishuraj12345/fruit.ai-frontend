import Login from "./Components/Login";
import Home from "./Components/Home"
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Chatbot from "./Components/Chatbot";
import Translator from "./Components/Translator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Translator" element={<Translator/>}/>
        <Route path="/Chatbot" element={<Chatbot/>}/>
      
    </Routes>

  );
}

export default App;

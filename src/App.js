import { BrowserRouter, Routes, Route } from "react-router-dom";

// import  Home from './pages/Home';
import Cse from "./inBranch/Cse";
import "./App.css";
import Home1 from "./pages/Home1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/Cse" element={<Cse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import Dashboard from './pages/Dashboard/index';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Signup from './pages/Signup/index';
import StudyMatch from './pages/Match/index';
import Aboutus from './pages/Aboutus/index';
export const MyContext = createContext();

function App() {
  const [showheaderfooter, setshowheaderfooter] = useState(true);
  const values = {
    showheaderfooter,
    setshowheaderfooter,
  };

  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
      {showheaderfooter && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/match" element={<StudyMatch/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
          </Routes>
          {showheaderfooter && <Footer />}
        </MyContext.Provider>
         
        
      </BrowserRouter>
    </>
  );
}

export default App;
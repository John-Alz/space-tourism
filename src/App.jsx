import { Routes, Route } from "react-router-dom";
import './App.scss'
import Destination from './Components/Destination/Destination'
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";

function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/crew" element={<Crew/>} />
        <Route path="/technology" element={<Technology/>} />
    </Routes>
    </>
  )
}

export default App

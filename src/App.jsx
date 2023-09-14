import { Routes, Route } from "react-router-dom";
import './App.scss'
import Destination from './Components/Destination/Destination'
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header";

function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/destination" element={<Destination/>} />
    </Routes>
    </>
  )
}

export default App

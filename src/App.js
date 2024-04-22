import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DetailVideo from "./pages/DetailVideo";
import ColorfulBubbles from "./components/ColorfulBubbles";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <ColorfulBubbles/>
            <Routes>


                <Route path="/home" element={<Home/>}/>
                <Route path="/detail/:id" element={<DetailVideo
                />}/>


            </Routes>


            <Footer/>
        </div>
    );
}

export default App;

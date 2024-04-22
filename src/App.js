

import Navbar from "./Navbar";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import Profile from "./Profile";

function App() {
    return( <>
        <Routes>

            <Route path='/profile' element={<Profile />} />


        </Routes>
    </>)


}

export default App;
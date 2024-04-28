import List from "./List";
import{BrowserRouter,Route,Routes} from'react-router-dom'
import Create from "./Create";
import Edit from "./Edit";
import Createss from "./Createss";
import Creates from "./Creates";


function App() {
  return (
    <div className="App">
        <h1>Danh sách video</h1>
        <BrowserRouter>
            <Routes>
                <Route path='/create'element={<Create></Create>}></Route>
                <Route path='/'element={<List/>}></Route>
                <Route path='/creates'element={<Creates/>}></Route>
                <Route path='/createss'element={<Createss/>}></Route>
                <Route path='/edit/:id'element={<Edit/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

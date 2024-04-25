import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";

function App() {
    const Hieu = 'Hieu Dev';
    const arrayHieu = [0, 1, 2, 3, 4];
    const a = 3;
    const hieuObject = {
        name: 'Hieu',
        code: 'FE'
    };
    const google = 'https://www.google.com/search?client=firefox-b-d&q=gg+d%E1%BB%8Bch'
    const arrayMap = [
        {
            name: 'Hieu',
            code: 'FE'
        },
        {
            name: 'Hieu 002',
            code: 'FE'
        },
        {
            name: 'Hieu 003',
            code: 'FE'
        }, {
            name: 'Hieu 004',
            code: 'FE'
        }
    ]

    return (<>
        <div className="App">
            <Navbar></Navbar>
            <Home></Home>
            {/*<Create></Create>*/}


            {/*<h1>{Hieu}</h1>*/}
            {/*<h1>{arrayHieu}</h1>*/}
            {/*<h1>{a}</h1>*/}
            {/*<h1>{hieuObject.name}</h1>*/}
            {/*<h1>{hieuObject.code}</h1>*/}

            {/*<div>*/}
            {/*    {arrayMap.map(item => (*/}
            {/*        <div>*/}
            {/*            <div>{item.name}</div>*/}
            {/*            <div>{item.code}</div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    /!*mỗi phần tử phải có key để phan biệt*!/*/}
            {/*    {arrayMap.map((item, index) => (*/}
            {/*        <div key={index}>*/}
            {/*            <div>{item.name}</div>*/}
            {/*            <div>{item.code}</div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<a href={google}>hg</a>*/}
        </div>
    </>)


}

export default App;
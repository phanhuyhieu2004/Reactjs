import Navbar from "./Navbar";
import Home from "./Home";

function Candy(){
    // const name="Hieu";
    // const array=[1,2,3,4,5,6];
    // const a=3;
    // const object={
    //   Name:'Hieu',
    //   Age:36
    // };
    // const arrays=[{
    //   name:'Hieu',
    //   age:36
    //
    // },{
    //   name:'Hieu',
    //   age:36
    //
    // },{
    //   name:'Hieu',
    //   age:36
    //
    // }
    //
    // ]
    // const google="https://viblo.asia/p/javascript-callback-la-gi-07LKXMdkZV4";
    return (

        <div className="App">

            {/*<h1>{name}</h1>*/}
            {/*      <h1>{array}</h1>*/}
            {/*      <h1>{a}</h1>*/}
            {/*      <h1>{object.Name}</h1>*/}
            {/*      <h1>{object.Age}</h1>*/}
            {/*      <a href={google}>Google</a>*/}
            {/*      <div>*/}
            {/*        {arrays.map((item,index)=>(*/}
            {/*          <div key={index}>*/}

            {/*<div>{index+1}</div><div>{item.name}</div>*/}
            {/*<div>{item.age}</div>*/}
            {/*          </div>*/}
            {/*        ))}*/}
            {/*      </div>*/}

            <Navbar/>
            <Home/>
        </div>
    );
}
// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

const users=[
    { id: 1, first: 'John', last: 'Doe', handle: '@john' },
    { id: 2, first: 'Jane', last: 'Doe', handle: '@jane' },
    { id: 3, first: 'Bob', last: 'Smith', handle: '@bob' }
];
        const [data, setData] = useState(users);

        const handleDelete = (index) => {
            const newData = [...data];
            newData.splice(index, 1);
            setData(newData);
        };
        const showUser=()=>{
        const}
}
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <>
          <div>
              <input type="checkbox" >user
              <table className="table">
                  <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                      <th scope="col">Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {data.map((item, index) => (

                      <tr key={item.id}>
                          <th scope="row">{item.id}</th>
                          <td>{item.first}</td>
                          <td>{item.last}</td>
                          <td>{item.handle}</td>
                          <td>
                              <button onClick={() => handleDelete(index)}>Delete</button>
                          </td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import NewEmployee from './Component/NewEmployees/NewEmployee';
import Employee from './Component/EmployeeDetails/Employee';

function App() {
  const employees = [
    {
      Id:1,
      Firstname:"Joe",
      Lastname:"Biden",
      City:"Washington DC",
      Department:"Admin",
      Dob:new Date(1990, 4, 23),
      Gender:"M"
    },
    {
      Id:2,
      Firstname:"Donald",
      Lastname:"Trump",
      City:"New York City",
      Department:"IT",
      Dob:new Date(1992, 11, 11),
      Gender:"M"
    },
    {
      Id:3,
      Firstname:"Hillary",
      Lastname:"Clinton",
      City:"California",
      Department:"Finance",
      Dob:new Date(1985, 6, 30),
      Gender:"F"
  }
  ];

  return (
    <div className="App">
      <h1>Employee Details</h1>
      <NewEmployee></NewEmployee>
      <Employee employees={employees}></Employee>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

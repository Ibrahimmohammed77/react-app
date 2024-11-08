import logo from "./logo.svg";
// import Props from "./Props";
import "./App.css";
import InputField from "./InputField";
import UseStateConcept from "./UseStateConcept";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          <Props name="Ali" age="19" gender={"male"} />
        </p> */}
        <UseStateConcept/>
        <InputField/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

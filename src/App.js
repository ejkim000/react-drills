// import Arrays from "./Arrays";
// import Objects from "./Objects";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(prevCounter => prevCounter + 1);
  const incrementCounterThree = () => setCounter(prevCounter => prevCounter + 3);
  const decrementCounter = () => setCounter(prevCounter => prevCounter - 1);
  const decrementCounterThree = () => setCounter(prevCounter => prevCounter - 3);

  function decrementCounterFive() {
    for (let i = 0; i < 5; i++) {
      setCounter(prevCounter => prevCounter - 1)
    }
  }

  function incrementCounterFive() {
    for (let i = 0; i < 5; i++) {
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  return (
    <div className="App">
      <h1>React Drills</h1>
      <h2>Form</h2>
      <Form />
      <br />
      {/* <Arrays /> */}
      {/* <Objects /> */}
      
      <h2>Counter</h2>
      <h1>{counter}</h1>
      <button onClick={decrementCounterFive}> -5 </button>
      <button onClick={decrementCounterThree}> -3 </button>
      <button onClick={decrementCounter}> - </button>
      <button onClick={incrementCounter}> + </button>
      <button onClick={incrementCounterThree}> +3 </button>
      <button onClick={incrementCounterFive}> +5 </button>
      <br />
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default App;
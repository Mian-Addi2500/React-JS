import { useState } from "react";
import "./App.css";

function App() {
  //  useing useState hook : ya aik value leata h or setvalue function leata h jo value on change krta h or ya hook ui ko update krny ky leye  use hota h bcz jb hm ya kam pure JS mn kren gy to bar bar document.getelemaentbyid wgeara leana pry ga but is hook sy in sub ki zarort ni is leye to react logoun ko passand aai ky aik jagaha click krny sy at a time har jagha updation ho jati h
  let [counter, setCounter] = useState(5);

  let addVal = () => {
    if (counter >= 0 && counter < 20) {
      // update value of counter by setCounter method
      setCounter(counter + 1);
    }
  };
  let removeVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai or React</h1>
      <h3>Counter is : {counter}</h3>
      <button onClick={addVal}>add value : {counter}</button> <br />
      <br />
      <button onClick={removeVal}>remove value : {counter}</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;

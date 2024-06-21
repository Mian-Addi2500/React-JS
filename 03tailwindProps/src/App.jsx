import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-700 text-center p-4 rounded-xl mb-2">
        {" "}
        tailwind test
      </h1>
      <div className="flex">
        {/* ya hm userName or btnTxt wagera hm components ko variables pass kr rhy hn jo hm card mn props ki farm mn use krty hn  */}
        <Card userName="Zono Mian" btnTxt="Click me" />
        <Card userName="addi mian" btnTxt="Visit me" />
      </div>
    </>
  );
}

export default App;

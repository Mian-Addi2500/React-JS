import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center px-2 inset-x-0 ">
        <div className="bg-white rounded-3xl px-3 py-2 flex flex-wrap gap-3 justify-center">
          <button
            className="bg-red-600 rounded-full py-1 px-4 text-white shadow-lg outline-none"
            onClick={() => setColor("red")}
          >
            Red
          </button>{" "}
          <button
            className="bg-green-600 rounded-full py-1 px-4 text-white shadow-lg outline-none"
            onClick={() => setColor("green")}
          >
            Green
          </button>{" "}
          <button
            className="bg-blue-600 rounded-full py-1 px-4 text-white shadow-lg outline-none"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>{" "}
          <button
            className=" rounded-full py-1 px-4 text-white shadow-lg outline-none"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>{" "}
          <button
            className="bg-gray-600 rounded-full py-1 px-4 text-white shadow-lg outline-none"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>{" "}
          <button
            className="bg-yellow-600 rounded-full py-1 px-4 text-white shadow-lg outline-none"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>{" "}
          <button
            className="bg-pink-600 rounded-full py-1 px-4 text-white shadow-lg outline-none"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>{" "}
          <button
            className="bg-purple-600 rounded-full py-1 px-4 text-white shadow-lg outline-none"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>{" "}
          <button
            className=" rounded-full py-1 px-4 text-black shadow-lg outline-none"
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            Lavender
          </button>
          <button
            className="bg-white rounded-full py-1 border-2 border-solid px-4 text-black shadow-lg outline-none"
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="bg-black rounded-full py-1 px-4 text-white shadow-lg outline-none"
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

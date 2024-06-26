import "./App.css";
import Card from "./components/Card";

function App() {
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
        {/* hm ny 3rd card mn btnTxt ni likha to ya by default card component mn jo hm ny dia tha btnTxt = my profile  wo aa jy ga by default  */}
        <Card userName="kami mian" />
      </div>
    </>
  );
}

export default App;

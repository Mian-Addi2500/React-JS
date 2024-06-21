//some people give there {Context} access in {mian.jsx} and some give there but both practises are same so we give access in our app.jsx

//1st of all import our {userContextProvider}
import UserContextProvider from "./context/UserContextProvider";
//now import our components
import Login from "./components/LogIn";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  //now rap all components with {UserContextProvider} or ab is ky ander hm jo b component use kren gy us mn direclty Access mily ga hmari values ka jo whn py bnai hn hm ny {user and setuser}

  //hm ny 2 components bny hn {login or profile}.jsx un ko yhn py show krwana h or wo component kesy data use kren gy wo hm ny components ky ander hi handel kr lia yhn py hmen zarort ni h ab hm bs directly wo 2uno component import krwa dean gy

  //now deakhy ho skta h  hm ny app.jsx ky ander aik {API} call ki ho to is mn koi prayashani wali bt ni h ap {userContext} lo or wohi {useContext} use kro or data whn py fetch kr do or jb b ap ko lena ho {data} jis b component mn to {useContext} use kro {Data} ly lo bs itna sa hi to kam h
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

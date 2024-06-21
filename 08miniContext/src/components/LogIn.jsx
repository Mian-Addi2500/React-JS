//is mn hm deakhen gy ky globel context mn kesy vaiables mn hm data pass kr skty hn

//is mn hmen login wale chezen chyea houn gi or un sy b phly hmen Q ky data bhjna b to h to kuch chezen hmen import krni hi paren gi

//is ky leye hm aik to {useState} lean gy kam mn, or aik ham or hook kam mn lean gy {useContext}, or isi ky sath sy hi hmra react ka documentation yhn sy start hoti h ky {useContext} aik hook h whn sy ap directly access ly skty ho liken wo setup wala process b h jo hm ny userContext.js or userContextProvider.jsx mn kia h
import React, { useContext, useState } from "react";

//is ky elewa hm apna userContext b ly aaty hn Q ky wohi to hmra context h jis mn hmra data pass ho ga or access ho ga

import UserContext from "../context/UserContext";

function LogIn() {
  //ya sari Ui buliding h or hm ny UseState wagera mn variable store krwan ka kam to bhot kia h, to hm ny impliment kr dia yhn py b useState ky sath
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //now understand ky jo hmra {userContext} ky ander jo values hn wo hm kesy fetch kren gy hm us ky leye hmen help krta h {useContext} hook

  //jis thra hm ny useState hook ko use kia h usi thra sy is ko b kren gy
  //abhi ap ya soch rhy hn gy ky hm ny to {setUser} kbhi lia hi ni to ya khn sy aa gya to wo log {userContextProvider.jsx} mn  ja ky deakhen ky hm whn py {user , setUser} pass kr rhy thy to ya 2uno values isi leye to {userContextProvider.jsx} ky {value} waly prop sy isi leye to  pass kari hn  jo ky whn py hn {value={user, setUser}} ta ky us {value} sy agr koi data chyea to mn sirf us {user} sy ly ky wo data ly ln liken agr hmen  {userContextProvider.jsx} ki is State {const [user, setUser] = useState(null);} mn koi value add krni ho to mery pass h na method {setUser}

  // to is {setUser} ka access mujhy khn sy mil rha h {useContext} sy or {useContext} ky ander wo {context} deana prta h jhn py ya variable hoty hn Q ky abhi to hmra aik context h , ho skta h {login , product , api call} ya sub context hn to properly right context deana pry ga hmen to wo properly right context dean gy tbhi to hm use sy ya {setuser} hm ly paen gy
  const { setUser } = useContext(UserContext);
  //ab hm ny [setUser] ko {} mn Q lia Q ky hm whn py object ly rhy thy sari Values ko provider mn is leye jb b hm apna wo context use kren gy us ko jis variable mn store kren gy us ko as an object ky tor py {} mn liken gy

  //ab agr hm ny {setUser} ly hi lia h to ab krna kia h is {handleSubmit} function mn
  const handleSubmit = (e) => {
    e.preventDefault();
    //ab hmen {setUser} method mil hi gya h to us mn kia kro kuch b ni us mn apna user name pass kr do or agr ap ka maan kry to password b pass kr do

    //to is thra sy hm data ko bhj dean gy apny globel context mn , ab ya to bat ho gai ky data bhjty kesy hn ,  ab deakhty hn ky data leaty kesy hn to us ky leye hm {profile.jsx} mn jaen gy or deakhen gy

    //but abhi hm apny setUser method mn values pass krty hn
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LogIn;

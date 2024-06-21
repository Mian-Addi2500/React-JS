//🎢🎢🎢🎢 Part # 2  🎢🎢🎢🎢

//jb tk hm userContext mn thy to {.js} tha Q ky whn py hm koi {jsx} return ni kr rhy thy liken jesy hi hm ny {contextProvider} bnaya ab hmen jsx bnana pry ga Q ky hm provider ko {userContext} file mn phra tha us ko <></>mn use kren gy or ya fragments jsx hi to hn isi leye {jsx} bnaya h

//Now Step #1

import React from "react";

//step #2 import userContext

import UserContext from "./UserContext";
import { useState } from "react";

//step # 3 made a userContextProvider Method which get a arrgument in it, which is Childen

//hm ny concept deakha tha RRdom waly project mn {Outlet} ka jo b values hn un sb mn {header or footer} wagera ko as it rakho or outlet jo b ho sirf wohi display krwa do

//to usi thra ka aik or concept hota h ky hmry pass jo b prop aa rhy hn {children} us ko as it ap yhn py use kr lo

//axha children jo h na ya kuch magical ni hota h jesy hm apna div wagera dety hn bs wohi to children h aik thra sy {Children} aik genirec name h ky jo b ap ky pass aa rha h us ko same as it agy pass kr do hn bs is leye aik generic name use krty hn but ya zarori ni h ky is ko name hm childern hi dean but Q ky {States} wagera mn alredy use hota tha to hm ny socha ky yhi use kr lrty hn

const UserContextProvider = ({ children }) => {
  //now we give value like this in return which we study in {UserContext.js} file same as it or us ky ander kia dean gy us ky ander jo b hmry pass aa rha h wo  {children } hm same as it render krwa dean gy ab is ky ander ho skta h {card} component aye ho skta h {card} ky ander {dashBoard} aye, {children } likhny ka mtlb ya tha ky jo b aa rha h wo as it likh do

  //par hm ny dikha tha ky us ko rap krna pry ga raping hi to providing h to jo hmra{userContext} h us ko actullay mn akela frigment mn likheny sy kam ni hota h Q ky {userContext} ki aik hmen value access krni prti h property to wo property h {userContext.Provider}

  //ab sirf yhn py {userContext.Provider} property pass krny sy kam ni bny ga Q ky thk h provide to kr dia liken kia chz access kry ga ya provider is ky leye koi {data} b to deana pry ga na sath mn to us {data} ko leny  ky leye hm  aik {state} bna lety hn {user} ky name sy or us mn by default value {null} dey deaty hn

  const [user, setUser] = useState(null);

  //ab ya to abhi tk satisfied h ky hm ny {data} ko leny ky leye {State} bna li , liken problem to wohi h na ky hm ny {provider} sy rap to kr dia liken actually mn kn c value ko access dy rhy ho wo b to ap ko btana hi pry ga ky us {satate} ko provider mn use kesy kren gy. to us ky leye hmen {provider} ky ander hi aik property milti h [value={}] hn g yhn b {provider} mn b hm aik prop pass kr rhy hn aik thra sy

  //jo b hmen data pass krna ho hm {value} mn pass kr skty hn ab hm is mn sirf aik value pass ni kren gy blky hm is ko aik {object } pass kren gy or us ky ander jo mera dill chy ga mn data dy skta hn i.e in our case mn {user , setuser } wagera ka sub ka access hi yhn sy dy rha hn liken agr or b hmry pass 5 chezen hn to oun 5oun ka access bi dy doean gy koi issue ni h

  //ya ho gya hmra almost adha kam,

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// now export this method

export default UserContextProvider;

//now our Globel Context is done ,now we use it in app.jsx file but 1st go back to projectDeatail file

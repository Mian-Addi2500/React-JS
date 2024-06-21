//is mn hm deakhen gy ky globel context sy kesy vaiables ko use kr skty hn

//deakyea jhn b globel context sy data lena ya deana ho to {useContext} hook  zaror use ho ga to ya to hr us file mn import krna pry ga jis mn Globle variable sy koi b kam ho ga or wo {Context} b jis sy data access ya pass krna h, in our case {Context} is {userContext} to us ko b import krna pry ga

//is mn hm  ny useContext hook ko import krna h
import React, { useContext } from "react";
//is ky elewa hm apna userContext b ly aaty hn Q ky wohi to hmra context h jis mn hmra data pass ho ga or access ho ga
import UserContext from "../context/UserContext";
function Profile() {
  //is mn same as it login ki thra hmen {const { setUser } = useContext(useContext);} chyea to wesy ly lean gy

  //but is mn {setUser} ki jgha hm {user} lean gy Q ky hmen method ni chyea hmen data chyea display ky leye

  const { user } = useContext(UserContext);

  //is mn hm direct return ni krty hm {conditional} return krty hn

  //ya if else wala syntaxt h

  //to agr {user} ni h to hm condition lga deaty hn

  if (!user) return <div>please login</div>;

  //agr {user} h to hm return kr dean gy

  return <div>Welcome {user.username}</div>;
  //is mn username is leye aya h ky hm ny {login} waly component sy {Setuser} ky zarye {user} mn {userName or password} data bhja tha globle context mn jis ko ab yhn py hm access kr rhy hn {user.username}  lga ky simple or isi thra agr hmen ny password b deakhan h to {user.password} lga ky deakha dean gy
}

export default Profile;

//after this go to app.jsx Q ky abhi tk hm ny jo kam kia h wo sb show app.jsx mn hn gy so now go to App.jsx

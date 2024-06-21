import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
//is file mn hm chty hn ky hmen kuch basic thing aa jaen i.e kuch follower wagera aa jaen
//mostly ya kam aik api call kr ky kia jata h
//acha to api call kb mn krna chta hn mn api call krna chta hn jb mera ya componnet load ho acha wo hm ny phr rkha h ky UseEffect Hook use ho ga
function Github() {
  //This is last Step of this file : useloader data RRDom ka hook h or ya aik variable mn store ho ga or us variable ky through hm Api sy chezen bhr nikalen gy i.e (follower) wagera

  const data = useLoaderData();
  /*
    
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Mian-Addi2500")
      .then((res) => {
        return res.json();
      })
      .then((Data) => {
        return setData(Data);
      });
  }, []);

*/

  // ya sara kam jo optimission h na jo hmen RRDom dy rha h ya actully mn hmen Next.Js b deata h Start hi ya Next.js ny hi kia tha but RRDom b deata h

  //ab RRDom mn aik bhot hi intersting a Update aye h wo deakhty hn kia aya h us ky leye waps sy hm apny mian.jsx mn chlty hn

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github follower : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

// after mian.jsx we come back and work with further processing

//ab jo hm ny fetching wagera isi file mn krni h Recommendation ky mutabiq wo kesy kren gy deakhty hn

//ab ya is leye krty hn ky isi route ky ander hi is ky methodes rehy jaen but kaii log kahen gy ya bilkul shi ni h liken hn hitesh sir b manty hn ya shi ni h acctullay mn agr ap ky pass is thra ka koi kam h to hm us ko kia kren alg hi aik file ky ander likh lean to wo ziada better rhy ga infatch Sir ko b yhi lgta h but thk h abhi hm deakhty hn yhn py

//is mn hm simple sa aik {export const githubInfoLoader } githubInfoLoader rakho ya jo b marzi name rakho koi faerq ni prta

// ya hmra aik basic sa {async()=>{}} call h ab is ky ander kia krna h

export const githubInfoLoader = async () => {
  //is ky ander same jesy api fetch krty hn wesy process kren gy
  //await use kren gy Q ky async h is waja sy ya basic JS h
  //or is ko aik responce variable mn store krwa deaty hn
  const responce = await fetch("https://api.github.com/users/Mian-Addi2500");
  //ab sub sy intersting bt pta h kia h ya jo {responce} h na is ko hm directly return kr skty hn

  return responce.json(); //ofcourse json mn convert kr ky return kren gy Q ky {String} to ni return kren gy hm

  //but ya {responce.json()} abhi ki date mn  {Promise} h hmry pass ky hm agr deakhen gy to ya actullay mn aik promise hi to ata h {.then} mn oper or wo jo {responce} h wo handel isi leye to ho rha h Q ky {promise} h tbhi to {.then} lga pa rhy hn to {responce.json()} actullay mn aik promise h but is ko b hm {return} kr pa rhy hn

  //ab jesy hi hm ny ya bnya to hm oper wala {useEffect} ko comment kr dean gy ab jb us ko comment kren gy to problem kia ho gai ky hm ab hmen {data.follower} wagera ni milen gy

  //ab ya sari ki sari value hmen mili hi ni hn or hmrya pass {mian.jsx} min b loader mn abhi tk kuch b ni h to problem ko solve krny ky leye hm dubara sy {main.jsx } mn line #143 py jaen gy

  //ab jb mian.jsx mn loader mn method pass kr dia h to values ko use krny ky leye hm ab isi file mn aik or hook phren gy us ky leye hm jum krty hn oper mian fuction ki trf *(Github) fuction ki trf line#7
};

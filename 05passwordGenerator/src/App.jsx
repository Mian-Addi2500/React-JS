import { useCallback, useEffect, useRef, useState } from "react";

/* 

ya aik password generator Project h is mn ham password ko generate kren gy but is mn hmen kuch steps chyean 

1) is mn hm jesy deakhty hn ky by default aik password generated h or jessy hi page ko reload krty hn wo dubara pasword generate ho jata h ya kesy kren gy ya hm deakhen gy 

2)is mn aik {LENGTH} h or jessy hi us ko change krty hn waps mn koi na koi method run hota h jo pasword ko generate krta h or ab ki bar password ki length hamry length waly value ky mutabic h

3) is mn aik {Number} h or jessy hi us ki value ko true ya false krty hn to waps mn koi na koi method run hota h jo pasword ko generate krta h or ab ki bar pasword mn kuch numbers b add ho gy hn 

4) is mn aik {Charactor} h or jessy hi us ko ki value ko true ya false krty hn  waps mn koi na koi method run hota h jo pasword ko generate krta h or ab ki bar pasword mn kuch char b add ho gy hn 

5) is mn aik {Copy} ka button b h jessy hi us ko click kren gy to input filed mn spicificaaly pasword select hoga koi or jagha ni ho gi to hm specifacilly kisi jagha ko target kren deakhen gy

*/
function App() {
  // Step by Step Making Project

  //Step (1) ==> we make variables to store values

  // we know we have length , number , char and pasword input filed  which is change so wo aesy to change ho gi ni us ko hm useState mn rakhen gy taky hm us ko change b kr sken or un ki values by default  rkhen gy

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false); //number should be allowed or not
  const [charAllowed, setCharAllowed] = useState(false); //Char should be allowed or not
  const [password, setPassword] = useState(""); //input filed mn pasword ko add krny ky leye hm pasword ko b kisi na kisi varaiable mn store zaror kren gy to us ky leye b useState lgy ga or us ki value by default "" rkhen gy wesy to hm koi apna default password dy skty thy but hm chaty hn jesy hi page relod ho har bar new pasword aye to us ky leye hm pasword ko generate krewaen gy kisi database sy value ly ky ya koi api call kr ky hm value lean gy or us ko pasword mn store krwaen gy ab ya kesy hoo ga hm agy deakhty hn

  //Step (2) ==> now we make a Pasword Generator Method

  /*
  we made simple pasword generaator method which is

  const passwordGenerator = () => {}; 

  let suppose this is our method but we have problem that ky hm ny deakha ky jesy hi hm length , number ya char mn koi changing krty hn ya method hr bar run ho rha h to koi to aesa tareka hota ho ga ky is method ko mn optimise kr ln to is ky leye b react hmen hook deata h 
  */

  /* [useCallback]

  useCallback is a React Hook that lets you cache(memorise) a function definition between re-renders.

  means ky ya hook ap ky function ko cache yani momery mn rakh leta h or jitna part fuction ka dubara sy run krny mn use ho rha h kr lo or jo ni ho pa rha wo ni ho pa rha bs or ya sub kuch react behind the seen kry ga hmen kuch b ni krna bs hmen ya hook sirf use krna h 

  to ab hm deakhty hn is ko use kesy kren gy 

 [ const cachedFn = useCallback(fn, dependencies) ]
  
  ya h useCallback hook is mn hm deakh sakty hn ky hook ko aik variable mn store kia hoa h or ya aik to fuction leata h or 2nd hm sy dependinces leata h jo ky array farmate mn pass hote hn ab ya dependinces hn kia hmary case mn length , number , char ya sub dependencies hn mean ky in ko jesy hi charean gy function call ho ga 

  */

  //useCallback Hook

  const passwordGenerator = useCallback(() => {
    let pass = ""; //is mn generated pasword ko rkhen gy or setpasword or pasword ko pass kr dean gy is ki value

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //is mn wo data aye ga jis sy mn password bnaoun ga

    //now add condtion for number and charcter allow is true then add  these values too in to string value

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"; // this is short hand notation of if else in js

    //now we make a loop to gennerate password and hmen deakhne gy ky loop kitni bar chalaen wo hm chack kren gy hmari length ki value sy bcz hmary project ki requirement h ky pasword ki lenght hamry length varaiable ky mutabic ho

    for (let i = 1; i <= length; i++) {
      //now get random number mean array ki koi rendom index value hm lean gy
      let char = Math.floor(Math.random() * str.length + 1); // ab hmary pass aik charactor ki index value aai h

      // now we get charator by its index number which we get in char variable and store it to our pass variable
      pass += str.charAt(char); //ab jesy hi ya loop end ho gi hmary pass varable mn hmara random password aa jy ga ab loop sy bhar ja ky set password mn hm pass ko add kr dean gy to hmara pasword generate ho jy ga
    }

    //add pass to setPassword Q ky satate isi trha sy update ho gi

    setPassword(pass);
  }, [
    length,
    numberAllowed,
    charAllowed,
    setPassword, //ya b aik dependece h koi ky is ky bases py b hm chezen change kren gy is ki detail bad mn deakhty hn agr setPasword ni  deaty to b koi msla ni h pasword phr b pasword generate ho ga  bs hm is mn Optimisation ka kam krety hn is hook mn is leye use kr rhy hn or bychance agr hm ny glti sy setpasword ki jagha pasword dy dia to ya infinite loop tk pasword ko generate krta rhy ga
  ]);

  // step (3) ===> Build Ui for further procceding

  //step (4) ==> after Ui compilition we see how we get our generated pasword to show in ui

  /*   
  1st thing hm passworGenerator fuction ko directroly run kr dean us sy hmen bhot sary error melen gy bcz react behainde the seen rendreing krti h or us ki wja sy error aye ga Q ky hm useCallBack hook wagera use kr rhy hn to wo problem krty hn

  2nd thing is we made a button and by clicking on this button we get password but ham chaty hn ky page jesy load ho fuction run ko automatically to us ky leye hmen aik or hook deakhna pry ga jo h useEffect hook is ka useage almost same h jessy hnm ny useCallBack mn kia tha

  //3rd thing is useEffect Hook
 
  useEffect(()=>{},[])  

  is ko kisi variable mn store krny ki zarort ni h 
  ya jesy hi page hmra page load hota h ya 1st time py ya call hota h
  is mn wesy to to kafi chazean or b hoti hn cleanup wagera jo bad mn deakhn gy liken abhi hm 2 chezean use kren gy

  1) callback fuction ()=>{}
  2) Dependienes Array [] baki sari dependences same hn but yhn hm passwordgenerator function ko  b dependencies mn rakhean gy setPasword ki jagaha jo useCallback mn use ho rha tha Q ky agr ya fuction phr sy run ho gya to phr b useEffect us sy empact ho ga 
  */

  // now we using useEffect

  useEffect(() => {
    passwordGenerator(); // yhn aa ky hm pasword generator ko run kr skty hn
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //step (5) ==> how to copy pasword
  /*
  this is magger chalange ky agr mn yhn sy copy py click krta hn to wo clipboard mn copy ho jana chyea ab clipborad py copy krna koi diffical task ni h liken kia ap ko copy krna h wo difficul task h is k leye hm ko ya following step krny pareny gy 
  1) select krna pry ga ky sirf yhi input chyea
  2) selection range b btani pry gi ky is input porstion mn sy mn kitny unit copy krna chta hn acctully mn 
  3) phr mujhy brower ya system ka jo clipboard h us ka b access chyea 
  to kafi kuch h jo hmen chyea 

  acha phla problem to pta h kia h ky mujhy ya hi ni pta ky button py jesy hi mn click kroun ga to yhi chz copy kesy ho 

  to in sub problems ko solve krny ky leye hmry pass aik or hook ata h jo ky h useRef hook

 // useRef 

 ya hook accuttulyy mn aik referance hook h 

 [useRef is a React Hook that lets you reference a value that’s not needed for rendering.]

 mean kisi b chz ka refernce leny ky leye hm useref hook use krty hn jo copy ni krta sirf value ko select kr ky dy deata h copy hm onclick method mn krty hn jo ky nichy detail mn h 

 useref hook ko hm use kesy krty hn is ko hymen aik variable bnana prta h 
  
  */
  // now we using useEffect

  const passwordRef = useRef(null); //default koi value deana chean to hm deay skty hn liken hmery pass abhi koi ni h to hm null day rahy hn agr ya ref ni h to khn sy aye ga wo aye ga us input sy jis ka ref hm leana chty hn or hr input ky andr aik ref pass kr sakty hn referance

  //onclick method

  //agr hm is ko b optimize krna chty hn to useCallBack mn istamal kr skty hn wo h hm py depend liken ya ni krna ky hr jgha useCallback lga deana h ya sirf example ky leye tha ky yhn b use ho skta h but ya is ky bagaer b chl jy ga hn agr ap deakhty hn khen py dependences hn to hmen optimize krna chyea to hm use kr lean gy
  const copyPaswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password); //copytoclipboard ka method ya h ya to copy kr rha h phr paswordRef ka kia kam tha ? to ab hm us ka use deakty hn

    //deakhen jb hm copy py click krty hn to pasword copy to ho rha h but select ni ho rhi chzen mean user koi ni idea ho rha ky kitna password select hoa h to wo deakhany ky leye hm useReff use kren gy

    passwordRef.current?.select(); //current ya btata h ky current variable h ya ni h agr h to kia wo accessable h ky ni h kia wo selectible h ya ni h to ya optional select h Q kia pta wo value 0 ho to is leye hm ? lgaen gy ky ya optionally select h

    // is mn hm or b optimize kr skty hn ky hm is mn range b dy skty hn ky kitni range tk select kr skty hn ya optinal h ya seniro aa skta h to ap ko yad ho or compnies optimization ky hi to passy deti hn

    passwordRef.current?.setSelectionRange(0, 999);
  }, [password]); //ab ki bar hmari dependence sirf password h kio ky button ka talok sirf pasword h mean jis p chze sy hm bat kr pa rhy hoty hn wo hmri dependice hoti hn
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-center text-4xl text-white my-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef} //ab hmry pass referance h liken jb tk kisi btn py onclick ni lagaen gy to tb tk ya refernce hawa mn ho ga
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPaswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value); // is sy ab hm range ko kam ya ziada kr sakean gy
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); // is mn hm onchange py value ko reverse kr rhy hn mean true h to false false h to true
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); // is mn hm onchange py value ko reverse kr rhy hn mean true h to false false h to true
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

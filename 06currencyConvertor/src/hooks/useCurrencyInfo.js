/*

##### Building Own Custom Hook #####

=> simple example of custom hook

function hello() {
    return[]
}

=> so jo ya fuction h ya hi to aik custom hook h 

Note :- Hm custom hooks mn react ky buildIn hooks b use kr skty hn jes useState(), useEffect() etc hm in ko b use kr skty hn  to hm b inhi ko use kr ky apna custom hook bnaen gy 

=> Now we build step by step 

1) We went 2 things(hooks) in first step to importe
 
    i)useState ii)useEffect

2) we creat a fuction with hook name which is in our case useCurrencyInfo
    Note:- ya aik standarize approch h ky jb b hook bnao to (use) word lazmi use kro ta ky agr ap team mn kam kr rhy ho to asani ho agly bndy ko b pta chly ky axha yhn py ya aik hook use ho rha h

3) ab deakhen kuch hooks optional arrguments leaty hn but hamara hook aesa ni krta us ko         arrguments ki info deni hi prti h

    In our case our hook getting arrgument with name of (curreny) but its depends own you ky ap jo b name rakhen but name aesa ho ky samhj aa jy ky hn ya is ky sath inter link kr rha h 

    To ab ya [function useCurrencyInfo(curreny) {}] hmara aik hook tyar ho gya 

4) putting data in our hook

    To hm data apny hook mn api ky through lean gy mean ky apii ko call kr ky to wo kesy krty hn deakthy hn wesy to hm direct hi (fetch ) ko use kr ky apii call kr skty hn but but 

    Note:- I want that api should be call when the page load So we know we do this by using React Hook which is (UseEffect) Hook

5) Using useEffect hook in our custom Hook

    jb b koi component mount ya unmount hota h to hm invoke kr skty hn is hook ki help sy but unmout ko hm bad mn discuss kren gy but ab jb koi b component jesy hi mount hota h us ka liveCycle jesy hi triger hota h to hamry pass aik hook hota h jis ka name h useEffect ya kam krta h sara 

    So is fuction ki help sy mera automatically fetch call ho jy ga or is fuction ky andr aik or fuction ni bnana pry ga ky axha ab fuction call ho gya h to ab mera api call kr do to hm is ky andr directly hi kam kr dean gy

    this is useEffect hook

     useEffect(() => {}, []);

     is mn aik h callback () => {} or dusri h dependinces array [] or is array mn wo chz add kren gy ky in in chzeoun mn koi b change aye ga mn waps sy api call kr ln ga 

     => Step by Step useEffect Working

        i)In first step we want to call api so hm aik fetch() ko call krwa lean gy

6) Now explore Api

    Note :- Most of the cases when api calls these should be come in type of String 

    => Step by Step Api Calling Process

        i) first of all ya to hm api ko variable mn store kr ky fetch mn pass kr dean gy ya direct hi backticks `` ko use kr ky fetch mn hi pass kr dean gy  

        ii) Now we know we made chaning with fetch mean ky .then hm use kr skty hn jitny mrzi aye or .then ky andr hmen callback milta h hm ny dikha hi tha jS course mn 

        iii) Now in then we using callback and convert Api to Json by this 
               .then((res)=>res.json())
            in single line by giving res(responce) to .then callback and convert to json

        iv) To hold data ab hm data ko hold khn py kren Q ky agr mn data ko kisi regular variable mn store kr dn ga to problem ho jy gi Q ky UI mn kbhi b update ni ho ga to is problem ko solve krny ky leye hm directly aik or hook use krty hn jo h useState or us mn hm directly value return krwa deaty hn for this we do like 

        const[data,setData]=useState({})

        ab is mn hm useState mn empty object {} pass kr dean gy ky agr by chance koi agr fetch call wagera ni aa rhi h to km sy km {} object zaror ho to agr us py b loop lagao gy to at leat crash ni kr ga [this is our contengence Plan]

        v) ab hm 2nd .then() mn ya liken gy 

            .then((res) => setData(res[curreny]))

         this mean ky jo hmra 2nd .then mn responce aya  .then(res) us mn hm setData ko use krty hn or us ky andr jo responce aya h us ky andr hm deakhty hn wasy to bhot si chzeen hn api ky responce mn i.e(date wagera) but hm deakhen gy ky kis trha hm specific value ko nikalen gy responce sy to jesy hm dekhty hn ky hm jb api link mn (inr.json) likhty  hn end mn to key b (inr) aa jati h or jesy hi (inr) ki jaga (usd.json) likhty hn link mn to yhn b key (inr )sy (usd) ho jatai h mean ky hm jo b value deathy hn wo key mn b wohi aa jati h so hm ny list off value deani hm mean ky speccific koi aik ni deani is leye hm .json sy phly apny function ka arrgument variable pass kr deaty hn jo jb b hm fuction lean gy wo use kry ga wo arrgument to ab hmary case mn hmry function ka arrgument (currency) h to hm link mn (inr or usd ) ki jgha (.json )sy phly wo arrgument variable pass kr dean gy assey ${currency}.json to ab jb hmry pass link mn arrgument variable h to hm 2nd then mn setData() ky andr jo responce aye ga wo hm aessy dean gy res[curreny] ab ya Q dia bcz hm janty hn useState aik object ly rha h so setData mn hm ko object pass krna pry ga or hm ya b janty hn ky har bar aik object ko access krny ky leye dot (.) notation zarori ni h hm [] bracket sy b access ly skty hn to is leye hm (.) ki jga [] use kr ky is trha access kr lean gy 

          setData(res[curreny]) 

          to ab hmri problem solve ho gai ky mujhy kesy pta (usd or inr.json) etc bolna h Q ky mn ny url mn jo b ab request dia h mn when sy us ki value ly ln ga ${currency} ki help sy

7) Now dependences mn hm kia add kren gy 
    
    ab hm deakhty hn ky useEffect() ky andr jo fetch() h ya call hm kb kb krwana cahyean gy ya sb dependences mn ata h to is ky leye deakhy jb b hm (inr sy usd) wagera krty hn to hm chaty hn ky (fetch call) ho to ab inr or usd ya sari detail currency variavble mn store  ho rhi hn to it mean ky (currency) hmari dependency h ky jesy hi currency mn change aye (fetch call) ho

8) Now what I return in our hook fuction

    hm khethy hn ky sir ap ny kha tha ky aik array [] return kro or renturn kr do data ko b or setData ko b  
    
   => return[data , setData] 
    hn ya h to kafi had tk shi but ya fetch kesy call hoga ya problem kry ga mean currency ka access phr kesy lo gy to is situtaion mn ya aproch glt h mean ky glt ni h but is situtaion mn ya thk ni beth rhi

    agr hm aesy krn

  =>  return data 

    to agr hm aesy krty hn to ya problem krta h 

    or agr hm phr ya return kr dean

  => return setData()

    to is sy ya problem aye gi ky hm phr data ko kesy access kren gy 

    To ab aesy kia kren ky hm value ko return kr paen to is ky leyea hm kia kren gy 

 =>    const [data, setData] = useState({});
       useEffect(() => {
        fetch(
            `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        )
        .then((res) => res.json())
        .then((res) => setData(res[curreny]));
    }, [curreny]);

    is method sy hm sirf or sirf data return krty hn 

    => return data

    axha agr data return krn gy to mtlb hm kbhi set ni kr paen gy data ko mean currency ni kr paen gy is ka jawab h ni Q ky is ky hi leye hmary pass aik funcationallity h 
    isi leye hm is ko custom hook bol rhy hn  ky hm ya aik basic sa syntex likhen gy jo ky bara hi basic h 

    => export default useCurrencyInfo;

    ab is mn hua kia h ky hm ny aik functionality desigine krii or pory ky pory method(useCurrencyInfo) ko hi return kr dia

    or jo hmra useState h us mn b hm doc mn ja kr deakhen gy whn b yhi ho rha h ky pora ka pora method hi return ho jata h

    or ab hm us method sy kia kia values drive kr rhy hn Q ky ya method b endof the day return kr rha h (data) to mn whn sy us (data) ka access ly ln ga agy b hm jesy jesy hooks deakhen gy whn py b ho ga 

        ##### To yhn py hmra custom hook bn gya h or end hoo gya h #####
*/

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

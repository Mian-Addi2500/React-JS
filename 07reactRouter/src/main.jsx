import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
//hm yhn py {app} ko insert hi ni kren gy <React.StrictMode> mn  or us ki jagha hm    <RouterProvider/> component use kren gy or is ko asy import b kren gy [ import { RouterProvider } from "react-router-dom"; ]

//ya aik prop b leata h apny andr jb tk ya prop ni ly ga ya kam ni kry ga or wo h router={router} or us ky ander hi hm router dy dean gy

//ab bt ya h ky ya router h khn py hm ny to koi router bnaya hi ni h to ab hm sekhty hn kis thra bana h is ky b 2 method hn aik thora sa complex h or aik thora sa easy h

// 🔷  Method # 1 💨  [Router Building] 🔷

/*


// hm aik router banaty hn or ya khn sy bny ga is ky leye b hm aik method import krna prta h jo h {createBrowserRouter} ya method b react-router-dom sy aya h

//{createBrowserRouter} ya h kia , ya aik method h jis ky andr array h

// ab is {array} ky andr hm sary ky sary list dal deaty hn jo b hmen objects chyea jesy for example chk method inside

const router = createBrowserRouter([
  //this is our 1st object jis ky andr hmra mian path hoga now let make a path
  {
    path: "/",
    //this is our path which have a {/} basic and {/} kia h top level element is ky ander nesting ho rhi h

    //ab ya kia chez render kry ga ya element is ko btana prta h
    //ab element knsa wala dean gy wo hmen pta h ky ab hm {layout} dy skty hn

    element: <Layout />,

    // ya ho gya ab is ky ander aik or prop ata h ky ap is ky ander agr or b childer add krna chty ho jo ky hm krna chty hn {home , about us , contact us etc} to wo b kr skty hn

    // is thra sy childern add kr dena gy ab children ky ander or b value  hn to is leye is mn array pass kr dean gy

    /* ab array ky ander further kia ho ga deakhyea actullaty kam to itna hi tha aik object jis ky ander 2 values hn 
   
    {
      path: "/",
      element: <Layout />, 
    }

    but Q ky futher is ky ander or value hn isi leye hmen aik or children bna pra or us ky ander [] array pass krna pra ab us array ky ander further kia ho ga wo deakthy hn 
    */
/*
    children: [
      //ab is children ky ander hn further object dean gy or jitni b nesting rout hmen krni hn hm kr skty hn koi msla ni h

      //ab dubara sy har rout mn hm wohi path or element len gy or bs kam khtm
      {
        path: "", // 1st path kuch b ni h Q {/} py b kuch na kuch to display krwana h to whn py hn {Home} display kren gy
        element: <Home />, 
        //Q ky hm ny mian {/} waly path mn {layout} dy dia tha element mn to ya home automatically whn py dynamically show ho jy ga
      },

      // now give about path in routing
      {
        path: "about", //ab ya Q ata h blky hmen to   {/about} likhna chyea tha wo is leye ni likha Q ky {/} already hm ny mian bna dia h ab {/} likhny ki zarort ni h

        element: <About />,
      },

      // now give Contact path in routing
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

*/

// 🔷  Method # 2 💨  [Router Building] 🔷

//this is an easy from the 1st method

const router = createBrowserRouter(
  //  ya to hm 1st method ki thra aik [] dy skty hn or path deaty hn but yhn hm [] ni dean gy blky is mn hm [] ki jagha aik or methodh aata h jo hm {createBrowserRouter} ky ander run krty hn jis ka name h { createRoutesFromElements} ab ya { createRoutesFromChildren} b aata h liken dehan sy hm ny yhn py { createRoutesFromElements} ya use krna h

  createRoutesFromElements(
    //ab ya aik method h or is ky ander hm aik style sy apny routes likh skty hn
    //ab is {route} ko jis thra sy 1st method mn hm ny object {} ky ander 2 values pass kr ky btaya tha is ko b btana prta h ky  hmra {path or element}  kn sa h

    // now nesting of our routing bilkul wesy jesy 1st method mn thi us mn object lety thy is mn hm <route/> len gy or ya deakhny mn b esay rehta h or smhj aati h ky parient {/} h or us mn baqi sb {home, about} wgera nested ho rhy hn

    // ⭕ this comment for last route which is user route ⭕ is mn hm deakhty hn ky jitna b jo kam h ky
    // ap kesy URL mn sy parameters lo gy wo sra kam phly yhn py hota h {Route} mn

    //is ka path bhot zarori h ky jesy hm user ky bad {/} dean us ky bad hm {:} lga ky {id} wagera jo b dill mn aye likh dety hn

    //but {:} ky bad jo b likeo wo note down kr lo Q ky wo bhot zarori h yad rakhna

    //us ky bad ab knsa sa component yhn py render hona chyea wo hm element mn dey dean gy jo hm ny bnaya h

    //ab hmry pass is ka mian menu mn koi path ni h or hona b ni chyea Q ky jb mn url mn ja ky {user/1} likhta hn to wo {user} componet mn sirf {user:} show kr rha h {user:1} ni show kr rha 1 py b or {user/100} py b

    // aesa hi hota h actullay jb hm FB wgera py logIn krty hn Layout sara same rehta h but hmra data us{id} ky bases py ata h jo hm ny dy rkhi hoti h baqi filed wgera ni change hoti har aik ky leye alg alg layout sb ky leye same bs ap ka data ap ki {id} ky bna py aye ga

    //ab is value ko actullay mn yhn py liya kesy jata h asli muda to wohi h ky kisi thra sy hm us ky parameters ly paen gy jesy ky hm ny {userid} yhn py aik parameter lia h to automatically hmen is parameter ka access milta h jis b component ko hm element mn ly rhy hn

    //now go to user.jsx
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />

      <Route
        //abhi tk hm ny deakh ky hmry {Route} m aik {PAth} h or aik {Element } h bs itna hi kam h liken actulley mn itna ni h hmry pass or b chezen ho skti hn yhn pr ab aj kl hmen aik or property ki  access milti h jo ky h {loader} is ky leye hmen RRDom ki Doc ko phrna phry ga

        //ya kia krta h ky koi b hmen agr data fetch krna h kisi api wagera sy ya phr hmry dataBase sy kuch b to hm direct Api calles  yahen sy  b mar skty hn

        //ab is mn ho ga kia ky jess hi hm apny web page py jaen gy to hm Github ky link py click krny sy phly cursor hmra aye ga hi to wo event ho choka h to usi event py wo{ api }call kr dy ga or hmry pass data fetching phly hi strt ho jy gi or ya hmry {useEffect} sy b phly fetching strt kr dy ga

        //Or data jesy hi fetch ho ga to wo values ko cash mn rakh ly ga but ya cash wala  step behind the seen ho ga

        /*
        ab loader mn kia hoo ga agr hmen chyean to yhen loadr ky ander api call kr skty hn koi b problem ni h isi mn hi hmen callback fire krna allow h hm apna fetch wagera jo b krna h idhr hi kr lean gy koi b msla ni h liken aik or approch h ky Doc mn RRDom waloun ny 2nd approch ya di h ky unhoun ny loader mn direchty fetch wagera krny ki bjy aik{ method} call kia h
        loader={() => {
          fetch("https://api.github.com/users/Mian-Addi2500");
        }}
         
        ya hm ni krty loader mn fetch krny wala hm method bnany ko explore krty hn 
        */
        //ab intersting bt ya h ky method khn sy call kren to mostly to Recommendation jo h Abhi tk ki wo ya h ky ap ny jo b fetch wagera krna h wo ap usi file ky ander kr lo jo ap ny element mn commponent dia h mean in our case is {Github.jsx}

        //now again go to Github.jsx file on line#39 to explore Api process

        //ab jb GitHub mn { githubInfoLoader } method bna lia h to ab hm waps {mian.jsx} mn aa gy hn

        //ab hm deakhty hn ky loader ka concept use kesy kia jy us ky leye hm loader mn jo apna method {github.jsx} file mn bana h pass kr dean gy [loader={githubInfoLoader}] or is tarky sy {import Github, { githubInfoLoader } from "./components/Github/Github.jsx";} hm is ko import b kren gy

        // jb hm import krty hn method ko to {import Github, { githubInfoLoader } from "./components/Github/Github.jsx";} ya is leye method or component ko aik hi file mn rakha jata h ky agr component or us ky sath agr koi aesa method h jis mn api call h to component or method ko aik hi files mn rakh do ta ky aik sath aa jayen

        // liken problem ya h ky log ab yhn tk save kr leyety hn or sochty hn y kam ho gia ab wo ya bhol jaty hn ky react koi magic thori ni kr dy ga magic sy mtlb h ky {Github.jsx} mn value khud ba khud thori na a jaen gi jb hm ny kuch lia hi ni to agin {Github.jsx}  mn chlty hn dubara

        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

// 💢 Deakhen hm ny kia bnaya h aik {router} hi to bnya h jo hm ny {RouterProvider} mn as a prop pass kr dia h

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

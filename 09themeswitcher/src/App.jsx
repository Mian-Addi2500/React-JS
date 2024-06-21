import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  //step # 1 is on line#60
  //Step # 2 ] =>  ab hmen thora sa aik kam krna pry ga jo hmry pass buttons or card wagera sy aa rha h us ky leye

  //1st we create {themeMode} state which is by default (light)

  const [themeMode, setThemeMode] = useState("light");

  //ab aik chz note kren ky hmry pass ya {darkTheme, lightTheme} methodes hn or in Methoeds ka access h hmry pass but ya methods kuch kr ni rhy hn abhi

  //whn py hm ny in ki functionality define hi kri pechli waly p#8 mn at least functionallity define to thi ky value add wagera krni h

  //to ya to ab mujhy pta h ky ya {darkTheme, lightTheme} jo hn methods hn mery pass but ya krty kia hn ya mery ko abhi ni pta to jb aesi koi situation ho or aesi kai bar situation aye gi hmry pass to hm kia kren

  //In methods ko lo same as it  or exasility same isi name ky methods  yhn py define kr do wo functinality apny ap un ky ander chli jati h hn , ji ya bra hi intersting concept h

  //now build our functionallity

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //wesy to hm aik hi function mn ya kam kr skty thy toogle lga ky mean if elese lga ky but thk h hm abhi 2 function hi len gy

  //chlo thk h methods bn gy liken actully mn yhn py methods sirf hony sy kam ni ho ga ky jo ky direclty kam kr rhy hn

  //ya functionality automatically aesa ni h ky ya HTML ky ander inject ho jy gi aesa kuch ni ho ga wo functionality hm ko yhn py likhni pry gi

  //chlo ab actullay mn {theme}  kesy change hogi wo to btao to us ky leye hmen classicc JS likhni prti h

  //us ky leye hm useEffect ka use kren gy ta ky jesy hi load ho hmry pass aa jy

  useEffect(() => {
    //Q ky ya sara code Client site py run ho rha h abhi hm server side ki bt hi ni kr rhy hn to

    //is mn hm {QureySelector} sy {html} lean gy or us mn hmry pass jo b (light ya dark ya 2uno) likhy huye hn remove kr do or ya remove Q kia,  Q ky mujhy is mn value add krni hn or mujhy ni pta tha  ky phly sy us ky ander kia value h to change krny ka load hi ni lia mn ny yhn py
    const mode = document.querySelector("html").classList;
    //remove values in mode
    mode.remove("light", "dark");
    //add themeMode in mode
    mode.add(themeMode);
    //ab hm dark or light wagera ya sub b to ly skty thy but mujhy pta h ky ya sara kam actullay mn  mera {themeMode} state mn hi to ja rha h to jo b method ny jo b set kia ho wo mera kam ni h wo un method ka kam h meray ko to deakhna h jo b is {thememode} ky ander ho na wo change kra do

    //ab Q k meri aik dependence h ky ya {themeMode} mn jo b change ho ya useEffect waps run hna chyea to dependency mn hm {themeMode} pass kr dean gy
  }, [themeMode]);

  //now ab hmrai core functionallity complete ho gai h to ab hm jaty hn componet folder mn or apny components bnaty hn or phr un ko yhn py aa ky import krty hn

  return (
    <ThemeProvider
      //Step # 1] =>   now khali provider sy kam ni hota hm ko values b deani parti hn hm ny deakha tha p#8 mn  to un sub chezoun ko access mn leny ky ley acctullay mn un sub ko lana b to pry ga to wo laen gy kesy wo hm {values} ky thorugh aesy or hmry pass jo jo values {ThemeContext} mn use ho rhi hn wo yhn dy dean gy or ab in values ka hmry pass direct access h hm jb chyean in values ko ly skty hn

      value={{ themeMode, darkTheme, lightTheme }}
    >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {" "}
            <Card />{" "}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

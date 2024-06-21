import { useState } from "react";
//now how to import index.js components in this file
import { InputBox } from "./components"; //Q ky index file h or wo bydefault call hoti h to hmen ./components/index.js likhny ki zarort b ni h
//now import our hook bcz majority of the kam usi sy ho ga
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  /* Note :- In this project We bulid a project which is currency converter */

  /* detail of Project :- In this we make components of inputs and reuse them and also we create our own custom hooks in this project too
  
  => This should be step by step project
  
  ##### Step : 1 ########

  => Create Custom Hook 

  Note :- We see the reat hook (i.e  const [length, setLength] = useState(8); this is useState Hook) ky aik hook jo h wo apny ap mn aik method h jis mn aik  variable hota h or aik function ka referance hota h agr hm goor sy sochean to hoa kisy ho ga To is mn hm deakhty hn ky koi na koi method hoga jis mn sy koi na koi return value aa rhi hogi or wo return value hmen aik array return kr rha h [length, setLength] or us array ky andr hm ny aik variable lia hoa h {length} or aik function ka ref lia hua h {setLength} is thra sy to bna ho ga react ny or Hook hn kia acutuly mn aik function hi to h {useState()} jo hmen ya values return kr rha h [length, setLength] in the end

  so to use this concept we build our own custom Hook

  => Steps for creating custom hooks

  1) 1st we build a folder in src with name hooks

  2) creat a file in this folder with your custom hook name so my custom hook name is useCurrencyInfo.js

  3)most of the cases hook bulid in .js file bcz ziada tar cases mn ya js hi return krty hn but in rear case we see them in .jsx form but we use .js bcs mostly hook build in this file name (aik achi practise ya h ky agr ap ky pass jsx renturn to rha ho to .jsx file ka name rakhan or agr js return ho rha ho to .js ya .ts (type script) hi rako

  => now we move to {useCurrencyInfo.js} file to explore custom hook in more detaile

  ##### Step : 2 ########
  
  How to make reuseable component

     => Steps for creating responce

          1) 1st we build a folder in src with name components

          2) creat a file in this folder with  name is input.jsx

          note :- is mn hm 2 approches ko deakhen gy ky jb ziada componets bn jaty hn hmary project mn tb b hm aik export ki approch ly skty hn or aik regular approch b ly skty hn 2uno deakhen gy or ya b chk kren gy best kn c h 

     => now we move to {input.jsx} file to explore component in more detaile

     Note => Remaing Notes in all files check them 

     => after creating all files now we work in app.js fiels bcz this is the main files so this is our last file to work for our project

  */

  //Now we set our states bcz jo hm ny inputBox bnai h us mn bhot sy states pass keye hn so now let built them

  //we set our amount 1st bcz amount to chyea

  const [amount, setAmount] = useState(0);
  //next hmen 2 states chyeay hn gi 1 h {from} value or aik h {to} value too convert to usd to inr ya hmen pta kesy kesy lgy ga user hmen jessy jessy boly ga usi sy pta lga lean gy too in ky leye b hm aik state bna leaty hn

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  //covert kr ky dikhna to pry ga ky kia value aai h ky aai hi ni us ky leye aik useState to lgy ga hi to us ko b state mn dal deaty hn or ya hmen amount ko convert kr ky jo result saye ga wo btata h
  const [convertedAmount, setConvertedAmount] = useState(0);

  //now come to our hook how to use our hook

  const currencyInfo = useCurrencyInfo(from); //{from} is leye pass kia h Q ky hmary hook ko currency chyea or hm {to} too pass ni kar skty Q ky ya to chnaged value h hmen to wo value chye to change krni h or wo aaye gi {from} sy

  //ab jo hmara hook h na yhn sy agr yad ho to hm ny aik data b lia tha or data hmry pass aa kis form mn rha h jb hm api ko deakhen gy to data hmry pass object ki form mn aa rha h
  /*
  "usd": {
          "$myro": 3.78736632,
          "$wen": 2213.2303412,
          "00": 8.56903664,
          "0x0": 2.62191951,
          "1000sats": 1902.54607797,
          "1inch": 1.63276526
        }
  */
  // ab hm options mn values to dean gy ni keys hi dean gy to aesa kuch h jis sy hm object ki sari ki sari keys nikal paeen hn bikul h

  const options = Object.keys(currencyInfo); //keys hamen currencyInfo sy mil jati hn Q ky hmry hook mn ya currencyInfo hi to h jo {Data} return kr rha h to hn in sub ko aik variable mn store kr dean gy or ya options hi to hn jo hm ny apny component mn currencyOptions = [] ka array bnaya tha ya wohi hi to h

  //now come to a simple functionality which is {Swap}

  const swap = () => {
    setTo(from);
    setFrom(to);
    //to change inr and usd
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  //now ab jb user convert py click kr rha h tb ho kia or ya wo state h jo hmen final result display kry gi

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  // is mn jo b amount ho gi us ko hm {currencyInfo} ky sath multiply kr dean gy or hmen pta h ky currencyInfo hmen bhot sari key dy rha h ab specific kn c key leani h jis mn convert krna h wo hmen {to} sy mily gi or is ko aik method b bnaen gy ta ky button ky click py proform kry ya

  return (
    <div
      className="w-full h-full flex flex-wrap justify-end items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div
        className="flex-1 bg-slate-500 h-dvh w-full object-cover bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      >
        h
      </div>
      <div className="flex-1">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // ya is leye ky form jb b submit hota h to khen jata h kisi address py kisi url py hm ni chty ky wo ho is leye ya kr dia hm chty hn jb from submit to aik method run ho jo hm ny oper bna dia h
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amoutDisable //ya automatically true ho ga
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

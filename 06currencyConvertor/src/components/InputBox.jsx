import React, { useId } from "react";

function InputBox({
  // ya aik inputbox h o ky hm sy input ly rha h label wagera
  label, // user sy label lean gy ky from use kr rha h ya to use kr rha h
  amount, //how to display amount wo deakhen gy
  onAmountChange, // ya is leye ky jo b is component ko call kr rha h whn py is ki bt ho gi Q ky amount change ho ga to state b to change krni pry gi na or input control to yhin sy ho rha h to whn py hm aik useState bnaen gy onAmountChnge or ya aik method ho ga jo hmm whn bnaen gy jhn ya component call kren gy
  currencyOptions = [], // ya hm chty hn ky ap hmen array mn hi pas kro agr ap ni krty to by default mn aik empty array to ly hi ln Q ky jo hmry pass currency options hn na usd,inr,pkr ya sb hm array mn loop through kren gy select tag mn ja ky
  onCurrencyChange, // be aik method ho ga same as onAmountChange Q ky onAmountChange hmry pass method bn rha tha jb hm amount ko change kren gy mean 12 sy 100 krean gy wgera or ya onCurrencyChange is leye hoga Q ky hmm currency b to chnge kren gy usd , inr ,pkr wagera
  selectCurrency = "usd", //ya is leye ky list to h currency ki liken ya btay ga select kn c h bydefault hm usd rkhen gy Q ky agr user na dy to (usd) ho ta ky aik currency to us mn selected rhy na
  amoutDisable = false, //ya is leye ky kuch user amount deana chty hn ya ni deana chty ya ap py depend h ap ya prop lo ya na lo ya optional h
  currencyDisable = false, //ya b same amountDisable ki thra h or ya b optional h
  className = "", //agr class name kuch b ni h to default "" ho gi
}) {
  const amountInputId = useId(); // this is hook to generate a uniqe id and we use it to label and input filed to combine them by usin for and id in label and input respectly
  return (
    //1st div mn special css likhii h jo ky js mn `` lga ky likhi h or baqi sb divs mn simple "" mn likhi h wo is leye ky hm 1st div mn hm user sy aik css b ly rhy hn or is ko ${className} sy inject kr rha hn apni div mn
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          // agr kisi ny input filed mn ya disable property add kr di h to hm ny apny prop mn deay rkha h us ky hm is mn value pass kren gy jo bydefault false h to disable false ho jy ga hmra
          disabled={amoutDisable}
          //hr input ki koi na koi value hoti h to hm value mn apna props deany gy jo bna rkha h wo h amount
          value={amount}
          //ab agr ya amount chnge hota h to phr kia kren
          // agr koi value change krta h amount ki to input mn  hm onchange lga skty hn
          //ab mn is onChange ko use kesy kroun ta ky mery component sy sub ko pta lg jy
          //is ky leye kia h ky hm component sy onchange ki help sy aik event(e) fire kr skty hn or us event sy aik method call kr skty hn axha ab kn sa method call kren gy wohi jo (onAMountChange) hm ny bnaya h ya sb isi liey bna h ta ky directly agr hm ny apny main mn ya onAMountCHange wala method bnaya h to when sy hmen us ki access mil jy
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } //wesy to akly onAmountChange sy b hojata but hm ny bydefault onAmountChange ko koi value ni di or dy ni skty bcz method h ab is mn hello word to print krw ni skty is to whn py possible chancess h ky ya crash kr jy agr kisi ny ni pass kr rkha to is ky leye hm && condition lga dean gy ky agr onAmountChange exisit krta h to hi hm onAmountChange ko use kren gy ab aik or issue h ky (e.target.value) hmen string ky forment mn chezen return krta h is leye hm is ky number mn rap kr dean gy ab hmari value number mn ho gi bs kai bar ya problem smhj ni ata h ky msla kia h bad mn pta chlta h ky number mn rap ni kia
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          //slect ki byDefault value h slectCurrency or us ki value hm ny usd dy rkhi h jo hm option mn map kr dean gy
          value={selectCurrency}
          //select ko change kren gy to value change hn gi is leye onCHnge same iput wla onChange aye ga
          onChange={
            (e) => onCurrencyChange && onCurrencyChange(e.target.value) //is ko hm number mn rap ni kren gy Q ky hmen value string mn chyean
          }
          //check this field enable or diable
          disabled={currencyDisable}
        >
          {/* ab hmen currency ki bhoot sari list chyea to us ky leye ap ko pta h ky hm loop kren gy loop ky leye sb sy phly js ko strt kren gy or wo ho gi {} sy to let start */}
          {
            // is mn hm loop ky leye currencyOptions ky sath Map lga dean gy Q ky currencyOptions aik array h  or hm janty hn ky map ky andr hm ko har aik value ki access mily gi callback ky andar
            //is leye hm is ko currency bol dety hn

            currencyOptions.map((currency) => (
              //ab is ky andr mn ny kia return krna h to wo h ya hmra componet
              //ab msla kia h ky hr bar yhi value bar bar repet ho gi jo ky react profermance mn bhot ziada hit krta h jb value bar bar repet ho
              //is problem ko khtmm krny ky leye hm jb b jsx ky and koi loop lagen gy Q ky jsx sy hi to hmry DOM elements bn rhy hn to hmen aik {key} pass krni pry  gi ab key honi chyea jesy array mn loop kr rhy ho to key kia {index} ho skti h hn ho to skti h liken is ky b ap andvantages disadvantages hn
              //rember this ky agr hmen profermance lani h loop ky andr elemnt ko repet krny ky leye to hmen {key} pass krni hi chyea react roky ga ni kuy key zarori pass kro liken profrem bhoth hi rgreat ho jati h

              <option
                key={currency} //wesy hm array ka index ly skty thy key mn but bater ya h ky jo  {field} aa rha h wo ly lo {IDs} b ly skty thy agr database sy kr rhy hn to ids ziada prefer hn
                value={currency} //value hm jo loop kr rhy hn mean ky {currency} wo ly lean gy js mn mean is {} mn
              >
                {/* ab hr br usd ni show krwaen gy to us ky leye b hm currency use kren gy  */}
                {currency}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;

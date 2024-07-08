//is mn sirf hmen aik hi method chyea jo slice bna dy ga

//But hm 2 method use karn gy

//Step # 1

//jo sub sy 1st method h hamen chyea createSlice jo ky hmry pass aye ga core "Redux " sy

import { createSlice, nanoid } from "@reduxjs/toolkit";

//ab method to hmen technacilay aik hi chyea jis sy hmra kam ho jy ga but hm kuch or use krna cha rhy hn agr ap ko yad ho jo hm ny "Id'S" lean the apny todo ky ander wo 123 li then phly to us ky bad lga yr 123 thk ni h to hm ny simply "Date" use kr lia tha  to us ky lia ky h na ky redux ko pta h ky aesa kam hota rhy ga kuch arrays aty jane gy kuch values aati jaen giii is leye hmen "Redux" aik "nanoid " ky name syaik mrthod provide krta h jis ka kam sirf ya ho h ky ya unique IDs generates krta h bs is ka sirf ita hi kam h to hm is ko b "createSlice" ky sath import kr dean gy line #9 py

//Step # 2

//now 2nd thing is ky sub sy important chz ya h kyy Store ki intial state mn kesa deakhy ga empty ho ga koi value ho gi   us ky ander ya hm khen DataBase kuch fetch kr ky value dalean gy to kuch na kuch to kren gy hi to usi ky leye hm sub sy phly "Initiall state " bnaty hn or ya hm py depend h hm kia rakhen gy array b rakh skty hn or aik object b rakh skty hn ya sub hm py depend h hm is project mn aik object rakhen gy Inital state mn Q ky is ky ander multipule cheze aa skti hn

const initialState = {
  //jesy hm phla is mn rakhty apna simple todos or todo name sy meri State h or ya kia h kuch b ni simple aik array h or array ky ander hmry pass objects hn gy
  //ab by default hm is mn aik object pass kr dean gy ta ky hmen thora sa asani rhy

  todos: [{ id: 1, text: "Hellow World" }],

  //☝ this is our 1st todo but or b properties ho skti hn ho skata hm authuncation token rakhna chty hn  ya or b kuch jo hm agy ja ky or b rakhen gy
};

//Step # 3

//now we learn how to make a slice

//Slice kia h Almost Reducer ka hi bra version h or kuch b ni h

//achx reducer kia h kuch b ni functionality h bs or kuch h hi ni

//to hm kia krty hn is ko export b kr leaty hn Q ky hm ny is ko kam mn leana h agy ja ky or is ka name ho ga todoSlice Q ky file name yhi h or ya bny ga khn sy 1 hi to method h "CreateSlice " jo hm ny strt mn import kia h

//ab ya createSlice kia h aik method h is method mn aye ga kia hn g is mn ziada tr objects hi ayen gy  to hm object add kr dean gy aesy 👇

//this is reduce property addTodo fuction which use at line#62
function sayHello() {
  console.log("hellow word ");
}
export const todoSlice = createSlice({
  //ab kia slices ky name hoty hn  ya hm py depen krta h hm kia name rakhty hn but jo b hm name rakhty hn thora soch smhj ky rakhyea ga Q ky jb hm " RTK " use kren gy "Chrome Extension" to whn py ya name show ho ga bs or kuch importance ni h
  //to hm ny aik "Name " property di ya property hm ny apny mannn/dil sy ni bna rhy ya property actullay mn  "RTK" mn h or ya hi property ka name hota h thk h to is property ka name mn ny rakh di  " todo "

  //Q ky string h to ab clear ho rha h ky "name" property important h butstring to jo mrzi ho adil hi kamil hi jo mrzi ho koi fark ni parta

  name: "todo",

  //ab hm jo 2nd chez deaty hn is slice ky andr  hr Slice ka aik "InitialSatte " hota h to hn multipel slices b bnti hn but hr slice ka aik  "initailSate"  hota h abkuch log kia krty hn ky initial state ko phly value deaty hn jo hm ny line# 17 py bnaya h or kuch yhn aa ky " : " lga ky direct values dety hn ya sub ap py depends h jo phly defeine krty hn wo yhn aa kr bs " initialState " likh deaty hn bs or sir ko alg sy phly define krna pasand h

  initialState,

  //ab jo sub sy important chez aati h jis ky leye hi hmra store abhi tk incomplete h wo h hmry " Reducers "

  //to phly reducers kisi or thra sy bny jaty thy ab bhot asan h ab yahen py hm reducers likhty hn Slice mn hi

  //ab kia h ky reducer kia h property hi to h to hm : lga ky reducer bna dean gy or impt bt ya h ky reducer mn aata kia h ya object h thk h but object aky ander kia h or wo aty hn " properties or functions "

  reducers: {
    //to yhn hm deakhty hn property or functions desy aaty hn
    //deakhyea property ka name h mera "addTodo" ya h meri property ab is property mn kia likhna hota h hmen apna aik function ab function ho skta h hm ny khen or declear kia hua ho spose kren hm ny oper declear kia h function line #39 py or yhn py mn choun to "sayHello" function ko  yhn py referance dy skta hn or referance deana function ko call mat krna
    //ya b shi h but ap ko lgta h ky ni mn to yehen py hi lijhoun ga to yhn likh do koi dikat wali bt ni h totaly depends on you

    addTodo: (state, action) => {
      //ab addtodo krna h to mujhy pta h ky mujhy Todo to lana pry ga ab "todo" mujhy mily ga khn sy jesy "id" mily gi wesy todo mily ga  to hn gi "action" sy hi mily ga
      //to kesy likhen gy bhot hi asan h aik new "todo" bna leaty hn or is ka name dy deaty hn "todo" or todo kesy bny ga aik "object" Q ky initialState mn todos mn [] mn {} hi to push ho rhy hn to exect same wohi ka wohi kam krna h line#21 wala

      const todo = {
        //ab "ID" unique honi chyea to hm phly todo project mn id "date" ly rhy thy but is mn aik new way h unique id leany ka wo h "nanoid" jo hm ny oper import kr rakhi h

        //kesy use krna h bs hm id : ky bad nanoid() method run kr dean gy
        id: nanoid(),

        //acha ab text khn sy lean gy Q ky hr bar Hellow world to ni likhna Q ky ho skta h user ap ko kuch bhj rha ho or Hellow world hi add kry ja rhy hn ya glt bt h 😂

        //to ya text khn sy nikalna h hmen "Action" sy nikalna h

        //to "action" ky ander hm "payload" ky name sy hm ly skty hn or "payload" ky ander hmen value mil jy gi

        //ab "payload" ko b hm aik object bna skty hn to us ky ander aik " . " properties access kr skty hn

        //to " payload " apny ap mn aik object h

        //to is ky ander mn " action.payload.text " mn text name sy hi bhjoun ga is leye hi is ki property text h {text:} to 2 bar text likhny ki zarort ni h is leye sirf "action.payload" likh do

        //ab ho skta is ky ander sy hmen kuch or axtrect krna ho to wo b kr skty hn "payload" aik object h or object mn id,email,name etc. kuch b aa skta h jo b ap ko leana ho to bs ya hmra kam ho gya 👇
        text: action.payload,

        //liken ya to hm ny todo bnaya h ya todo abhi "State  " mn thori na gya h Q ky initail state to hm ny bta di but ab is state ko update b to krna pry ga na
      };
      //ab yhn py ati h sub sy axhi bt ky is state ko phly jb "Redux" me jis thra sy kam mn leaty thy to thora sa extra kharcha hota tha  kharcha mean Time ka kharcha

      //but yhn py kuch ni krna h yhn just "state" ka acces lo state ky ander hm ko pta h hm ny "todos" leye hn  axha "todos " kesy leye hn Q ky initial state mn mery pass "todos" hi hn jo ky hmri state mn hn to in todos ko access kr rha hn or in mn sedha hi apna jo hm ny todo bnaya h us ko push kr rhy hn bs

      state.todos.push(todo);
    },

    //or same aesy hm RemoveTodo bna lean gy

    removeTodo: (state, action) => {
      //ab Q ky ya todos hn to hm in ko overwrite kr dean gy hm state mn todos ko access kren gy or is ko overwrite kr dean gy to ya kesy overwrite ho ga kuch ni hm state.todos lean gy or is ky oper aik filter lga dean gy

      //ab filter ky ander kia ho ga har aik value ko access mily ga

      //ab har aik value ka access lean gy to kia bolen gy is ko hm is ko "todo" likh dean gy ab agy kia krna h kuch ni hmara jo "todo" h us ky pass aik "id" ho gi us ko match kr lo ky wo ni milni chyea kis sy action ky sath hm jo  payload bhj rhy hn us sy or automatically "id" wo compair kr ly ga whn py

      //bs itna hi kam h ky jo id di h us ko match mat kro baqi sub ko ly aao to filter jo true valuyes hoti hn un ko deata h to true values hm ko mil jaen gi ky hn ya b match kr rha h ya b kr rha h jo ni kar rha ho ga us ko bs whn sy gab kr dean gy
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    //yhn tk to dikat/prashani wali bt ni h

    //ab yhen py hmra actually mn change aata h "Contaxt Api" sy Contaxt Api mn b hm isi thra likh rhy thy hmesha function ka decleration kr rhy thy us ki defenation ni likh rhy thy

    //but yhn py "RTK" mn hm sirf function ki decleration ni likhty blky us ki defination b likhty hn idhr hi

    //to jb b hm addTodo kren gy hmen access mily ga 2 chezoun ka "Hmesha yad rakhna " ya syntx ya h ya isi thra sy kam krta h jesy "useState" yad rkhty hn "useEffect " yad rakhty hn wesy hi hmen yhn py b 2 chzean milen gi

    //aik mily ga "State" or aik mily ga " action"

    //in douno ka ap ky pass hmesha hi access rhy ga

    //State jo variable h ap ko hmesha acess dy ga ky abhi meri jo InitialState on Line## 17 h na abousvalliy bat h agy ja ky change ho jy gi to abhi us state ky ander kia kia values hn un sub ka access ap ko  dy gi ab ho skta h is InitialState mn 10 todos gy huye houn todos array ky ander 5 gy huye hn 1 b na gya hua ho sary remove kr deyea hn to kia situation h us ki ya sub hmen "State" deata h

    //ab "Actions" kia hoty hn action ya hota h ky kai bar ap ky pass ho skta h kuch values aye

    //ab jesy removeTodo apny ap hawa mn to remove ni ho jy ga aik ID to lgy gi na to kuch values mujhy b to chyea hn gi jb mn removeTodo() ko call kroun ga to wo values khn sy milen gi wo values "action" mn sy milti hn

    //now we go to our addtodo method on line##65
  },
});

//to abhi tk hm ny "todoSlice" export kr dia h liken ya is thran sy export ni kia jata h acctually mn hmen is ky 2 part export krny hoty hn

//step # 4

//aik to jo h na hm sari funcationality ko export kren gy Q ky acctually mn ya jo "Reducers"  hn na "remove todo" "add todo" hm isi ky through hi hmesh states ko update kren gy tonya funcationality indivisually kam mn aye gi tohm kia krty hn in funcationality ko export kr deaty hn

export const { addTodo, removeTodo } = todoSlice.actions;

//now jo hm ny store bnaya tha wo to akely hi ghoom rha h is store ko b awaierness chyea in sub reducers ky bary mn

//agr is ko awairness ni h to ya store mantain ni kr py ga Q ky ya aik restrective store h ky mn value har kisi sy ly ky update ni kr leata hn mery ander jo jo ap reducer register kro gy mn sirf un sy hi value ly ky update krta hn

//to is leye is ko sary ky sary reducers ka list chyea hota h

export default todoSlice.reducer;

//isi thra sy agr hm or b reducer bnaty hn ya todoSlice ki jagaha authantication slice h ya kuch b slice bnaty ho  ap ko wo sary reducer export krny hi paren gy or us ko yhn py leana hi pry ga

//indiviuals reducers ko b export krna pry ga or un ko aesy hi export krna pry ga jesy funcationallty ko export kia h

//Q ky ya componnets mn kam aeyen gy

//now we go to our store file

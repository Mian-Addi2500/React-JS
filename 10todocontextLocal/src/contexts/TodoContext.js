//step : 1

// Ab hm is mn koi jsx wagera ni return kr rhy to is leye hm file ka name [.js] likha jsx ki jagha
// ab kia kia 2 chezean lagen gi 1 hmra [createContext] lgy ga or 2nd [useContext] lgy ga Q agr wo {provider} wala drama {context} mn ni krna to ya  {usecontext} lgy ga to ya dono hm 1st import kr deaty hn or ya aty hn {react} sy

import { createContext, useContext } from "react";

//step : 2

//ab hm apna todocontext ko export b kren gy or bnaen b gy aik hi line mn or ab hmra [todocontext] aye ga ya bny ga khn sy wo bny ga hmry [createcontext] sy or hm janty hn [creatcontext] kia h aik [object] h is leye hm is mn object pass kr dean gy

export const TodoContext = createContext({
  //ab ya aik object h to hm is ko object bnayen gy
  //sub sy phly hm aik object banayen gy [todos] ky name sy or us mn hm aik [aray] banayen gy ab is [array] ky andr  hr aik filed {},{},{} is thrha sy add hoti jy gi
  //ab ya kia h {},{} ya hmry todos hn or wo object hn gy to is leye hm un ko aesy len ga

  todos: [
    //ab hr aik to-do kis thra sy bny ga us ky leye hmry hra aik to-do mn aik [id] ho gi or hmra [todo] ho ga ab is ko hm [todomsg ya tododetial] jo bolen wo hm py h or is ky bad hmry pass aik ho ga ky todo bydefault kia h [completed] h ya ni to wo dean gy

    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
    //isi thra sy hm or b apny todos add kr dean gy  {},  {}, is thra sy one by one
  ],

  //ab hm ny theme swither waly project mn jb context lia tha to us mn hm ny aesy properties leny then [ themeMode: "light",] or us ky bad hm ny fuctionaalites b likhen then aesy [ darkTheme: () => {},   lightTheme: () => {},]

  //to aesy hi jo oper hm  ny [todos] likha h to same last waly project ki thrha properties hi to hian or ab hm is mn last project ky jesy functionality b add kren gy

  // 💢[imp note] 💢 :- functionalites ky ander hm functions ki definations ni likhty sirf un functions ky name likhty hn definations hm [app.jsx] mn ja ky likhty hnn

  //wesy hm chaen to kisi b file mn function decised/define kr ky whn py [app.jsx] import ly len koi b msla ni h is bt mn b but usually context api bhot bary projects ky leye ni bna h to whn un bary project ky leye hm [redux , zestene] ya aesi [statemanagment labrires] ka use krna prta h  to isi leye most of the cases same aesy hi app.jsx mn hi functionality define hoti h most of the case

  //now define fuction

  //ab hm is functionality mn aik [todo] pass kren gy or ya [todo] or ni hmry todo ka [todomsg] ho ga ab hm jesy hi [todo] pass kren gy to aik function kuch kam kry ga kia kam kry ga ni pta ya kn kam kry ga ya hm bhi mian jo hmra app.jsx h us mn decide kren gy

  addTodo: (todo) => {},

  //now create updateToDo

  //axha update toggle ni h update ky ander pora ka pora todo update hota h

  //to phr ab update kren gy to kis thra sy kren gy ? ya issue kesy solve kren gy wo deakhty hn

  //deakhen jb hm update kr rhy hn kisi b todo ko to us ky ander hm jb edite ky icon py click krty hn to hmry pass [todomsg] to aa rha h jo b likha hua h to ya to dena pry ga function mn or kn c wali [todo] update krni h us ki b [id] dean gy, to is thra [update] wala function 2 chezen demand kr rha h (1)todomsg (2)id

  updateTodo: (id, todo) => {},

  //now create deleteTodo

  //is mn sirf hmen [id] chyea bs

  deleteTodo: (id) => {},

  //now last is a togglecomplet ckeck box

  //is mn kia ho ga kuch ni is mn aik jo field h hmry pass wo update ho jy ga baki kam [css] kry gi to is ky leye hmen sirf [id] chye

  toggleComplete: (id) => {},

  //conclusion of cretContext

  // hm ny is mn functionality py dihan ni dia hm ny sirf ya bola h ky ya jo context h is mn kia kia methods[functions] hn or kia kia [values] mean [todos] hmary pass hn,  ab axhai bt ya h ky Q ky [todos] sary ka sary yhn  py hn or jb b mujhy context ka access mily ga to [methos] ki functionality main kahen or jagha pr likhoun ga [app.jsx] mn , liken jo values hn wo mujhy pta h ky hm ny oper walye [todos] sy hi leni hn to mera [component] koi b ho mn values yahen sy access mn loun ga
});

//step : 3

//ab hm apna aik custom [hook] bna ky us ko export kr leaty hn Q ky hm bar bar na useContext ky ander bar bar waps sy context dalo import kr ky wo ni krna to is leye hm aik [hook] hi export kr deaty hn
//now build a hook and export it
//ab ya useToDO kry ga kia ya bs aik method h or kuch b ni h

export const useTodo = () => {
  //ab hm is ky ander  [return] kr dean gy Q ky return hi krna prta h
  //ab hm kia return kr dean gy hn G wo [useContext] jo hm ny import kia tha us ko return kr dean gy apny is hook mn
  //ab jo hm ny [useContext] bolaya tha is ko [context] chyea hota h to hm [mian] file mn na ja kr ky yhn pr hi sedha hi export kr rhy hn bs itna sa kam h
  //ab kn sa context deana h is [useContext] ko wohi jo hm ny abhi opr bnaya h apna context [ToDoContext] wo hi hm is ko dy dean gy

  return useContext(TodoContext);

  //💢 [imp Note] 💢 :- jb b hm [useContext] lean gy us [useContext] ko hmen 1 context deana pry ga ky kis ky bary mn bt kr rhy hn [context] ka mtlb hota h ky kis chez ky bary mn bt kr rhy hn to hm [todo] ky bary bt kry hn hn agr [login] wgera ya koi or hota to wo yhn lety mean jis chez ky about bt kr rhy hn wo hm yhn py rakhen gy
};

//step : 4

//ab hm aik [Provider] b yhn sy export krty hn Q k mian kia chata hon ky whn py [main] file mn ja ky, na sub kuch rap krna pry [todocontext.proverder] to wo ni krna h to yhn sy hm sedha hi provider ko export kr dean gy

//to is mn aik variable hi export hota h or kuch b ni hota

export const TodoProvider = TodoContext.Provider;

//bs mian file mn mujhy [ToDoContext.Provider] ya na likhna pry is leye hm yhn py likh lety hn bs

//Step : last

//[Go to projectDetail.txt]

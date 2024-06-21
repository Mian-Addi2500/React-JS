//💢💢💢💢💢💢step # 1💢💢💢💢💢💢

//add app.js UiI from notes jin ka link h 👇

// https://github.com/hiteshchoudhary/chai-aur-react/blob/main/todoContextapiNotes.md

//is link sy copy kren [app js ui] ka code or paste kr dean [return ] ky ander

import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  //💢💢💢💢💢💢 step # 2 💢💢💢💢💢💢

  //deakhyea sub sy pheli chz to ya ho gi ky b [todos] hmry pass context sy ayen gy un ko hm kahen na kahen to store kr ky rakhen gy or store rakh ky [UI] b change ho rha h to ya sub chez hm khn py rakh skty hn jis ki value aik bar store kr ky hm change bhe skty hn , g bilkul hn us ko [state] mn rakhen gy

  //now create a useState to store [todo]

  const [todos, setTodos] = useState([]);

  //bydefault hmry state jo bny ga us ki value ho gi [] empty array Q ky agr empty array ni rakhoun ga to [null] rakhoun ga to us mn b problem ho gi to atleast agr mn empty array rakhoun ga to ya pta lg jy ga ky agr mn [loop] lg raha to us mn aik b value ni h to hm yhn py us hisab sy is empty loop ky through kam kr skty hn

  //💢💢💢💢💢step # 3💢💢💢💢💢

  //now ab hm aik aik kr ky functionalites ko deakhty hn

  //sb sy phly basic functionality wo kia h ky add krni h value

  //💢 IMP NOTE 💢 add krty time hm form wagera sy add kr lean gy but functionality hm sari yahen py define kr leaty hn , axha ya functionality yhn py Q define kr rhy hn or kr kesy pa rhy hn wo sb b deakhna pry ga ky kesy ho gi add us ko krny ky leye hm sub sy phly [return] ky fragment mn add krn gy [todoprovider] Q ky sub kuch usi ky ander rap ho ga or us ky leye hm import b kren gy [todoprovider] ko jesy line # 13 py import kia hua h

  //ab jb hm ny frigment mn [TodoProvider] add kr dia to kam khtm ho gya ? no Q ky provider akela kuch ni krta ya kuch provide b to krna chye to ya kia provide kry ga to agr hm todoProvide py ja ky hover krn gy to sari value aa rhi hn gi jo wo provide kry ga to us ky leye hm kia kren gy

  //to us ky leye hm liken gy value={}  frigment mn

  //axha ab todoProvider kia kia provide kry ga us ky leye hm value={} ky ander aik or {} likhen gy aik thra sy hm values ko de-structure kr rhy hn wase hm or thra sy be value ko add kr sakty thy bs us ky leye phere [.]  lga ky access krna prta to us sy bethere h hm de-structure hi kr dean
  // values mn hm sarya context waly methods or todos jo array thy aad kr dean gy or ya sub value hmen todoProvider sy hi accss hui hn

  //Q ky ab hmen methods or properties ka access mil gya h to hm aik aik kr deakhen gy methods or properies kesy

  //now check how methods works one by one

  //1st add todo method

  //💢 IMP NOTE 💢 {jo method ka name h same yhn py likhna h jo lowercase uppercase h tabhi functionality us ky ander jy gi }

  // const addTodo = () => {}; ya ho gya method tayar deakhna phry ga context mn ja ky ky todo kam kesy krta h
  //to context mn ja ky hmen pta chla ky ya method addTodo ko kia chyea aik {todomsg} chyea ab to-do aik value h jo aik {string} value h is sy hamen ni mtlb ky {todo} kia ho ga wo aik string h is sy ziada kuch b ni h
  //ab hm aa ky {todo} dy dean gy ab ya todo hmen state sy mil rha h ? no ya todo hmen {form} sy mil rha h , state mn to sary todos hn

  const addTodo = (todo) => {
    //ab kia krna h ky ya to hm {todo} pass kr rhy hn function mn to wo jana chyea state ky {todos} ky array mn jana chyea but is array ky ander ho skta h already exisistence values hn bilkul ho skta h or ho ga b to us ky leye kia kren gy

    // us ky leye hm setTodos ko call kren gy or ab is setTodo ky ander mn ny is todo ko add kr dia aesy  setTodos(todo) too kia ho ga kay porani sari values delet ho jaen gi us Todos  array ky ander  or sirf aik new value set ho jy gi

    //ab hm ya to ni chty hy porani sari values delet ho jaen to is ky leye hmen kia chyea

    /*is ky leye hmen porani state ka access chyea ky hmry pass kitny {todos} thy phly to agr hmn ny sir ka wo interview wala question wala video jo ky is link mn h 
    
    ( https://www.youtube.com/watch?v=tOYkV6Yhrhs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=9 ) 
    
    deakha ho jis mn hm ny aik value update ki thi 16 17 18 19 to wohi wala concept yhn py use ho ga 
    */

    //to is mn kia hota h ky agr hmen state ki value chyea to hmry pass setEodos mn aik call back function hota h jis ko hm use kr skty hn

    //ab hmen purana aray yhn mil jata h ab hm us ko {prev , oldtodo} jo mrzi aye bolen wo hmen yhn py mil jata h aessy [setTodos ((prev)=>)]

    //ab purnay array sy kia kro ab purany array sy aik new array bna do aessy           [setTodos (()=>[])] ab new array bna ky kia kren gy purani values b dal do or new values b dal do

    //ab purani values dalny ky leye kia krna pry ga kuch b ni bs hm destructure classic JS ka concept use kren gy aesy  [ setTodos ((prev)=>[...prev])  ] is ka kia mtlb h ky purani sari values lean or in ko [...prev ] aesy aa ky spred kr dia

    //ab jo new values hn hm khn rakhna chty hn new jo eodo h hm chyean to setTodos ((prev)=>[...prev , todo]) end mn rakh dean agr hm ko lgta h ni ni mn to strt mn enject kroun ga ya sub hm py h hm jesy mrzi kren ya lean aesy setTodos ((prev)=>[todo , ...prev]) mn ny new todo rakh dia

    //ab glti kia ki hm ny hm ko actullay mn new todo banan pry ga hn g Q ky agr hm context mn deakhen gy to hm ny todo is thra sy
    /* {
      id: 1,
      todomsg: "Todo msg",
      completed: false,
    }*/

    //aik object bnaya h asyea ni ky sirf aik string add kr dia blky hm ny 3 values lani hn

    //ab agr hmry pass 3 values hn to mn direct is thra sy setTodos ((prev)=>[todo , ...prev]) todo dy ni skta

    // mn dn ga aik object or phr us object ky ander hm sari values lean gy or sub sy phly object kia dn ga aik id ab muhy ni pta kia dn ho skta h 2  id dn but hr bar 2 thori na dn ga to kuch na kuch dynamic value chyea hn gi to sub sy easy h ky mn abhi {id : Date.now()} kr deata hn ta ky hr bar aig dtate ho gai ho gi or wo kam ho jy ga hmry pass  ab thk h {id} aa gai h hmry pass us ky bad kia h ky baqi jitni b values hn to yhn py hm {...todo} kr ky ly leaty hn

    //todo b apny ap mn aik object h to mn ny {...todo} is thra sy pora sapred kr dia or aik id whn py enject kr di

    //ab agr ya concept confuse kr rha h to JS ki revision ki zarort h

    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  //now next we go to our UpDateTodo

  //hmry updateTodo mn {id , todo} chyea hota h context mn ja ky deakh lean

  const updateTodo = (id, todo) => {
    //ab knsa id ka todo update ho is ky leye hmnen sub sy phly ya pta hona chyea ky {todos} hmra aik array h to array py aik loop lagana pry ga or loop lga ky find krna pry ga ky kn sy id waly todo ki property ko ap update krna chty ho or us mn hm apna new updated todo add kr dean gy

    //to hm setTodo lean gy us mn mujhy pta h ky aik callback milta h hm us mn prev value ly lean gy ab hmen koi chze return ni krni to hm function ki {} ni lgaeen gy or direct hi apni prev value py loop lga dean gy ab hm py h .map lagen ya foreach lagaen jo hmra dill kry hm lga lean gy koi msla ni h
    //ab yhn py mujhy pta h ky m n map lgaoun ga to mujhy hr aik todo mil jy ga ab hr aik todo kia h aik object h or hr aik object ky ander aik id h

    //ab ya hmry pass prev.map((prevTodo)) hr aik indivisual todo h hm is ky sath callback lga dean gy ab us ky ander kia krna h ky jo b hr aik prevTodo mujhy mil raha h us ky ander aik ID h or ab us ky sath mujhy kia match krna h === lga ky hm id match kren gy ab aik important bt ky ya jo hm ny {prevTodo.id} lia h ya to h hr aik todo ki id h or hm ya jo === ky bad d likh rhy hn ya id h jo update todo method mn pass ki gai h

    //ab agy kia krna h ky agr ya value setTodos((prev)=> prev.map((prevTodo) =>(prevTodo.id === id ) ))agr ya tru h ? to kuch kro or agr ya : false h to kuch kro

    //agr true h to hm new todo dal dean gy aesy todo

    //agr ni mil rhi to kia kren gy jo purana todo h to us ko same rehny dean gy as it is us ko change krna hi ni h aesy prevtodo

    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  //now next we go to our deleteTodo

  const deleteTodo = (id) => {
    //is mnn same hm chezean lean gy jo oper le hn

    //ab hm is mn update ki thra .map use ni kren gy Q ky mujhy kia krna h ky aik prev array leani hn or us mn ny kia krna h ky meri new array bny or us mn meri wo value na ho jo id mn deletfunction mn di h or baqi sary todos hn to us ky leye JS ki aik or functionality us hoti h jo ky h Filter

    //ab filter to true statements py work krta h to hm aesy likhen gy ky  prevTodo.id !== id  to jo to match ni kry ga wo to ata jy ga or jo match kr jy ga wo wahne reh jy ga wo return ho ga hi ni kbhi

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //now sub sy instring or thora sa busniss logic yhn py jo ky hm ny krna hy ToggleComplete functionality ya intersting is leye h Q ky is mn hmen jo hmra todo h

  /* {
      id: 1,
      todomsg: "Todo msg",
      completed: false,
    }*/

  //us todo object ky ander jana pry ga is bar or us ky ander ja kr hmen jo {completed} value jo h us ko toggle krna pry ga yani ky agr true  h to false kr do false h to true kr do is mn slmost dsame kam h update function ki thra

  const toggleComplete = (id) => {
    //to aty hn setTodos py array h mujhy pta h array ki hr aik previous state ka mujhy access chyea to mn setTodos mn callback lga ky (prev) likh dn ga to access mil jy ga ab mujhy return ni krna is leye mn {} ni lgata hn ab kia h hr aik prev py mujhy nmap lgana h mn map lgata hn {prev.map()} ab hm ny map lgaya to hmen kia mily ga hr aik map ky ander value ka access mil jy ga or hm ny us value ko bol dia {prevTodo} or ab hm us value ky oper loop lagean gy ab hm loop us py lga rhy hn to mujhy kia krna pry ga phly find krna pry ga ky kia jo prevtodo jo h wo wohi wala h jo id hm ny pass ki h but filter mn maon kia deakh rha tha wo wala do jo is ka na ho to hm ny tab wo wala logic lagya but ab ki bar mujhy match krna h us ko ky agr match ho gya to usi ko to update krna h to isi leye hm ny map function use kia h to ab match krny ky leye hm aik Question poch leaty hn  is sy ky jo hmra prvetodo h kia ya match krta h meri id sy jo mn ny method mn pass ki h agr match krta h to kuch kro ni krta h to kuch or kro aessy (prevTodo === d ? : ) agr ni krta match to phr to kia kren kuch ni prevtodo ko prevtodo rehny do (prevTodo === d ? : prevtodo) or agr krta h match to phr kia kren agr match kr gia to krna ya h ky baqi sari values to ass it rakho bs aik value ko jo ky h completed us ko change kr ky true kr do is mn aik bt to paki h ky spred operator to zaror use ho ga Q ky baqi sari value as it rakhni hn to kia kren gy is ky leye hm phly {} lgaen gy Q ky object hi to h hmra todos  is mn hm ny kia kya ky phly to sari values ly lo spread oprator ky thorough {...prevTodo} is sy kia ho ga sari values aa gai hmry pass sari values sy murad context mn todo object ki values ab is mn sy sirf aik value ko change krna h to thk h , lga ky change kr do kn c value ko completed ko context mn jaaaa ky todo object sy completed copy kro or yhn aa ky paste kro or ab is property ko overwrite kr do kia overwrite kren us ko ky jo b us py phly value h us ky samny ! mark lga do to jo true h false ho jy gi or false true ho jy ga ab phly wali value  kesy lean gy ya {!prevTodo.completed  } ya lo bs is sa hi to kam tha to phly mn ny sari values ley lean apredd method sy or phr us ko overright kr dia

    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //yhn tak hmari functionality complete ho gai

  //💢💢💢💢💢💢 step # 4 💢💢💢💢💢💢

  //now we read LOCAL STORAGE CONCEPT

  //ab deakhyea ky jesy hi meri app load hoti h ho skta h hm ny us ky ander todos already kuch add kr rakhy hn to wo todos sub sy phly load ho jany chyean to jb hmari app first time load hoti h to kn sa aesa method h jo Quarry kr skta h ky Local Storage sy ya mn koi aesa function bna n ky ya fun run kr ky LS mn jao or sari values ly ky aao jo b us ky ander hn or us ko hmry jo useState ka todos h us mn insert kr do to hm janty hn is ky leye aik react ka method/hook h jo hm ny already study kr rakha h wo h useEffect hook now we use it to get all values

  useEffect(() => {
    //ab sub sy phly hmen sari valus ly ky aani hn to wo kesy ly aen gy

    //deakhyea Loacal Storage ko hm directly access kr skty hn jb tk hm React mn hn [💢💢 jb tk hm server side redring ki bt ni kr rhy hn 💢💢] Q ky agr sra kam server pr ho gya to browser py kbhi aya hi ni to local Storsge kesy kam kry ga

    //to hm direct hi local Storage ko access kr lean gy or is ko bolen gy .getItem

    //ab hmen koi b iteam liana h bs us ki key  btani prti h

    //setItem krty time hm btatay hn ky key kia rakhen gy or value kia rakhen gy but get krty timme hm bs key ka name use krty hn or hmen value mil jati h

    //abhi tk hm  ny koi b key ka name rakha ni h to lets supose mn us key ka name todos rakhoun ga aesy localStorage.getItem('todos') abhi mn get kr rha hn Q ky mn ny set ni kia h get krna phly zarori h ab ya localStorage.getItem("todos"); sari values hmen dy deay ga but msla kia aye ga ky ya hmen value STRING mn dy ga but hmen kis mn chyean JSON mn Q ky JSon hi to h jo actually mn pora ka pora structur preserve rakhy ga to us ky leye hm JSON.parse mn is value localStorage.getItem("todos"); ko rap kr dean gy ab is ko store kr lean gy aik variable mn

    const todos = JSON.parse(localStorage.getItem("todos"));

    //hn g ho gya g ho gya bs itna sa hi h local storage 50% ho gya h aik line mn

    //ab next kia krna h values ko set krna h agr un mn kuch ho to, to us ky leye hm conditional check rakh leaty hn ky phly to bato ky todos h ky ni h hmry pass

    //ab condition mn hm todo to pass kren gy but optional hm ya b pass kr dean gy todos.length Q ky mujhy pta h ky todos aik array h hn hm ny bola h ky wo aik JSON h but end of the day to kia h todos array hi h or array  ky ander object h to ya struchutre be agr mujhy preserve krna h to b ya JSON sy hi preserve ho ga string mn ni milta ya struchure to ap chye array lo zarori ni h JSON ka mtlb {} braces hi ho json ka mtlb arrays b ho skta h hn g ho skta h ya concept kidi or din but ho skta h

    //ab mn condition mn sawal kia krta hn ky todos to h us ky ander but kia todo ki length b h kia 0 sy bari h kia

    if (todos && todos.length > 0) {
      //js condition true ho jy tb hm call kren gy apny setTodos ko or us ko bolen gy ky ya lo g ap ya todos ly lo

      setTodos(todos);
    }
  }, []);

  //ya sara oper wala kam ho gya hmraa aik useEffect mn but kia hm multiple useEffect use kr skty hn, han g hm multiple useEffect b use kr skty hn is mn ko issue ni h

  //now hm aik or LS mn kam kren gy deakhyea jo hm ny oper kam kia h ky jesy hm ny app ko load kia yhn py sari ki sari values aa gaen liken aik or kam h hmry pass ky jessy ya values jo hm add kr rhy hn  todos mn us ky bad us ko LS mn add krwana chata hn thk h LS mn kb add krwana chata hn jb ya useState ky todos mn jay halan ky ja context api ky through aa rha h addtodo method sy liken end of the day context api b to yhn py to ya TodoProvider hi h  to ya provider mery ko yhn py todos day hi rha h provider ki  values mn to jesy hi us ky ander value chli jy why sy ya value mujhy mil jy  gi useState ky todos mn  or jesy hi useState ky todos mn kuch b change ho to mery ko wo values LS mn add krni h

  //ab hmry dimagh mn sub sy phly aya ho ga ky yr ya oper useEffect banaya to h us mn dependencies mn todos ko dall deaty hn or aik or method likh deathy hn , hn kr skty hn liken problem kia ho gi us ky ander kuch b change aye ga na to ya useEffect jo oper hm ny bnaya h ya waps sy us ko get b kry ga to mn ni chata ky ya pora ka pora method run ho to aik option ya h ky hm aik or useEffect likh skty hn ya koi b issue ni kry ga kai app mn aik sy ziada b useEffect hoty hn

  //now creat 2nd useEffect
  //is bar dependinecies array mn hmry pass todos h ya wohi useState wala todos h

  useEffect(() => {
    //ab hm is mn kia krwana chty hn ziada kuch ni wohi LS leaty hn or is mn kia kren gy .setItem pichle bar hm ny get kia tha is bar set kren gy ab set item mn key or value dani prti h ab key to ho gai hmari wohi jo hm ny getItem time use ki thi same rakhni h  {localStorage.setItem('todos')} ab ya to ho gai key ab value jb hm doc mn deakhty hn to wo string mn di hoi h directly or string mn hi deana prta h liken mujhy mera structure pta h ky mn to array ly rha hn phr mera LS ly ga hi ni  ab LS mn hmen aik or method miltta h {JSON.stringfy} ya kia krta h ya sub kuch string mn convert kr deata h or us mn hm apna todos add kr dean gy aesy {JSON.stringfy(todos)} to is thra sy hmry pass ya kam ho gya h

    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //now LS Functinally Done

  //💢💢💢💢💢💢 step # 5💢💢💢💢💢💢

  //go to project detail file on step #5

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            {/* yhn py hm sirf todo form ko call kr lean gy bs  */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {/* but yhn py funcationality thori c intersting h Q ky hm jo todos hm context sy ly thy un py loop lagana pry ga loopky ander hm aik todoitem ko prop b pass kren gy or us ko call b kren gy  */}

            {
              //js start here

              //yhn py hm aty hnor {} sy apni JS start krty hn or us mn todos ko call krty hn or us py map lga deaty hn foreach b use kr skty hn hum py depened h ab jesy hm map lagaty hntoya har aik todo ky pass jata h hm likhen gy aesy  todos.map((todo)=>()) ab hm ny (todo)=>() ky bad {} ki jaga () Q lgai hn Q ky jb hm {} lgaty hn to hmnen return keyword likhna prta h but jb hm () lgaty hn to ya auto return hota h to is ky ander hm apni values ko add kr leaty hn

              todos.map((todo) => (
                //to 1st of all we call a div
                //ab Q ky mujhy pta h loop kyander ya [div ] jo hm bna rhy hn  repite ho ga or har aik div unique h ya nhi ya kesy pta lgaoun to us time py hmry pass kam aati hn  [keys] agr keys ni use kren to ho ga kuch ni warning dy ga liken  profrmance agy ja ky itni ja ky  degreat ho jati h jis ki koi had ni Q ky react ko pta hi nih na ky dom ky ander kesy changes kry Q ky ho skta h 3 todos aik jesy dikhty hn pr kia granty ky wo alag hi hn to us ki granty lani prti h jo key sy milti h ab div mn ja ky apna todoitem call kr lo
                // sirf itna krny sy <TodoItem />  kam ni ho Q ky us ko aik component prop pass krna pry ga

                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

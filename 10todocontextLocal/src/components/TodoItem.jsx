import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

//💢💢💢💢💢💢 step # 1💢💢💢💢💢💢

//go to note at this link "https://github.com/hiteshchoudhary/chai-aur-react/blob/main/todoContextapiNotes.md" and copy TodoItem UI code and paste it below

function TodoItem({ todo }) {
  //💢💢💢💢💢💢 step # 2💢💢💢💢💢💢

  // is mn hm 1stoff all functionality py ayen gy

  //ab functionality ky leye sub sy phly orimportant kam h context ly kr ana now we get our context here

  //us ky leye sub sy phly hm ko kuch values chyea hun gi wo khn sy laen gy hm wohi apny context ky ander apny customhook sy aesy   const {} = useTodo(); on line # 27  ab kia kia functionality yhn sy chyea wohm yhn sy extract kr leangy aesy {} ander likh ky jesy update kreny ky leye hmen chyeay {updateTodo} wagera mean jo b chyea hm { }  mn likhen gy
  //ab kia kren gy hm states banaen gy oper ziada ni 2 hi state lagaen gi so on line #20 we create our state
  //pheli state to ya lgy gi ky editeabel h ya ni h toDO usky leye lgy gi state
  //by default value false rakh dean gy

  const [isTodoEditable, setIsTodoEditable] = useState(false);

  //now 2nd state ya lgy gi ky hmry todo ky ander msg kia h Q ky we know jesy hi hm edite ky icon py click kr dean gy to state change ho gi to whn sy hmean wo value b to leani paren gi jo todo msg ho ga to usky leye ya state bny gi
  //iski bydefault value ho gi job hamara todo h us ky ander .todo ab ya kesy lia bcz todo hmry pass aya h jo hm ny oper function mn destructure kia hua h todo ko aesy ({todo}) on line # 8 ab Q ky pora object mil hi rha tha to jo b pora object aya us ko mn ny todo bol dia to     todo.todo mn ny yhn py value ly li h

  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  //💢💢💢💢💢💢 step # 3💢💢💢💢💢💢

  //ab kia krna h ab krni h functionality py bt to functionality mn hm sub sy phly edite todo ka function banen gy

  const editTodo = () => {
    //is mn 1st of all kia call krna prya ga updatetodo thk update hi to kr rhy hn edite py click krny ky bad kia ho rha update hi to ho rha h

    //ab update krty timekia h ky knsa wala todo update kr rha hn to Id to lgy gi us ky bad kia lgy ga jo new hmraa todo msg h wo todo msg b lgy ga  now we start work on updatetodo ky kesy id pass kren gy us ky leye hm todo.id lga dean gy aesy todo.id

    //ab todo msg kesy pass kren gy   Q ky todoobject h is leye object ki form mn passkren gy aesy {} ab is objectky ander phly to hm spred kr lean gy jo exisiting values hn aesy       {...todo} ab us ky bad kia krna h ky mujhy sirf aik property update krni h jo h todo ab id b hm same rehny dean gy or us ka true false b Q ky object ko hm ny sara ka sara spread kr dia h is leye ab hm sirf aik specifi propertyko update kr pa rhy hn jesy phly app.jsx file mn kia h ab kesy krna h is todo ko update aesy    todo : todoMsg  ab ya todoMsg khn sy aya ya aya hmri sate sy jo hm ny bani h on line # 25

    updateTodo(todo.id, { ...todo, todo: todoMsg });

    //ab jesy hi mera todo update ho jy ga us ko mujhy btana pry ga ky  setisedtieable(false)  Q ky update ho gya ab editeable property false kr DEAN gy

    setIsTodoEditable(false);
  };

  //now ab hmry pass aye gi 2nd functionality jo ky h toggleComplete ki by the way hm ya functinality likh chuky hn app.jsx ky ander on line # 136 sari functionality whn py define kr chuky hn ab yhn py kia krna h ky hm yhn sirf funationality ko call kren gy asey

  //build togglecompleted method

  const toggleCompleted = () => {
    //now we get our togglecompletetask value which come from our context  ab is ko id chye to hm ny todo Prop pass kr rakha h to wohi ly ky us mn sy id pass kr deany ga

    //console.log(todo.id);
    toggleComplete(todo.id);
  };

  //💢💢💢💢💢💢 step # 4💢💢💢💢💢💢

  //now we over view our remaning component in below in return

  //1) first div mn hm check kr rhy hn ky hmara todo completed h ya ni h or ya chk kesy pa rhy   hn Q ky todo hm ny prop ki form mn kia h  or phr is mn condition lga rhy hn agr complet h to koi or CSS hoor agr ni h to CSS changed ho

  //2) is mn hm checkbox input field mn hm ko ya deakhna prta h ky hmra input field check h ky ni h ya deakhna prta h or ya b hmen deakhna prta h todo.completed sy oronchange py hm toggleCompletedko callkr rhy hn bs or ya apny ap context ly ky kam kr rhy h

  //3) us ky bad hmry pass 2nd input filed h jo ky text type ki h ab ya input filed readonly h ya ni h is py depend kry ga hmra sara kam ab Q ky hm chaty hn edite krna input filed ko but wo readonly h to ya kesy chnage ho ga jb hm   readOnly={!isTodoEditable}  ya kren gy ab readyOnly kesy change ho ga jub ya todo editeable ho ga to us ky leye hm ny kia kia onchange py setTodoMsg  yhn py call krwa dia or values hmny wohi ki wohi ly li h

  //4) buttons py hm ny kn si values show krwani h editeable h ya ni h oe kn sa icon show kraen

  //5) deltet waly mn hm ny deleteTodo direct hi callkr rakha h or id yhn py dy di h

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

//💢💢💢💢💢💢 step # 5💢💢💢💢💢💢

//now go to our app.jsx file agian Q ky hmry components wagera ready hn to aik final chz ky hm simply app.jsx mn jaen or un commponents ko call kr lean now go to that file online # 213

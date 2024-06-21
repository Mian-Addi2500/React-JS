import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

//💢💢💢💢💢💢 step # 1💢💢💢💢💢💢

//go to note at this link "https://github.com/hiteshchoudhary/chai-aur-react/blob/main/todoContextapiNotes.md" and copy Todo Form UI code and paste it below

function TodoForm() {
  //💢💢💢💢💢💢 step # 2💢💢💢💢💢💢

  //ab hm state define krni h ya state khn sy ya indiviual todo ky leye jo hm add kren gy or default value empty string ho gi ""

  const [todo, setTodo] = useState("");

  //💢💢💢💢💢💢 step # 3💢💢💢💢💢💢

  //ab ya jo h ya mera ki h add todo h Q ky form h ab addTodo ki functionality to mery pass app.jsx mn define h hn ji functionality to hm ny app.jsx mn inject kr di h liken functinality hm yhn py khn sy lean gy wo hm lean gy {useTodo} sy jo hm ny Context mn banaya tha hm useContext sy b ni lean gy blky useTodo sy lean gy Q ky context mn ja ky jb hm deakhty hn line # 78 pr ky useContext kisi kam ka b ni h Q ky is ny useTodo dy dia h ab us sy hm lean gy or useContext ky pass hi h sara context h sub kuch to usi ky leye to context banay h bs ab kia krna h jhn b component wagera mn chyea jhn mrzi driling/inject krna ho  sedha aik line likhni h or sari values mujhy  mil jaen gi aesy const {} = useTodo; jo b functionality chyea hm yhn sy extract kr lean gy or khn sy lao useTodo sy ab jo b chyea useTodo sy wo {} in barckest mn likh do

  const { addTodo } = useTodo();

  //ab krna kia h wo values lani hn orr addtodo ky ander pass krni hn ab addtodo kia accept krta h on line #37 in todocontext.js file ky mujhy todomsg do gy axha kam kia kroun ga kam yhn py ni btaya kam app.jsx mn btaya gya h on Line # 52 pr ky kia kam krty ho gi ky kuch ni mn todos ko leata hn or previous values sari ko extrect kr leata hn prev mn or phr previous values ko spread kr deata hn aeasy ...prev us ky bad { id: Date.now(), ...todo } ya rhi values hmry pass mn to hm ny kia kra ky mn id mn date.now() kr ky ley lia h or baqi values ko ass it spread kr dia h baqi value ko spread kr dia h mtlb object don ga tbhi to spread kro gy aesy koi hawa mn thori na kr do gy hn gi sahi bt h to us ky leye method bny ga

  //now build method

  //method ka jo mrzi aye name do koi farq ni prta yhn py or is mn event aye ga hi aye ga

  const add = (e) => {
    //ab sub sy phly to prevent default kren gy
    e.preventDefault();

    //now check todo mn kuch b ni h kia krna h simple sa return kr deana h bs

    if (!todo) return;

    //agr todo mn kuch value h to phr kia kren  to us ky leye addtodo ko call krna h

    //ab addtodo mn hm aik object pass kren gy Q ky array ky ander object h hmry todos jo context file  mn  hn is leye ab is mn hm values pass kren gy id: Date.now(), hm ny is leye ni di Q ky app.js mn addTodo mn dy rakhi h agr whn ni deani to phr hm yhn dy dean gy ab hm add kren gy object mn values or hn todo:todo ki jagha new syntax h ky andr agr ap ki filed or value ka name same h to hm sirf todo b likh skty hn

    addTodo({ todo, completed: false });

    //now kia krna h ky deakhyea jo hmra filed h add wala jo todo ly ky aya h to us field ky ander b to todo likha hua ho ga to us ko b gab kr deaty hn Q ky wo is field sy hi to value ly raha ho ga to aik bar addTodo to ho gya ab kia kro setTodo ko call kr lo or value empty kr do jis sy input field empty ho jy gi

    setTodo("");
  };

  //💢💢💢💢💢💢 step # 4💢💢💢💢💢💢

  //ab hm inputfild mn chnageing kren gy

  //1) form ky bad onsubmit use kren gy or is mn value hmra function ka name likh dean gy 'add'

  //2) give value to input is " todo"
  //3)agr todo mn kuch b change aye to onchange lgana h or is mn jo b event h us event sy hm setTodo ko call krwa lean gy  or us mn hm value dean gy e.target.value
  //4)add button py kuch b ni deana Q ky h type submite h automatically submit hoo jy ga

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

//💢💢💢💢💢💢 step # 5💢💢💢💢💢💢

//now we go to our TodoItem.jsx fileand explore it

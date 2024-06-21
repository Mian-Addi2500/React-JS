//is file ko explore krny sy phly mian.jsx mn line number 100 sy ly ky line number 20 tk  study karen  or us ky bad yhn py is file ko study kren
import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return (
    //axha agr hmen is component mn us {userid} ka access mil gia h to kia hm directly is thra ${userid} kr ky access kr skty hn jb h hn liken us ky leye kuch step follow krny prty hn

    //axha dekhyea kbhi b React sy confiuse mt hona Q ky React Hawa mn kuch ni kr deata Whn py VALUES ati hn jati hn {Method sy Prop sy} pass ki jati hn aesy hawa mn ni aati hn

    // 1️⃣) yhn py hmen RRDom sy aik method milta h is value ko pass kreny ky leye jo h  import { useParams } from "react-router-dom";

    // 2️⃣) ab ya mil hi gya h to hmen yad h ky hm ny b kuch isi trha ky method bny thy {custom Hooks} mn to kuch usi thra hi ka kam h ky hm [const { userid } = useParams();]ky  zarye sy us id ko access kr len gy ab hm jhn mrzi aye is variable ko use kr skty hn

    //Imp:⭕ jo b path mn hm ny {user/:} bad id name likha h yhn py b wohi use krna h ⭕

    <div className="bg-gray-600 text-white text-3xl text-center p-4">
      User : {userid}
    </div> // ab ya ni h ky is ky ander value kia aa rhi h value us ky ander {number} b aa skta h {user name} b aa skta h but jo b URL mn aye ga wo hm ko access mil jy ga

    //ab us ki base py ap use show krwana chty hn ya koi database call krwana chty hn whn sy info lina chty hn ya sb ap py h

    //to ya ho gya hmra basic kam ky kis thra sy dynamic data lia jata h
  );
}

export default User;

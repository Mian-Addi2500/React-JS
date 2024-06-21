//ab ya jo context h na abhi hm 2 files(2 parts) ky ander banen gy break kr ky Q ky{ user context} h or ya context isi thra dekhyea {logIn}  ka b context ho skta h {product, crat} wagera ka b context ho skta h multiple context hm bna skty hn

//🎢🎢🎢🎢 Part # 1  🎢🎢🎢🎢

//1st step
import React from "react";

//2nd Step

//ab hmen aik context bnana h or ya khn sy mily ga isi React sy hi hmen mil jata h jb hm {React} likh ky {.} lgaty hn to hmen {React.creatContext} mil jy ga

//ab ya kia h aik method h jis thra useEffect wagera method hoty thy wesa aik method h

//ab is ko store kr lo aik variable ky ander

const UserContext = React.createContext();

// jb store kr lia aik vraiable mn ab us variable ko output mn throgh kr do

export default UserContext;

// End of part # 1

//ab kia hota h ky jesy hi hm ny {Context} bnaya to {Context} kia hota h hmen aik mager chez dy ga {Provider} Q ky {Context} h kia hmen variable provide hi to kr rhaa h to har aik context aik {provider} hota h to {userContext} b apny ap mn aik {provider} h

//hm kia kren gy end of the is ko aik raper lgaen gy jesy ky hmen ny diakha h ky kai bar hm {fragment} ko use krty hn as a raper {<></>}aesy. To ab hm is ko use kesy kren gy ya  dekhyea !

//ab hm kia kren gy jitny b hmry pass component hn for example hm alg alg components bna rhy hn

/*
<>
  // ya hmra login ka component ho gya
  <LogIn />
  //ya hmra [card] ho gya or us ky ander b hmry pass aik component hogya spoose  kren [Data]
  <Card>
    <Data />
  </Card>
</>;
*/

//hum in sbhi ko rap krwa dean gy hmray us user Context sy kuxh is trha sy Q ky {context} jb hmra aik bar bn gya to is {context} ky sath aik {provider} b bnana prta h {provider} Q jo ky data provide kry ga us ko use is thra sy kren gy or ya sb kam hm {userContextProvider.jsx} file mn kren gy Q ky {Provider} alg sy new file mn bny ga

/*
<userContext>
  <LogIn />
  <Card>
    <Data />
  </Card>
</userContext>;
*/

//to jesy hi mn ny is ko rap krwa dia is trha sy to kia ho ga ky ya bn jy ga aik {provider} provider sy mera mtlb h ab jitny b components is ander hn un sary components ko is Golbel {const userContext = React.createContext();} userContext ka access mil jy ga

//ab context kia h {context } ko aik {globel variable} ki thra hi mano is sy ziada or kuch ni h

//is ky bd hmen kia krna pry ga aik {provider } b bnan prta h is ko banay ky 2 tareky hoty hn abhi hm 1st way deakhty hn phr is ka short way b deakhen gy

//is ky leye hm apny context ky folder mn aik new file bnaen gy {userContextProvider.jsx} ky name sy

//now go to userContextProvider.jsx file for further discussion

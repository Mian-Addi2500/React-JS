//In files mn wesy to hmen react import kreny ki zarort h ni is leye hm ni kren gy

//To is mn hm 2 chezen import kren gy { createContext , useContext } wesy to hm project 8 mn { React.createContext } use kr rhy thy wo b thk h us aproch or direct approch khetyh hn, but hm phly b import kr skty hn 2uno approches same hn koi farq ni h

import { createContext, useContext } from "react";

//ab hm ny whn py p#8 mn  {createContext} method ko aesy varaiable mn store kia tha        {const UserContext = React.createContext();} or us ky bad hm us ko kuch is thra sy export kr rhy thy {export default UserContext;}

//but is mn hm varaible ko bna ky apna context us mn store krwa ky  directly  aik hi line mn export b kr dean gy

//hm ny deakha tha p#8 mn ky hmra {createContext()} mn us time hm us mn koi b value ni dy rhy thy liken hm yhn py actullaly mn {Default} value dal skty hn

//ab deakhty hn kis thra sy dali ja skti h value {createContext()} mn wo b deakhty hn liken ya thora sa diff seneriou h like same h p#8 wala hi but approch diff h jesyy hm ny {RRdom} ka concept 2 approches sy deakha tha same asey hi ya kam b 2 approches sy ho ga

//to {createContext()} ko jb ap ky {Context} bny ga yani Initiall jo hmri State ho gi to whn py b hm kuch values dy skty hn ky {context} jb phli bar bny to us ky ander kia kia values jo hn wo Already fead hn , jo hm ny p#8 lia tha whn py hm ny koi b value ni di thi {createContext()} ky ander liken yhn py mn chata hn ky mery {createContext()} mn deafult aik {} object present ho or

export const ThemeContext = createContext({
  //object ky ander hmry pass 1 to hoga {themeMode} or us ki value hogi {"light"}

  //Q ky mn chata hn agr koi b jb b {ThemeMode} contact kry or agr  directly call dy ga us {ThemeMode} to Q k mn ny us ky ander koi value add hi ni ki to kuch ni ho ga us ky ander or crash ho jy ga ap ka app , ya to {null} aye ga ya phr kuch na kuch krna pry ga to mn chata hn hr br user ko jb b  theme set krni ho at least aik default variable whn py ho to is leye hm ya{themeMode: "light",} value dy dean gy

  themeMode: "light",

  //us ky bad mn kia chata hn ky us ky pass aik ya {darkTheme} name ka function us ky pass availabe ho or ya fuction krta kia h kuch b ni krta h just aik function h abhi hmry pass ya

  darkTheme: () => {},

  //isi thra hmry pass aik lightTheme ka b fuction ho wesy to hm aik hi fuction sy kam kr skty thy {toggle} krwa ky but mn yhn py 2 use kr leata hn

  lightTheme: () => {},

  //ab jb b koi is {Theme} Context ko call kry ga to hmen aik {themeMode}  mil jy ga or ya 2 method b mil jaen gy,

  //ab shi sy clear ho ga ky jo hm p#8 mn state use kr rhy thy {const [user, setUser] = useState(null);} to wo b to aik varaiable tha or aik function tha but ya zarori ni h ky hm {State} jo ky agr p#8 ki thraa banen to kuch is thara sy ho gi {const [themeMode , setThemeMode] = useState('light)}, hi dean hm agl agl varaiable or methods b dy skty hn koi b issue ni h ya dono concept chlty hn
});

//ab hm ny already us ko to export kr dia oper ab kia export kr rhy hn Sir!

//hm yhn py themeProvider ko export kren gy but hm to provider alg file(class) mn likhty hn na ? ni zarori ni h, kai log jo hn na {ThemeContext.Provider} yahen sy hi export kr deaty hn

//yhn sy export krny ka  kia faida h kuch ni h syntex h or ya sirf alg alg tareky ky stlye hn bs

export const ThemeProvider = ThemeContext.Provider;

//ab itna hi nhi, hm chyean to hm yhn py apny custom hooks b bna skty hn jo ky aksar loog bnaty hn

//create custom hook

//hook ko b export krna prta h or custom hook apny ap mn aik function hi h to hm function bnaty hn or un ky sath hm {use} key word lgtay hn in our case our hook name is {useTheme}

//axha useTheme krta kia h

export default function useTheme() {
  //ya krta kuch khash h ni ya hm ko aik return krta h {useContext}
  //ab useContext mn context b to deana prta h na, ji isi leye to import kia tha isy or is mn hmra jo context h ya{ThemeContext} jy ga
  return useContext(ThemeContext);

  //to ab hmra hook kia kr rha h ky hm ny p#8 mn deakha tha ky hm jo b component ly rhy thy jo context ko use kr rhy thy un sb mn hmen {useContext} b or apna Context jo hm ny bnaya tha {userContext} b wo import krny pr rhy thy alg alg sy to ab kia h ky hmen ya krny ki zarort ni h

  //Q ky ya Context yhen py hi hmry hook mn set ho gya h to mujhy kia krna h ky bs yhn  sy sirf mujhy apna yhi custom hook hi to import krna h or {useTheme} jo hmra custom hook h directly mujhy directly {useContext} ky ander {ThemeContext }use kr ky hmen   {themeMode: "light",} or 2uno methods or jo b values hm use krhy hn sub ka access dy dey ga easyly

  //to ya b aik coding structure h jo kafi log use krty hn
}

//to deakhen {ThemeProvider} mn ly loun ga commponents ko rap kr dn ga is mn kam ho jy ga mera

//agr kbhi b mujhy apny {themeContext} ki values ka access chyea ho ga to mn {useTheme} use kr ln ga  in values  {themeMode: "light",  darkTheme: () => {},  lightTheme: () => {},} mn sa jis b value ka access chyea us ko mn access kr ln ga

//kam wohi ho rha h liken ya isi leye Part # 2 mn kha gya h ky yhn sy chezen thori c complex hn jo ni smhjai jaten aksar jb ap bhot sary passy dey dety hn tb b 😅

//ab deakha ya sara kam hm ny aik hi file mn kr dia or aksar production code mn ya aik hi file mn sara kam kia jata h Q ky ziaya better approch h

//Hitesh Sir recomend this approch

//now ab hmen krna kia h ab hm phly sedhy jaty hm app.jsx ky ander or apny sary components ko rap kr dety hn {ThemeProvider} mn is thra sy  <ThemeProvider>  </ThemeProvider>

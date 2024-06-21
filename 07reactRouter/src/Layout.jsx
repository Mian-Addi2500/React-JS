//agr hm cheyen to ya ka ya sara kam hm app.jsx mn b kr skty hn liken hm yhn py kr lety hn abhi
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    //is mn hm header or footer components ko add kr dean gy

    // now I want ky mn dyanimacially chezeoun ko pass kr dn

    // is kam ky leye hmen React-router-Dom sy aik intersting chz milti h jis ka name h {outlet}

    // ya {outlet} kia kry ga ky is {layout} ko jo hm ny {header or footer} wala bnaya h as a base use kr ly ga or is ky andr ap jo b chzen dean gy oper ka ya nechy ka ya jhn py b hm dean gy wo same hi rkhy ga

    // ab jhn py b hm {outlet} pass kr dean gy whn py chezen chnge hoti rhen gi mean in our case hm ny {outlet} ko {header or footer} ky center mn dia h to {hear or footer} same rhy ga liken is ky ander jhn {outlet} dia h whn chezen change hn gi

    //ab hm ny jesa b apni mrzi ka layout bnaya h us ko b use krny ka aik sentex h aesa ni hota ky bs ja ky khen py b use kr lo is ko ya is trha ni hota acctually mn hmen {index} file ko btana pry ga ky deakho mn aik {layout} use kr rha hn or us ky andr dy rha hn sara kuch Q ky {routing} ho kesy rhi h {home} ky ander {about Us} h or {home} ky ander {Contact us} h to nesting to ho hi rhi h {/} ky ander h sb to isi thra py us ko kesy deakty hn wo b hm yhn py discuss krty hn
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

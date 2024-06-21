import React from "react";
//jesy hm react install krty hn to hmen hooks ki fuctionality milty h jo hm import kr leyty hn isi thra hi react-router-dom b hmen kuch chzean import ky leye diata h i.e Link and NavLink
import { Link, NavLink } from "react-router-dom"; // ab Link or NavLink mn diff kia h hn to ya 2uno almost same but {NavLink } hmen thory sy or featuchers functionalities milti hn
// 💥{Link} ko hm use krty hn {a} tag ki jgha jsx mn Q ky jb b {a}tag hm use krty hn to jesy hi us py click hoga page pora reload ho jy ga jo ky react mn hm ny ni krna is leye {Link } use krty hn
//agr ya sb ho rha tha to nav link ki kia zarort pesh aai
// 💥 {NavLink} hmen additional featuchers deata h ab kia addtionall wo deakhty hn
//yhn hm ny fuction ko bna b lia h or export b aik sath hi kr dia h
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/" //this {/} mean we will go to home afther click on it
                  //hm nav link mn kai bar aesi classes change krty hn Q ky mn chta hn jesy hm home py hn or wo highlighted h to home ko kesy pta ky abhi user home py h {/}home kr ky ya phr about py ja rha h to [/about] py kesy jy us hisab sy color Highlighting kesy kroun us ky leye one of the best way h ky hm CallBack ky ander classes likyea or us ky bad callback ki classes ko menipulate kesy krna h wo deakthy hn

                  //jb b hm NavLink lethy hn us ky andr jo hm class name mn callback use kr rhy hn to jb b aesy {()=>``} likhty hn to hmry pass directly access hota h aik variable ka aesy ({isActive})=>`` ya is variable ka name h milta h isi thra hmen {isPanding} b milta h

                  //ab ya {isActive} mil giya to is ko use kia ja skta h or hm thori c classess manipulate kr rhy hn Q ky deakhen ho kia rha h actullay mn text ka color hi to change ho rha h jesy about wagera py hover krty hn {gray sy red} ho rha h color

                  //ab hm classes mn kia kr skty hn apna variable inject kr skty hn ${isSctive} or jb hm inject kren gy to automatically ya {NavLink} ap ko bta dy ga ky kia ap jis page py hn wo {Active} page h kia mtlb hm {/about} py hn kia ya URL sy matching krta h hmri ky URL mn agr {about} h to ap Active ho us page ky andr to agr {isActive ? "":""} ya condition lga ky apni classess ko idher hi set kr dean gy
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

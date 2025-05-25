import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/toogleSlice";
import Sidebar from "./component/sidebar";

const Header= ()=>{
  const dispatch = useDispatch();
  const toggleopen = useSelector((store)=> store.toggle.isOpen);

  const togglefunc=()=>{
   dispatch(toggleMenu()  )
  }
    return ( 
     
     
        <div className="bg-black text-white p-10 display flex justify-between items-center">
          {toggleopen &&   <Sidebar/>}
            
             

          <div onClick={ togglefunc}>
          <img className="w-15 bg-amber-400 " src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"/>
        </div>
      <div>
        <span className="bg-gray-400  w-35 px-4 py-2" >PORTFOLIO</span>
      </div>
      <div>
        <ul display="flex" className="flex gap-2">
          <li className="bg-gray-400">
    <Link to="/home">HOME</Link>
  </li>
       
          <li className="bg-gray-400">
            <Link to= "/about">ABOUT</Link>
        </li>
          <li className="bg-gray-400">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
       
        {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Header/>}/>
        </Routes>
        </BrowserRouter> */}
        </div>
    )
}


export default Header;

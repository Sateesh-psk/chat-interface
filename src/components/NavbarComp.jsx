import React, { useState } from 'react'
// importing the logos used in navbar
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

function NavbarComp() {
  // creating state variable to manage the options in navbar
  const [options,SetOptions]=useState(false);
  return (
    <div className=' p-4 grid grid-cols-10'>
      {/* logo present on the left side of navbar and on lcikc of the logo prints the screen */}
      <h2 onClick={()=>{window.print()}} className=' text-2xl tracking-wider text-slate-600'>Gen Ai</h2>
      <div className=' col-start-9'>
        {/* button present on the right side of the navbar for more options */}
        <button className=' w-2/3 transition-all  py-1 border-2 border-slate-500 hover:border-slate-400 bg-slate-400 rounded-xl'
          onClick={()=>{SetOptions(!options)}}
        >Sateesh</button>
        {options && (
          <div className={` grid gap-3 rounded-lg absolute mt-1 w-1/8 bg-slate-600 text-white p-2 flex-1`}>
            {/* different options that appear on the button click */}
            <button className=' hover:text-slate-300 px-2 grid grid-cols-6 gap-1'>
              <CgProfile className=' scale-125 h-6 col-span-1' />
              <h2 className='  col-end-6 tracking-wider col-span-4'>Profile</h2>
            </button>
            
            <button className=' hover:text-slate-300 px-2 grid grid-cols-6 gap-1'>
              <IoMdSettings className=' scale-125 h-6 col-span-1' />
              <h2 className=' tracking-wider col-span-4'>Settings</h2>
            </button>
            
            <button className=' hover:text-slate-300 px-2 grid grid-cols-6 gap-1'>
              <LuLogOut className=' text-red-400 scale-125 h-6 col-span-1' />
              <h2 className=' tracking-wider col-span-4'>Log Out</h2>
            </button>
          
          </div>
        )}
      </div>
    </div>
  )
}

export default NavbarComp
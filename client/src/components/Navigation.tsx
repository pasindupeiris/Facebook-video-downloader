import React from 'react'
import Logo from '../asset/Images/logo-r.png'

const Navigation = () => {
  return (

    <div className='w-[100%] h-[12vh] bg-[#275eea]'>

      <nav className='w-[100%] h-[100%] flex items-center justify-between px-12'>

        <div className=" ">
          <h1 className=' text-white text-2xl uppercase font-bold '><img src={Logo} alt="" width={150} /></h1>
        </div>

        <div className="menu p-1">

          <ul className=' flex items-center justify-around w-[100%]'>
            <li>How To Use</li>
            <li>Contact Us</li>
          </ul>


          {/* mobile-view-button
          <label className="none flex-col gap-2 w-8">

            <input className="peer hidden" type="checkbox" />
            <div className="rounded-xl h-[4px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
            <div className="rounded-xl h-[4px] w-full bg-white duration-500 peer-checked:-rotate-45"></div>
            <div className="rounded-xl h-[4px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>

          </label> */}

        </div>

      </nav>

     


    </div>
  )
}

export default Navigation
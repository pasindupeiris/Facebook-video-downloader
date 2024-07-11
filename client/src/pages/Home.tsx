import React from 'react'
import Logo from '../asset/Images/logo.png'

const Home = () => {
    return (
        <div className='flex items-center justify-center w-[100%] h-[70vh]'>

            <div className="content-box">

                <div className="grid items-center justify-center justify-items-center">
                    <img src={Logo} alt="Logo" className="w-[240px]" />
                    <h3 className=' font-bold text-xl mt-2'>Facebook Video Downloader</h3>
                    <p className=' text-sm font-semibold text-slate-400 mt-1'>Download Facebook Videos Online</p>
                </div>


                <div className="flex items-center justify-center mt-4">

                    <div className="rounded-md p-5">
                        <div className="flex border-2 border-[#275eea] rounded-md">

                            <div className="flex w-10 items-center justify-center rounded-tl-md rounded-bl-md  bg-white p-5">
                                <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-[#275eea] transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>

                            <input type="text" className="w-[500px]  bg-white p-4 text-base font-semibold outline-0  " placeholder="Enter Link Here..." id="" />
                            <input type="button" value="Download" className="bg-[#275eea] p-2 w-[120px] text-white font-semibold hover:bg-blue-800 transition-colors" />

                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Home
import React from 'react'
import { BiQuestionMark } from "react-icons/bi";

const Howto = () => {
    return (

        <div id='new' className='w-[100%] xl:h-[100vh] md:h-[90vh] sm:h-[90vh] xsm:h-[70vh] bg-slate-100 flex justify-center items-center justify-items-center'>


            <div className='w-[350px] h-[450px] rounded-md border border-[#181e2d] overflow-hidden'>
                <div className='bg-[#181e2d] w-[100%] h-10 '>
                    <p className='text-white flex items-center justify-start p-2 font-semibold text-sm'>How to Use FSAVE.net <BiQuestionMark className=' text-xl font-bold' /></p>
                </div>

                <div className='w-[100%] h-[100vh] overflow-auto'>

                    <div className="h-[120vh] w-[100%] p-2">

                        <div className=" w-[100%] h-[auto] p-4 bg-[#275eea] rounded-md">
                            <h4 className='font-bold uppercase text-white'>Step 01</h4>
                            <p className='mt-2 font-semibold text-sm'>On your Facebook feed or timeline Click Share under any video then 'Copy Link'.</p>
                        </div>
                        
                        <div className=" w-[100%] h-[auto] p-4 bg-[#275eea] rounded-md my-3">
                            <h4 className='font-bold uppercase text-white'>Step 02</h4>
                            <p className='mt-2 font-semibold text-sm'>Go to FSAVE.net. Then paste the URL and Click 'Download'</p>
                        </div>

                        <div className=" w-[100%] h-[auto] p-4 bg-[#275eea] rounded-md my-3">
                            <h4 className='font-bold uppercase text-white'>Step 03</h4>
                            <p className='mt-2 font-semibold text-sm'>Click on "Download normal quality video" or "Download HD video" (if available) to start downloading the video.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Howto
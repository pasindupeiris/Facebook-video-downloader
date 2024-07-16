import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";




const Back = () => {
    return (
        <div className='w-[100%] h-[auto] xl:px-4 lg:p-4 md:p-4'>

            <a href="/" className='inline-flex items-center justify-center bg-[#181e2d] text-white p-2 rounded-sm  font-bold'>
            <IoArrowBackCircleOutline className=' text-xl font-bold' />
            </a>

        </div>
    )
}

export default Back
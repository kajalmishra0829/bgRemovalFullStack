import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    return (
        <div className='mx-4 lg:mx-44 py-40 xl:py-40'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 pb-1 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Steps to remove <br /> background in seconds</h1>

            <div className='flex items-start flex-wrap gap-6 mt-16 xl:mt-24 justify-center'>

                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300'>
                    <img className='max-w-9' src={assets.upload_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Upload Image</p>
                        <p className='text-sm text-neutral-500 mt-1'>Upload an image from your device to <br /> get started with background removal.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300'>
                    <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Remove Background</p>
                        <p className='text-sm text-neutral-500 mt-1'> Our AI instantly detects and removes <br /> the background with precision.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-300'>
                    <img className='max-w-9' src={assets.download_icon} alt="" />
                    <div>
                        <p className='text-xl font-medium'>Download Image</p>
                        <p className='text-sm text-neutral-500 mt-1'>Preview the result and download your <br /> background-free image in seconds.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Steps
import React from 'react'

const Footer = () => {
    return (
        <footer className='min-h-[20px] w-[100%] py-3 bg-black'>
            <div className='text-white px-[2px] xl:px-[0px] w-[100%] xl:w-[65%] mx-auto flex justify-between text-sm md:text-lg'>
                <div>&copy; FitLife | All Rights Reserved By <span className='text-[#ff4500]'>Pragye Nawani</span> </div>
                <div className='flex gap-4'>
                    <div className='flex gap-2 items-center'>
                        <div className='h-[6px] w-[6px] md:h-[10px] md:w-[10px] rounded-full bg-[#ff4500]'></div>
                        <div className='text-white text-sm md:text-lg'>Privacy Policy</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='h-[6px] w-[6px] md:h-[10px] md:w-[10px] rounded-full bg-[#ff4500]'></div>
                        <div className='text-white text-sm md:text-lg'>Terms & Condtions</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

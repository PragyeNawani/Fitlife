import React from 'react'

const Footer = () => {
    return (
        <footer className='min-h-[20px] w-full py-4 md:py-5 xl:py-3 bg-black'>
            <div className='text-white px-4 md:px-6 xl:px-0 w-full xl:w-[65%] mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center text-xs md:text-sm xl:text-lg text-center md:text-left'>
                <div>&copy; FitLife | All Rights Reserved By <span className='text-[#ff4500]'>Pragye Nawani</span> </div>
                <div className='flex gap-3 md:gap-4 flex-wrap justify-center'>
                    <div className='flex gap-1.5 md:gap-2 items-center'>
                        <div className='h-[6px] w-[6px] md:h-[8px] md:w-[8px] xl:h-[10px] xl:w-[10px] rounded-full bg-[#ff4500] flex-shrink-0'></div>
                        <div className='text-white text-xs md:text-sm xl:text-lg hover:text-orange-600 cursor-pointer transition-colors'>Privacy Policy</div>
                    </div>
                    <div className='flex gap-1.5 md:gap-2 items-center'>
                        <div className='h-[6px] w-[6px] md:h-[8px] md:w-[8px] xl:h-[10px] xl:w-[10px] rounded-full bg-[#ff4500] flex-shrink-0'></div>
                        <div className='text-white text-xs md:text-sm xl:text-lg hover:text-orange-600 cursor-pointer transition-colors'>Terms & Condtions</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
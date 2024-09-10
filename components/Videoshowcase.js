import React from 'react'

const Videoshowcase = () => {
    return (
        <section className='w-[100%] h-[130px] md:h-[200px] xl:h-[300px]'>
            <div className='relative  w-[80%] h-[200px] md:h-[400px]  xl:h-[600px] mx-auto'>
                <div className='xl:videobanner'>
                <img src="video-banner.jpg" className='h-[230px] md:h-[400px] xl:h-[550px] w-[100%] rounded-xl object-cover object-left xl:object-center' alt="" />
                </div>
                <div className='absolute z-[2] h-[230px] md:h-[400px] xl:h-full w-full flex flex-col gap-10 items-center justify-center top-0'>
                    <div className='text-white text-xl xl:text-6xl font-bold'>Explore Fitness Life</div>
                    <div className='bg-[#ff4500] rounded-full h-[40px] w-[40px] xl:h-[100px] xl:w-[100px] pt-[30px] pl-[3px] playani'>
                    </div>
                    <div className='absolute top-[104px] md:top-[190px] xl:top-[275px] bg-[#ff4500] rounded-full h-[30px] w-[30px] xl:h-[80px] xl:w-[80px] pt-[9px] pl-[1px] xl:pt-[23px] xl:pl-[3px] z-[3]'>
                    <div className='h-[10px] w-[10px] xl:h-[25px] xl:w-[25px] mx-auto'><svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></div>
                    </div>
                    <div className='text-white text-sm xl:text-2xl underline font-semibold'>WATCH MORE</div>
                </div>
            </div>
        </section>
    )
}

export default Videoshowcase

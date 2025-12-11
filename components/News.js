import React from 'react'

const News = () => {
    return (
        <section id="blog" className='min-h-[90%] w-full overflow-hidden pt-24 md:pt-32 xl:pt-[150px]'>
            <div className='blogsholder w-full max-w-[300px] md:max-w-[600px] xl:max-w-[1200px] h-fit xl:h-[900px] flex flex-col gap-8 md:gap-10 items-center mx-auto pb-8 md:pb-12 xl:pb-0 px-4 md:px-0'>
                <div className='text-orange-600 text-2xl md:text-3xl xl:text-4xl bg-red-700 bg-opacity-25 w-fit px-4 md:px-5 py-2 rounded-xl'>Our News</div>
                <div className='text-black font-bold text-3xl md:text-5xl xl:text-6xl text-center'>Latest Blog Feed</div>
                <div className='newsitem flex flex-col xl:flex-row gap-6 md:gap-8 xl:gap-[20px] w-full overflow-hidden'>
                    <div className='rounded-2xl bg-white w-full max-w-[300px] md:max-w-[380px] mx-auto h-auto md:h-[580px] xl:h-[560px] overflow-hidden border-2 border-gray-300 hover:shadow-xl transition-shadow'>
                        <div className='overflow-hidden w-full h-[200px] md:h-[220px] xl:h-[230px] relative'><img src="blog-1.jpg" className='w-full h-full object-cover hover:scale-110 transition-transform duration-1000' alt="" /> <div className='absolute bottom-0 bg-[#f83a30] py-3 md:py-4 px-5 md:px-7 text-white font-bold text-base md:text-lg xl:text-xl'> 7 JULY 2022 </div></div>
                        <div className='w-full'>
                            <div className='pt-6 md:pt-7 xl:pt-8 px-4 md:px-5 text-xl md:text-xl xl:text-2xl font-bold'>Going to the gym for the first time</div>
                        </div>
                        <div className='text-gray-600 text-base md:text-lg py-3 md:py-4 px-4 md:px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, velit.</div>
                        <div className='px-4 md:px-5 w-fit text-lg md:text-xl underline text-[#f83a30] font-semibold underline-offset-4 pb-4 md:pb-5 cursor-pointer hover:text-red-700 transition-colors'>
                            READ MORE
                        </div>
                    </div>
                    <div className='rounded-2xl bg-white w-full max-w-[300px] md:max-w-[380px] mx-auto h-auto md:h-[580px] xl:h-[560px] overflow-hidden border-2 border-gray-300 hover:shadow-xl transition-shadow'>
                        <div className='overflow-hidden w-full h-[200px] md:h-[220px] xl:h-[230px] relative'><img src="blog-2.jpg" className='w-full h-full object-cover hover:scale-110 transition-transform duration-1000' alt="" /> <div className='absolute bottom-0 bg-[#f83a30] py-3 md:py-4 px-5 md:px-7 text-white font-bold text-base md:text-lg xl:text-xl'> 7 JULY 2022 </div></div>
                        <div className='w-full'>
                            <div className='pt-6 md:pt-7 xl:pt-8 px-4 md:px-5 text-xl md:text-xl xl:text-2xl font-bold'>Parturient accumsan cacus pulvinar magna</div>
                        </div>
                        <div className='text-gray-600 text-base md:text-lg py-3 md:py-4 px-4 md:px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, velit.</div>
                        <div className='px-4 md:px-5 w-fit text-lg md:text-xl underline text-[#f83a30] font-semibold underline-offset-4 pb-4 md:pb-5 cursor-pointer hover:text-red-700 transition-colors'>
                            READ MORE
                        </div>
                    </div>
                    <div className='rounded-2xl bg-white w-full max-w-[300px] md:max-w-[380px] mx-auto h-auto md:h-[580px] xl:h-[560px] overflow-hidden border-2 border-gray-300 hover:shadow-xl transition-shadow'>
                        <div className='overflow-hidden w-full h-[200px] md:h-[220px] xl:h-[230px] relative'><img src="blog-3.jpg" className='w-full h-full object-cover hover:scale-110 transition-transform duration-1000' alt="" /> <div className='absolute bottom-0 bg-[#f83a30] py-3 md:py-4 px-5 md:px-7 text-white font-bold text-base md:text-lg xl:text-xl'> 7 JULY 2022 </div></div>
                        <div className='w-full'>
                            <div className='pt-6 md:pt-7 xl:pt-8 px-4 md:px-5 text-xl md:text-xl xl:text-2xl font-bold'>Risus purus namien parturient accumsan cacus</div>
                        </div>
                        <div className='text-gray-600 text-base md:text-lg py-3 md:py-4 px-4 md:px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, velit.</div>
                        <div className='px-4 md:px-5 w-fit text-lg md:text-xl underline text-[#f83a30] font-semibold underline-offset-4 pb-4 md:pb-5 cursor-pointer hover:text-red-700 transition-colors'>
                            READ MORE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
import React from 'react'

const News = () => {
    return (
        <section id="blog" className='min-h-[90%] w-[100%] overflow-hidden pt-[150px]'>
            <div className='blogsholder w-[300px] md:w-[600px] xl:w-[1200px] h-fit xl:h-[900px] flex flex-col gap-10 items-center mx-auto pb-[30px] xl:pb-[0px]'>
                <div className='text-orange-600 text-4xl bg-red-700 bg-opacity-25 w-fit px-5 py-2 rounded-xl'>Our News</div>
                <div className='text-black font-bold text-6xl'>Latest Blog Feed</div>
                <div className='newsitem flex flex-col xl:flex-row gap-[20px] w-[100%] overflow-hidden'>
                    <div className='rounded-2xl bg-white w-[300px] md:w-[380px] mx-auto h-[600px] xl:h-[560px] items overflow-hidden border-2 border-gray-300'>
                        <div className='overflow-hidden w-[300px] md:w-[380px] h-[230px] relative'><img src="blog-1.jpg" className='w-[300px] md:w-[380px] h-[230px] object-cover  hover:scale-110 hover:transition-all hover:duration-1000' alt="" /> <div className='absolute bottom-0 bg-[#f83a30] py-4 px-7 text-white font-bold text-xl'> 7 JULY 2022 </div></div>
                        <div className='w-[300px] md:w-[380px]'>
                            <div className='pt-8 px-5 text-2xl font-bold'>Going to the gym for the first time</div>
                        </div>
                        <div className='text-gray-600 text-lg py-4 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, velit.</div>
                        <div className='px-5 w-fit text-xl underline text-[#f83a30] font-semibold underline-offset-4'>
                            READ MORE
                        </div>
                    </div>
                    <div className='rounded-2xl bg-white w-[300px] md:w-[380px] mx-auto h-[600px] xl:h-[560px] items overflow-hidden border-2 border-gray-300'>
                        <div className='overflow-hidden w-[300px] md:w-[380px] h-[230px] relative'><img src="blog-2.jpg" className='w-[300px] md:w-[380px] h-[230px] object-cover  hover:scale-110 hover:transition-all hover:duration-1000' alt="" /> <div className='absolute bottom-0 bg-[#f83a30] py-4 px-7 text-white font-bold text-xl'> 7 JULY 2022 </div></div>
                        <div className='w-[300px] md:w-[380px]'>
                            <div className='pt-8 px-5 text-2xl font-bold'>Parturient accumsan cacus pulvinar magna</div>
                        </div>
                        <div className='text-gray-600 text-lg py-4 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, velit.</div>
                        <div className='px-5 w-fit text-xl underline text-[#f83a30] font-semibold underline-offset-4'>
                            READ MORE
                        </div>
                    </div>
                    <div className='rounded-2xl bg-white w-[300px] md:w-[380px] mx-auto h-[600px] xl:h-[560px] items overflow-hidden border-2 border-gray-300'>
                        <div className='overflow-hidden w-[300px] md:w-[380px] h-[230px] relative'><img src="blog-3.jpg" className='w-[300px] md:w-[380px] h-[230px] object-cover  hover:scale-110 hover:transition-all hover:duration-1000' alt="" /> <div className='absolute bottom-0 bg-[#f83a30] py-4 px-7 text-white font-bold text-xl'> 7 JULY 2022 </div></div>
                        <div className='w-[300px] md:w-[380px]'>
                            <div className='pt-8 px-5 text-2xl font-bold'>Risus purus namien parturient accumsan cacus</div>
                        </div>
                        <div className='text-gray-600 text-lg py-4 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, velit.</div>
                        <div className='px-5 w-fit text-xl underline text-[#f83a30] font-semibold underline-offset-4'>
                            READ MORE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News

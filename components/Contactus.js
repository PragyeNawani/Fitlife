import React from 'react'

const Contactus = () => {
    return (
        <section id="contact" className='min-h-[70%] w-[100%] contactsect overflow-hidden'>
            <div className='flex xl:gap-0 gap-5 flex-wrap w-[75%] mx-auto pt-[150px] justify-between xl:pb-0 pb-[20px]'>
                <div className="one flex flex-col gap-5 w-[300px] mx-auto md:mx-0 xl:w-[400px]">
                    <div className='text-white font-bold text-4xl flex items-center gap-2 justify-center md:justify-start'>
                        <img src="https://cdn-icons-png.flaticon.com/512/38/38464.png" alt="" className='w-[50px] h-[50px] invert-[1] rotate-90' />
                        FitLife
                    </div>
                    <div className='text-xl text-gray-400'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, ipsa?
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[60px] h-[60px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='orangered'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <div className='text-white font-semibold text-xl'>Monday - Friday</div>
                                <div className='text-gray-400 text-lg'>7:00Am - 10:00Pm</div>
                            </div>
                            <div>
                                <div className='text-white font-semibold text-xl'>Saturday - Sunday</div>
                                <div className='text-gray-400 text-lg'>7:00Am - 2:00Pm</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="two flex flex-col gap-5 w-[300px] mx-auto md:mx-0 xl:w-[200px]">
                    <div className='text-3xl text-white contactlinksect text-center md:text-left'>Our Links</div>
                    <ul className='text-gray-400 text-lg pt-[15px] flex flex-col gap-5'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Classes</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="two flex flex-col gap-5 w-[300px] mx-auto md:mx-0 xl:w-[350px]">
                    <div className='text-3xl text-white contactlinksect text-center md:text-left'>Contact Us</div>
                    <div className='flex flex-col gap-2 pt-[15px]'>
                        <div className='flex gap-2 items-center py-[5px]'>
                            <div className='h-[30px] w-[30px]'><svg xmlns="http://www.w3.org/2000/svg" fill='orangered' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg></div>
                            <div className='text-gray-400 text-xl w-[70%]'>1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</div>
                        </div>
                        <div className='flex gap-2 items-center py-[5px]'>
                            <div className='h-[30px] w-[30px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='orangered'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg></div>
                            <div className='text-gray-400 text-xl w-[70%] flex flex-col'>
                                <div>
                                    1800-121-3637
                                </div>
                                <div>
                                    +91 555 234-8765
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center py-[5px]'>
                            <div className='h-[30px] w-[30px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='orangered'><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></div>
                            <div className='text-gray-400 text-xl w-[70%] flex flex-col'>
                                <div>
                                    info@fitlife.com
                                </div>
                                <div>
                                    services@fitlife.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="two flex flex-col gap-5 w-[300px] xl:w-[300px] mx-auto md:mx-0">
                    <div className='text-3xl text-white contactlinksect text-center md:text-left'>Our Newsletter</div>
                    <div className='relative'>
                        <input type="email" name='email' className='border-none outline-none h-[60px] w-[100%] rounded-xl px-5' placeholder='Enter Email' />
                        <div className='h-[40px] w-[40px] rounded-xl bg-[#ff4500] absolute top-[10px] right-[5px] pt-[4px]'><div className='h-[20px] w-[20px] mx-auto'><svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></div></div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='h-[60px] w-[60px] bg-gray-500 bg-opacity-40 p-[15px] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></div>
                        <div className='h-[60px] w-[60px] bg-gray-500 bg-opacity-40 px-[15px] pt-[13px] pb-[15px] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></div>
                        <div className='h-[60px] w-[60px] bg-gray-500 bg-opacity-40 p-[15px] rounded-full'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='white'><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactus

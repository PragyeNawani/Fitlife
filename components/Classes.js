"use client"
import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Sample data - replace with your actual classesdata
const classesdata = [
  { id: 1, img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400', icon: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png', name: 'Yoga Class', occupied: 75 },
  { id: 2, img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400', icon: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png', name: 'Boxing', occupied: 60 },
  { id: 3, img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', icon: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png', name: 'CrossFit', occupied: 90 },
  { id: 4, img: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400', icon: 'https://cdn-icons-png.flaticon.com/512/2936/2936886.png', name: 'Pilates', occupied: 45 },
]

const Classes = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDesktop, setIsDesktop] = useState(false)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    const containerRef = useRef(null)

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1280)
        }
        checkDesktop()
        window.addEventListener('resize', checkDesktop)
        return () => window.removeEventListener('resize', checkDesktop)
    }, [])

    const totalSlides = isDesktop ? Math.ceil(classesdata.length / 3) : classesdata.length
    
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            nextSlide()
        }
        if (touchEndX.current - touchStartX.current > 50) {
            prevSlide()
        }
    }

    const getTransform = () => {
        if (isDesktop) {
            return `translateX(-${currentIndex * 100}%)`
        }
        return `translateX(-${currentIndex * 100}%)`
    }

    return (
        <section id="classes" className='min-h-[90%] w-full overflow-hidden classessect pt-24 md:pt-32 xl:pt-[350px] pb-12 md:pb-16 xl:pb-0'>
            <div className='classesholder w-full max-w-[320px] md:max-w-[400px] xl:max-w-[1200px] min-h-auto xl:min-h-[900px] flex flex-col gap-8 md:gap-10 items-center mx-auto px-4 md:px-0'>
                <div className='text-orange-600 text-xl md:text-3xl xl:text-4xl bg-red-700 bg-opacity-25 w-fit px-4 md:px-5 py-2 rounded-xl font-semibold'>Our Classes</div>
                <div className='text-white font-bold text-2xl md:text-4xl xl:text-5xl text-center xl:text-left px-2'>Fitness Classes For Every Goal</div>
                
                {/* Navigation and Cards Container */}
                <div className='relative w-full flex items-center gap-4'>
                    {/* Left Navigation Button */}
                    <button 
                        onClick={prevSlide}
                        className='hidden xl:flex absolute left-[-60px] z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-all duration-300 shadow-lg'
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Cards Container */}
                    <div 
                        ref={containerRef}
                        className='classesitem w-full overflow-hidden'
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div 
                            className='flex gap-2.5 md:gap-4 xl:gap-[20px] transition-transform duration-500 ease-out'
                            style={{ transform: getTransform() }}
                        >
                            {classesdata.map((val, index) => (
                                <div key={index} className='rounded-xl bg-white w-full max-w-[380px] md:max-w-[400px] xl:w-[calc(33.333%-14px)] h-auto md:h-[520px] xl:h-[500px] flex-shrink-0'>
                                    <div><img src={val.img} className='w-full h-[200px] md:h-[220px] xl:h-[230px] object-cover rounded-t-xl' alt={val.name} /></div>
                                    <div className='flex items-center w-full'>
                                        <div className='pt-6 md:pt-7 xl:pt-8 px-2'><img src={val.icon} className='border-r-[1px] border-r-gray-300 px-3 md:px-4 xl:px-5 h-[40px] md:h-[45px] xl:h-[50px]' alt="" /></div>
                                        <div className='pt-6 md:pt-7 xl:pt-8 px-3 md:px-4 xl:px-5 text-xl md:text-xl xl:text-2xl font-semibold'>{val.name}</div>
                                    </div>
                                    <div className='text-gray-600 text-base md:text-lg py-3 md:py-4 px-5 md:px-6 xl:px-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa ipsam esse. Nihil, sed sapiente.</div>
                                    <div className='w-[85%] mx-auto pb-4 md:pb-5'>
                                        <div className='flex justify-between text-sm md:text-base'>
                                            <div>Class Full</div>
                                            <div>{val.occupied}%</div>
                                        </div>
                                        <div className='h-[8px] md:h-[10px] rounded-2xl w-full bg-orange-500 bg-opacity-40 mt-2'>
                                            <div className='h-full bg-red-500 rounded-2xl' style={{width: `${val.occupied}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Navigation Button */}
                    <button 
                        onClick={nextSlide}
                        className='hidden xl:flex absolute right-[-60px] z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 transition-all duration-300 shadow-lg'
                        aria-label="Next slide"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                {/* Mobile Navigation Buttons
                <div className='flex xl:hidden gap-4 items-center'>
                    <button 
                        onClick={prevSlide}
                        className='bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-all duration-300 shadow-lg'
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className='bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-all duration-300 shadow-lg'
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div> */}

                {/* Indicator Dots */}
                <div className='w-full xl:w-fit'>
                    <div className='flex gap-2 justify-center items-center'>
                        {[...Array(totalSlides)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-[12px] md:h-[15px] rounded-full transition-all duration-300 cursor-pointer ${
                                    currentIndex === index 
                                        ? 'w-[40px] md:w-[60px] bg-red-500' 
                                        : 'w-[12px] md:w-[15px] bg-white bg-opacity-70 hover:bg-opacity-90'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Classes
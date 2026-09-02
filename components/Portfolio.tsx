import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

// Quote Icon component
const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
);

// Star rating icon
const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
    </svg>
);

// Elegant testimonial card without images
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white rounded-3xl shadow-sm border border-stone-200/80 p-8 sm:p-10 h-full flex flex-col justify-between transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-md text-right">
        <div>
            <div className="flex justify-between items-center mb-6">
                <QuoteIcon className="w-8 h-8 text-[#5B8276]/30" />
                <div className="flex text-[#D49A76] gap-1">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5" />
                    ))}
                </div>
            </div>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6 font-light">
                "{testimonial.content}"
            </p>
        </div>
        <div className="border-t border-stone-100 pt-4 mt-auto">
            <h3 className="text-lg font-bold text-stone-900">{testimonial.name}</h3>
            {testimonial.role && (
                <p className="text-sm font-medium text-[#5B8276] mt-0.5">{testimonial.role}</p>
            )}
        </div>
    </div>
);



// Icon components for carousel navigation
const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const Portfolio: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    
    // Refs for touch handling
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const isSwiping = useRef(false);

    const nextItem = () => {
        if (TESTIMONIALS.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    };

    const prevItem = () => {
        if (TESTIMONIALS.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    // Optional auto-slide every 6 seconds if not hovered
    useEffect(() => {
        if (isHovered || TESTIMONIALS.length <= 1) return;
        const timer = setInterval(() => {
            nextItem();
        }, 6000);
        return () => clearInterval(timer);
    }, [isHovered, currentIndex]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        isSwiping.current = false;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === 0) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = touchStartX.current - currentX;
        const diffY = touchStartY.current - currentY;
        
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
            isSwiping.current = true;
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!isSwiping.current) {
            touchStartX.current = 0;
            touchStartY.current = 0;
            return;
        }

        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX.current - touchEndX;
        const swipeThreshold = 40;

        // Flipped for RTL: swipe left (finger right to left) -> next; swipe right -> prev
        if (diffX > swipeThreshold) {
            nextItem();
        } else if (diffX < -swipeThreshold) {
            prevItem();
        }
        
        touchStartX.current = 0;
        touchStartY.current = 0;
        isSwiping.current = false;
    };
    
    // Header for Testimonials
    const sectionHeader = (
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-800">המלצות</h2>
            <p className="text-xl text-stone-600 mt-3 font-light">מילים חמות ממטופלים שליוויתי בתהליך</p>
            <div className="w-16 h-1 bg-[#C98A68] mx-auto mt-5 rounded-full"></div>
        </div>
    );

    return (
        <section id="portfolio" className="py-24 bg-[#F2EFEB] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                {sectionHeader}

                {/* Smooth Sliding Carousel Container */}
                <div 
                    className="relative flex items-center justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Prev Button (Right side in RTL) */}
                    <button 
                        onClick={prevItem}
                        aria-label="ההמלצה הקודמת"
                        className="hidden sm:flex z-20 items-center justify-center w-12 h-12 rounded-full bg-white text-stone-700 shadow-md hover:bg-[#5B8276] hover:text-white transition-all duration-300 transform -translate-x-3 hover:scale-110 shrink-0 border border-stone-200"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>

                    {/* Sliding Viewport */}
                    <div 
                        className="w-full overflow-hidden px-2 sm:px-4 py-4"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Sliding Track */}
                        <div 
                            dir="ltr"
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {TESTIMONIALS.map((item) => (
                                <div 
                                    key={item.id} 
                                    dir="rtl"
                                    className="w-full shrink-0 px-2 sm:px-4 flex justify-center"
                                >
                                    <div className="w-full max-w-2xl">
                                        <TestimonialCard testimonial={item} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button (Left side in RTL) */}
                    <button 
                        onClick={nextItem}
                        aria-label="ההמלצה הבאה"
                        className="hidden sm:flex z-20 items-center justify-center w-12 h-12 rounded-full bg-white text-stone-700 shadow-md hover:bg-[#5B8276] hover:text-white transition-all duration-300 transform translate-x-3 hover:scale-110 shrink-0 border border-stone-200"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Navigation Controls & Dots */}
                <div className="mt-8 flex items-center justify-center gap-6">
                    <button 
                        onClick={prevItem}
                        aria-label="ההמלצה הקודמת"
                        className="sm:hidden p-2.5 rounded-full bg-white text-stone-700 shadow-sm border border-stone-200 active:bg-[#5B8276] active:text-white transition"
                    >
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex space-x-3 rtl:space-x-reverse">
                        {TESTIMONIALS.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`עבור להמלצה ${index + 1}`}
                                className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#C98A68] w-8' : 'w-3 bg-stone-300 hover:bg-stone-400'}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={nextItem}
                        aria-label="ההמלצה הבאה"
                        className="sm:hidden p-2.5 rounded-full bg-white text-stone-700 shadow-sm border border-stone-200 active:bg-[#5B8276] active:text-white transition"
                    >
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
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
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 h-full flex flex-col justify-between transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-xl text-right">
        <div>
            <div className="flex justify-between items-center mb-6">
                <QuoteIcon className="w-8 h-8 text-yellow-500/30" />
                <div className="flex text-yellow-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5" />
                    ))}
                </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
                "{testimonial.content}"
            </p>
        </div>
        <div className="border-t border-gray-100 pt-4 mt-auto">
            <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
            {testimonial.role && (
                <p className="text-sm font-medium text-yellow-600 mt-0.5">{testimonial.role}</p>
            )}
        </div>
    </div>
);



const Portfolio: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Refs for robust touch handling
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const isSwiping = useRef(false);

    // Check for mobile on mount and resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextItem = () => {
        if (TESTIMONIALS.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    };

    const prevItem = () => {
        if (TESTIMONIALS.length === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        isSwiping.current = false; // Reset on new touch
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartX.current === 0) return;

        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = touchStartX.current - currentX;
        const diffY = touchStartY.current - currentY;
        
        // Determine if horizontal movement is dominant, which indicates a swipe.
        if (Math.abs(diffX) > Math.abs(diffY)) {
            isSwiping.current = true;
            e.preventDefault();
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
        const swipeThreshold = 50;

        // Flipped for RTL: swipe left shows previous, swipe right shows next
        if (diffX > swipeThreshold) {
            prevItem();
        } else if (diffX < -swipeThreshold) {
            nextItem();
        }
        
        touchStartX.current = 0;
        touchStartY.current = 0;
        isSwiping.current = false;
    };
    
    // Header for Testimonials
    const sectionHeader = (
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">המלצות</h2>
            <p className="text-xl text-gray-600 mt-4">מילים חמות ממטופלים שליוויתי בתהליך</p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>
    );

    return (
        <section id="portfolio" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
                {sectionHeader}
                
                {isMobile ? (
                    // Mobile Carousel View
                    <div className="relative w-full max-w-md mx-auto" role="region" aria-label="קרוסלת המלצות">
                        <div 
                            className="relative min-h-[360px] overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                           {TESTIMONIALS.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    aria-hidden={index !== currentIndex}
                                    className="absolute inset-0 transition-all duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(${(currentIndex - index) * 100}%) scale(${index === currentIndex ? 1 : 0.9})`,
                                        opacity: index === currentIndex ? 1 : 0,
                                        pointerEvents: index === currentIndex ? 'auto' : 'none',
                                    }}
                                >
                                    <TestimonialCard testimonial={item} />
                                </div>
                           ))}
                        </div>
                        
                        {/* Dot Indicators */}
                        <div className="mt-8 flex justify-center space-x-3 rtl:space-x-reverse">
                             {TESTIMONIALS.map((_, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`עבור להמלצה ${index + 1}`}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-yellow-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    // Desktop Grid View
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        {TESTIMONIALS.map((item, index) => (
                             <div key={item.id} className="animate-grow-in" style={{ animationDelay: `${index * 120}ms` }}>
                                <TestimonialCard testimonial={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
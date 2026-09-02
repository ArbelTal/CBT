import React from 'react';

interface HeroProps {
    onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center text-center text-white bg-gradient-to-b from-[#1F352F] via-[#29463F] to-[#1C2F2A] px-6 py-28 overflow-hidden">
            {/* Soft calming ambient glows */}
            <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#D49A76]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#88B0A2]/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto p-4 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-stone-200 text-xs sm:text-sm font-medium mb-6 border border-white/15 shadow-sm">
                    <span className="text-[#D49A76]">✦</span>
                    <span>מרחב טיפולי בטוח, מכיל ובגובה העיניים</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight text-white drop-shadow-sm">
                    CBT
                </h1>

                <p className="text-2xl sm:text-3xl font-light mb-6 text-stone-200 tracking-wide">
                    שירה צוויג | טיפול CBT
                </p>

                <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto mb-9 leading-relaxed font-light">
                    טיפול קוגניטיבי-התנהגותי ממוקד ומעשי – לרכישת כלים יומיומיים להתמודדות עם חרדות, לחצים ומשברי חיים, בדרך לשקט נפשי ואיכות חיים טובה יותר.
                </p>

                <button 
                    onClick={onContactClick}
                    className="bg-[#C98A68] hover:bg-[#B67A58] text-white font-bold py-3.5 px-9 rounded-full text-base sm:text-lg transition-all transform hover:scale-105 duration-300 shadow-xl hover:shadow-2xl active:scale-95"
                >
                    ליצירת קשר ותיאום שיחה
                </button>
            </div>
        </section>
    );
};

export default Hero;
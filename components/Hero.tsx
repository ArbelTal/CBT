import React from 'react';

interface HeroProps {
    onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
    return (
        <section 
            className="relative min-h-[92vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat px-6 py-28 overflow-hidden"
            style={{ 
                backgroundImage: "linear-gradient(to bottom, rgba(28, 44, 39, 0.72), rgba(18, 30, 26, 0.85)), url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80')" 
            }}
        >
            {/* Soft calming ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D49A76]/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto p-4 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-stone-200 text-xs sm:text-sm font-medium mb-6 border border-white/15 shadow-sm">
                    <span className="text-[#D49A76]">✦</span>
                    <span>מרחב טיפולי בטוח, מכיל ובגובה העיניים</span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight text-white drop-shadow-md">
                    CBT
                </h1>

                <p className="text-2xl sm:text-3xl font-light mb-6 text-stone-200 tracking-wide drop-shadow-sm">
                    שירה צוויג | טיפול CBT
                </p>

                <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto mb-9 leading-relaxed font-light drop-shadow-sm">
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
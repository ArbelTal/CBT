import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1A2824] text-stone-400 py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center text-sm font-light">
                <p>&copy; {new Date().getFullYear()} CBT - שירה צוויג | טיפול קוגניטיבי-התנהגותי. כל הזכויות שמורות.</p>
            </div>
        </footer>
    );
};

export default Footer;
import React, { useState, useEffect } from 'react';

const LotusIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.25c-.3 2.6-1.8 6.2-4.8 7.8 1.6 2.3 3.8 3.9 4.8 4.4 1-.5 3.2-2.1 4.8-4.4-3-1.6-4.5-5.2-4.8-7.8z" />
      <path d="M12 15c-1.9-.9-4.8-1.9-7.2-.8.8 2.3 2.9 4.2 5.2 5 1.2.4 2.8.4 4 0 2.3-.8 4.4-2.7 5.2-5-2.4-1.1-5.3-.1-7.2.8z" opacity="0.85" />
      <path d="M6 9.5C4.2 10.2 2.8 11.8 2.2 13.8c2.2.9 4.8.2 6.2-1.2-.9-1-1.7-2-2.4-3.1zM18 9.5c-.7 1.1-1.5 2.1-2.4 3.1 1.4 1.4 4 2.1 6.2 1.2-.6-2-2-3.6-3.8-4.3z" opacity="0.7" />
    </svg>
);

const MenuIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const PortfolioIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.92a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 .526-1.442l3.3-4.4a2.25 2.25 0 0 1 1.832-.888h5.244a2.25 2.25 0 0 1 1.832.888l3.3 4.4a2.25 2.25 0 0 1 .526 1.442Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75V9.75a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v3" />
    </svg>
);

const AboutIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

const ContactIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
);

interface HeaderProps {
    onHomeClick: () => void;
    onAboutClick: () => void;
    onPortfolioClick: () => void;
    onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onAboutClick, onPortfolioClick, onContactClick }) => {
    const [scrolled, setScrolled] = useState(false);
    // FIX: Corrected syntax error in useState destructuring. Was `=>`, changed to `=`.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => {
             document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const handleLinkClick = (scrollFunc: () => void) => {
        setIsMenuOpen(false);
        // Use a short timeout to allow the menu to start its closing animation
        // before the scroll begins, which feels smoother.
        setTimeout(() => {
            scrollFunc();
        }, 300);
    };
    
    const navLinkClasses = "cursor-pointer text-stone-700 hover:text-[#C98A68] transition-colors duration-300 text-base font-semibold";
    
    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled || isMenuOpen
                    ? 'bg-[#FAF7F2]/80 backdrop-blur-md shadow-md border-b border-stone-200/70 py-2.5 sm:py-3'
                    : 'bg-[#FAF7F2] border-b border-stone-200/80 py-3.5'
            }`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-x-2.5 cursor-pointer" onClick={onHomeClick}>
                        <LotusIcon className="w-8 h-8 text-[#C98A68]" />
                        <span className="text-2xl font-bold text-stone-800 tracking-wide">CBT</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-x-8">
                        <button onClick={onAboutClick} className={navLinkClasses}>אודות</button>
                        <button onClick={onPortfolioClick} className={navLinkClasses}>המלצות</button>
                        <button onClick={onContactClick} className={navLinkClasses}>צור קשר</button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className="text-stone-700 p-2 hover:text-[#C98A68] transition" aria-label="פתח תפריט">
                            <MenuIcon className="w-7 h-7"/>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div 
                role="button"
                tabIndex={0}
                aria-label="סגור תפריט"
                className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div className={`fixed top-0 right-0 h-full w-2/3 max-w-[240px] bg-[#FAF7F2]/98 backdrop-blur-xl shadow-2xl border-l border-stone-200/80 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} rounded-l-2xl text-right`}>
                 <div className="p-5 flex justify-between items-center border-b border-stone-200/60">
                    <span className="text-xl font-bold text-stone-800">תפריט</span>
                    <button onClick={() => setIsMenuOpen(false)} className="text-stone-700 p-2 hover:text-[#C98A68] transition" aria-label="סגור תפריט">
                        <CloseIcon className="w-6 h-6"/>
                    </button>
                </div>
                <nav className="flex flex-col p-5 space-y-2">
                    <button onClick={() => handleLinkClick(onAboutClick)} className={`${navLinkClasses} text-right py-2.5 px-3 rounded-xl hover:bg-stone-100 flex items-center justify-start gap-x-3 w-full`}>
                        <AboutIcon className="w-5 h-5 text-[#C98A68]"/>
                        <span>אודות</span>
                    </button>
                    <button onClick={() => handleLinkClick(onPortfolioClick)} className={`${navLinkClasses} text-right py-2.5 px-3 rounded-xl hover:bg-stone-100 flex items-center justify-start gap-x-3 w-full`}>
                        <PortfolioIcon className="w-5 h-5 text-[#C98A68]"/>
                        <span>המלצות</span>
                    </button>
                    <button onClick={() => handleLinkClick(onContactClick)} className={`${navLinkClasses} text-right py-2.5 px-3 rounded-xl hover:bg-stone-100 flex items-center justify-start gap-x-3 w-full`}>
                        <ContactIcon className="w-5 h-5 text-[#C98A68]"/>
                        <span>צור קשר</span>
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Header;
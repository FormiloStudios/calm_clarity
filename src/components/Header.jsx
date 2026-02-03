import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel border-b border-glass-border' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="/" className="text-2xl font-bold tracking-tighter text-gradient">
                    Calm Clarity
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
                    <a href="#mornings" className="hover:text-primary transition-colors">Before 9AM</a>
                    <a href="#focus" className="hover:text-primary transition-colors">Deep Work</a>
                    <a href="#sleep" className="hover:text-primary transition-colors">Recovery</a>
                    <button className="px-4 py-2 rounded-full border border-glass-border hover:bg-white/5 text-primary transition-all">
                        Join the Lab
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;

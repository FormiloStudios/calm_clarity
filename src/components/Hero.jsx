import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue opacity-20 blur-[100px] rounded-full animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple opacity-20 blur-[100px] rounded-full animate-pulse-slow delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="block text-primary">Quiet Minds.</span>
                    <span className="text-gradient">Sharper Focus.</span>
                </h1>
                <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-10 font-light">
                    A minimalist resource hub for biohackers, creators, and deep workers.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="glass-panel px-8 py-3 text-lg font-medium hover:bg-white/10 transition-all duration-300">
                        Explore Principles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

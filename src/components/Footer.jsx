import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-glass-border mt-20 py-12 bg-bg-secondary/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-secondary">
                    &copy; {new Date().getFullYear()} Calm Clarity. All rights reserved.
                </div>

                <div className="flex gap-6 text-sm text-secondary">
                    <a href="#" className="hover:text-primary transition-colors">Manifesto</a>
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-bg-primary text-slate-50 font-sans">
            <Sidebar />

            {/* Main Content Area - Fluid Grid */}
            <main className="flex-1 ml-20 md:ml-64 p-6 md:p-12 transition-all duration-300">
                <div className="max-w-[1440px] mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;

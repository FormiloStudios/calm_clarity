import React from 'react';

const Sidebar = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-white/5 backdrop-blur-md border-r border-white/5 flex flex-col justify-between py-8 z-50">

            {/* Brand */}
            <div className="px-6">
                <div className="h-10 w-10 md:h-8 md:w-auto bg-white rounded-full md:bg-transparent md:rounded-none flex items-center justify-center">
                    <span className="md:hidden text-black font-bold">C</span>
                    <span className="hidden md:block text-xl font-bold tracking-tighter text-white">Calm.</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 px-4 mt-10 flex-1">
                <NavItem icon="🏠" label="Dashboard" active={true} />
                <NavItem icon="☀️" label="Morning" active={false} />
                <NavItem icon="🧠" label="Focus" active={false} />
                <NavItem icon="🌙" label="Sleep" active={false} />
                <NavItem icon="📊" label="Data" active={false} />
            </nav>

            {/* Settings / User */}
            <div className="px-4">
                <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/5 transition-colors text-white/50 hover:text-white">
                    <span className="text-lg">⚙️</span>
                    <span className="hidden md:block text-sm font-medium">Settings</span>
                </button>
            </div>
        </aside>
    );
};

const NavItem = ({ icon, label, active }) => {
    const baseClasses = "flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300 group";
    const activeClasses = active ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white";

    return (
        <button className={`${baseClasses} ${activeClasses}`}>
            <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
            <span className="hidden md:block text-sm font-medium">{label}</span>
        </button>
    );
};

export default Sidebar;

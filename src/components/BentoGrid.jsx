import React from 'react';

const BentoGrid = () => {
    return (
        <section className="py-8">

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                    Good Afternoon, <span className="text-slate-400">Biohacker.</span>
                </h1>
                <p className="text-slate-500 text-lg">Your daily metrics and protocols are ready.</p>
            </div>

            {/* The Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* Better Mornings: Col-Span-8, Row-Span-2 */}
                <div className="col-span-1 md:col-span-8 md:row-span-2 glass-panel p-8 md:p-10 relative overflow-hidden group rounded-2xl">
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium tracking-wide mb-6">
                                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                                OPTIMIZED PROTOCOL
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                Better Mornings
                            </h2>
                            <p className="text-slate-400 text-lg max-w-md">
                                Master the cortisol awakening response. Sequence your light exposure, hydration, and movement for peak alertness.
                            </p>
                        </div>

                        <div className="mt-8">
                            <button className="btn-ghost flex items-center gap-2 group-hover:gap-3 transition-all">
                                Start Routine <span>&rarr;</span>
                            </button>
                        </div>
                    </div>

                    {/* Subtle Graphic */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full"></div>
                </div>

                {/* Daily Focus: Col-Span-4 */}
                <div className="col-span-1 md:col-span-4 glass-panel p-8 relative overflow-hidden group rounded-2xl flex flex-col justify-between min-h-[250px]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-3xl">🧠</span>
                            <span className="text-xs font-mono text-purple-300">DEEP WORK</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Daily Focus</h3>
                        <p className="text-sm text-slate-400">Nootropic stacks & flow state timers.</p>
                    </div>
                    <div className="relative z-10 mt-auto pt-6">
                        <button className="btn-ghost text-xs w-full">Launch Session</button>
                    </div>
                </div>

                {/* Deep Sleep: Col-Span-4 */}
                <div className="col-span-1 md:col-span-4 glass-panel p-8 relative overflow-hidden group rounded-2xl flex flex-col justify-between min-h-[250px]">
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 blur-[50px] rounded-full"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-3xl">🌙</span>
                            <span className="text-xs font-mono text-indigo-300">RECOVERY</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Deep Sleep</h3>
                        <p className="text-sm text-slate-400">Thermal regulation & REM tracking.</p>
                    </div>
                    <div className="relative z-10 mt-auto pt-6">
                        <button className="btn-ghost text-xs w-full">View Data</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BentoGrid;


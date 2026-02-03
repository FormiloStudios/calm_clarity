import React from 'react';

const Pillars = () => {
    const pillars = [
        {
            title: "Better Mornings",
            desc: "Optimized routines for cortisol regulation and early momentum.",
            icon: "🌅"
        },
        {
            title: "Daily Focus",
            desc: "Tools and protocols for deep work and flow state preservation.",
            icon: "🧠"
        },
        {
            title: "Deep Sleep",
            desc: "Biohacking recovery for maximum cognitive performance.",
            icon: "🌙"
        }
    ];

    return (
        <section className="py-24 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                    <div key={index} className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">{pillar.title}</h3>
                        <p className="text-secondary leading-relaxed">
                            {pillar.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pillars;

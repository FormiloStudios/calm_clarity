"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EditorialHeader from "@/components/EditorialHeader";
import ArticleFeed from "@/components/ArticleFeed";

// Pre-generated image paths
const PILLAR_IMAGES = {
    morning: "/pillar_morning_biohacking_1770155262210.png",
    focus: "/pillar_focus_capsule_1770155282075.png",
    sleep: "/pillar_sleep_abstract_1770155301386.png"
};

export default function EditorialHub() {
    return (
        <main className="relative min-h-screen">
            <EditorialHeader />

            {/* 1. Hero Experience */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Video Layer Placeholder */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px]" />
                    {/* In a real scenario, use <video autoPlay loop muted className="w-full h-full object-cover"> */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                </div>

                <div className="relative z-20 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white mb-6">
                            Quiet Minds.<br />
                            <span className="font-bold">Sharper Focus.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            The leading editorial hub for high-performance neuroscience and clinical biohacking.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll to Explore CTA */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 text-white/40">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to Explore</span>
                    <div className="mouse-scroll" />
                </div>
            </section>

            {/* 2. Pillar Bento Grid */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]"
                >
                    {/* Card 1: Better Mornings */}
                    <div className="md:col-span-8 group relative overflow-hidden rounded-3xl glass-card">
                        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors" />
                            <img src={PILLAR_IMAGES.morning} alt="Morning" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-20 p-10 h-full flex flex-col justify-end">
                            <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2">Protocol 01</span>
                            <h2 className="text-4xl font-bold text-white mb-4">Better Mornings</h2>
                            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group/btn">
                                Explore Hub <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Daily Focus */}
                    <div className="md:col-span-4 group relative overflow-hidden rounded-3xl glass-card">
                        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                            <div className="absolute inset-0 bg-black/50 z-10" />
                            <img src={PILLAR_IMAGES.focus} alt="Focus" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                            <h2 className="text-2xl font-bold text-white mb-2">Daily Focus</h2>
                            <p className="text-white/50 text-sm mb-4">Mastering flow state through molecular precision.</p>
                            <button className="text-xs uppercase tracking-widest text-white hover:text-white/70 transition-colors">Enter Lab</button>
                        </div>
                    </div>

                    {/* Card 3: Deep Sleep */}
                    <div className="md:col-span-4 group relative overflow-hidden rounded-3xl glass-card">
                        <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                            <div className="absolute inset-0 bg-black/50 z-10" />
                            <img src={PILLAR_IMAGES.sleep} alt="Sleep" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                            <h2 className="text-2xl font-bold text-white mb-2">Deep Sleep</h2>
                            <p className="text-white/50 text-sm mb-4">Thermal regulation and neural recovery.</p>
                            <button className="text-xs uppercase tracking-widest text-white hover:text-white/70 transition-colors">View Protocols</button>
                        </div>
                    </div>

                    {/* Extra Editorial Card */}
                    <div className="md:col-span-8 group relative overflow-hidden rounded-3xl glass-card bg-obsidian flex items-center justify-center p-12 text-center border-white/5 border">
                        <div>
                            <h3 className="text-3xl font-light text-white mb-6 italic text-balance">
                                "The body is a symphony of rhythms. Biohacking is the art of conducting them."
                            </h3>
                            <div className="h-px w-20 bg-white/10 mx-auto" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 3. Protocol Journal (Article Feed) */}
            <section className="py-32 px-6 md:px-12 bg-obsidian/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-5xl font-bold text-white mb-4">The Regulation Protocols</h2>
                        <div className="h-1 w-24 bg-white/20" />
                    </div>

                    <ArticleFeed />

                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-white/5 text-center text-white/30 text-xs tracking-widest uppercase">
                &copy; 2024 Calm Clarity. All Rights Reserved. Crafted for the Modern Biohacker.
            </footer>
        </main>
    );
}

"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
    {
        id: 1,
        category: "Neurochemistry",
        title: "The Dopamine Detox: Fact vs. Fiction in Clinical Practice",
        teaser: "Why 'fasting' from rewards doesn't work, and the receptor density protocols that actually restore motivation.",
        image: "https://images.unsplash.com/photo-1559757175-9b2f63d5da36?auto=format&fit=crop&q=80",
        size: "large"
    },
    {
        id: 2,
        category: "Circadian Rhythm",
        title: "Light as Medicine",
        teaser: "Structuring your lux exposure for optimal ATP production.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
        size: "small"
    },
    {
        id: 3,
        category: "Thermal Stress",
        title: "Sauna vs. Ice Bath",
        teaser: "The Hormetic Sweet Spot for inflammation reduction.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
        size: "small"
    },
    {
        id: 4,
        category: "Microbiome",
        title: "The Gut-Brain Axis",
        teaser: "How distinct bacterial strains influence anxiety levels via the Vagus Nerve.",
        image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80",
        size: "large"
    }
];

export default function ArticleFeed() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {articles.map((article, index) => {
                const isLarge = article.size === "large";
                return (
                    <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative flex flex-col gap-4 ${isLarge ? "md:col-span-2 md:flex-row md:items-center" : "col-span-1"
                            }`}
                    >
                        {/* Image Container */}
                        <div
                            className={`relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 transition-all duration-500 group-hover:border-white/20 ${isLarge ? "w-full md:w-1/2 aspect-video" : "w-full aspect-[4/3]"
                                }`}
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>

                        {/* Content Info */}
                        <div className={`flex flex-col justify-center ${isLarge ? "w-full md:w-1/2 p-4" : "p-2"}`}>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 border border-indigo-400/30 px-2 py-1 rounded-full bg-indigo-500/10">
                                    {article.category}
                                </span>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" size={20} />
                            </div>

                            <h3 className={`font-bold text-white mb-3 leading-tight group-hover:text-indigo-200 transition-colors ${isLarge ? "text-3xl" : "text-xl"
                                }`}>
                                {article.title}
                            </h3>

                            <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-3">
                                {article.teaser}
                            </p>
                        </div>
                    </motion.article>
                );
            })}
        </div>
    );
}

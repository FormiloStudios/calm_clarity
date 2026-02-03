"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EditorialHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                        ? "py-4 bg-obsidian/80 backdrop-blur-md border-white/5"
                        : "py-6 bg-transparent border-transparent"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo - Text Based */}
                    <Link href="/" className="group">
                        <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                            CALM CLARITY<span className="text-indigo-500">.</span>
                        </h1>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white/60 transition-colors">
                            Editorial
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase text-white/60">
                        {["Protocols", "Science", "Interviews", "Newsletter"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-white transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <button className="hover:text-white transition-colors">
                            <Search size={18} />
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-obsidian flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-xl font-bold tracking-tighter text-white">
                                Menu
                            </h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white/50 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-8 text-2xl font-light text-white">
                            {["Protocols", "Science", "Interviews", "Newsletter"].map(
                                (item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="border-b border-white/5 pb-4"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

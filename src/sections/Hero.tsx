import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 md:pt-0 overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] animate-morph"
                />
                <motion.div
                    animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-brand-highlight/5 rounded-full blur-[120px] animate-morph"
                />
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[150px]"
                />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                    }
                }}
                className="text-center z-10 max-w-5xl px-4"
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 mb-8 md:mb-10 text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-highlight uppercase glass rounded-full border border-brand-highlight/30 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                >
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-highlight animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    Harsh Dhimmar Portfolio 2026
                </motion.div>
                
                <div className="flex flex-col gap-1 md:gap-3 mb-8 md:mb-10 px-2">
                    <motion.h1 
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[2.75rem] sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter font-display leading-[0.9] text-white"
                    >
                        ENGINEERING
                    </motion.h1>
                    <motion.h1 
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[2.25rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-highlight"
                    >
                        BEYOND STACKS
                    </motion.h1>
                </div>
                
                <motion.p 
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="text-base md:text-2xl text-slate-400 mb-10 md:mb-14 leading-relaxed max-w-3xl mx-auto font-light"
                >
                    Full Stack Developer obsessed with 
                    <span className="text-white"> scalable architecture </span> 
                    and constantly exploring 
                    <span className="text-brand-highlight"> emerging technologies </span> 
                     to build the digital infrastructure of tomorrow.
                </motion.p>

                <motion.div 
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                >
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-12 py-5 rounded-2xl bg-brand-accent text-white font-black shadow-[0_10px_40px_rgba(124,58,237,0.3)] transition-all text-sm tracking-widest uppercase overflow-hidden"
                    >
                        <span className="relative z-10">View Experience</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 rounded-2xl glass border border-white/20 text-white font-black hover:bg-white/10 transition-all text-sm tracking-widest uppercase"
                    >
                        Let's Talk
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-slate-500 text-[10px] tracking-[0.4em] uppercase font-black opacity-50">Scroll</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-brand-highlight/50 to-transparent relative overflow-hidden">
                    <motion.div 
                        animate={{ y: [0, 96] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-1/2 bg-white absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
};

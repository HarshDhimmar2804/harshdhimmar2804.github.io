import React from 'react';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">About Me</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-highlight mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <Card>
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-brand-accent rounded-full" />
                        Professional Journey
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6 font-light text-lg">
                        I am a dedicated <span className="text-white font-normal">Junior Software Engineer</span> at Engross Infotech. With a year of professional experience, I've developed a strong foundation in modern web technologies and software development lifecycles.
                    </p>
                    <p className="text-slate-400 leading-relaxed font-light text-lg">
                        My goal is to build applications that are user-centric, efficient, and architected with best practices in mind, <span className="text-brand-highlight font-normal">bridging the gap</span> between innovative design and robust engineering.
                    </p>
                </Card>

                <div className="space-y-6">
                    <div className="glass p-8 rounded-3xl border border-white/5 transition-all duration-300 hover:border-brand-accent/30">
                        <h4 className="font-bold text-brand-highlight mb-3 uppercase tracking-widest text-xs">My Approach</h4>
                        <p className="text-slate-400 font-light leading-relaxed">
                            I believe in writing clean, maintainable code and staying curious about emerging technologies. I strive to create seamless digital experiences that solve real-world problems.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-3xl border border-white/5 transition-all duration-300 hover:border-brand-accent/30">
                        <h4 className="font-bold text-brand-highlight mb-3 uppercase tracking-widest text-xs">Core Focus</h4>
                        <p className="text-slate-400 font-light leading-relaxed">
                            Full-stack development, software engineering, and continuous learning to bridge the gap between complex logic and intuitive user interfaces.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-3xl border border-white/5 transition-all duration-300 hover:border-brand-accent/30">
                        <h4 className="font-bold text-brand-highlight mb-3 uppercase tracking-widest text-xs">Location</h4>
                        <p className="text-slate-400 font-bold">Surat, India</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

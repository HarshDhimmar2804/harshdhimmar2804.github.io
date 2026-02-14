import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';

const projects = [
    {
        title: "Enterprise E-Commerce Platform",
        description: "A full-featured MERN stack e-commerce application with secure user authentication, product management, and Stripe API integration.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        link: "#"
    },
    {
        title: "Security Monitoring Dashboard",
        description: "A real-time security dashboard for monitoring infrastructure health, visualizing threat data, and managing system alerts.",
        tech: ["TypeScript", "React", "Chart.js", "Node.js"],
        link: "#"
    },
    {
        title: "Personal Finance Tracker",
        description: "A comprehensive tool for managing personal finances, tracking expenses, and generating monthly financial reports.",
        tech: ["React", "Tailwind CSS", "Firebase"],
        link: "#"
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Featured Projects</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-highlight mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <Card className="h-full flex flex-col border border-white/5">
                            <h3 className="text-2xl font-bold mb-4 text-white hover:text-brand-highlight transition-colors cursor-default tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 mb-8 flex-grow font-light leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] px-3 py-1 rounded-full glass-accent text-white font-black uppercase tracking-wider border border-white/10">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-brand-highlight font-black text-xs uppercase tracking-widest hover:text-white transition-all group"
                                >
                                    View Live <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                                <a
                                    href="#"
                                    className="text-slate-500 hover:text-brand-accent transition-colors"
                                    aria-label="GitHub Repository"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.805.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

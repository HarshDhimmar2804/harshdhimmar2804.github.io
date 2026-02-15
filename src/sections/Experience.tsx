import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Junior Software Engineer",
        company: "Engross Infotech",
        duration: "Sep 2025 - Present",
        description: "Focusing on building high-performance applications and implementing scalable software solutions as part of the core engineering team.",
        type: "Full-time"
    },
    {
        role: "Trainee Software Engineer",
        company: "Engross Infotech",
        duration: "Mar 2025 - Sep 2025",
        description: "Collaborated on various software development projects, gaining hands-on experience in production environments and software lifecycle management.",
        type: "Trainee"
    },
    {
        role: "React JS Developer (Internship)",
        company: "Webito Infotech",
        duration: "Jan 2025 - Jan 2025",
        description: "Developed and optimized React.js components for improved performance and scalability. Collaborated with the team to implement UI enhancements and improve user experience. Worked on state management and API integration.",
        type: "Remote"
    },
    {
        role: "Summer Internship",
        company: "TatvaSoft",
        duration: "May 2024 - Jun 2024",
        description: "Gained practical experience in web development using AngularJS and PostgreSQL. Worked on building responsive features and optimizing database queries.",
        type: "Remote"
    },
    {
        role: "Web Developer (Internship)",
        company: "Cognifyz Technologies",
        duration: "Apr 2024 - May 2024",
        description: "Assisted in the development of web-based projects, focusing on HTML/CSS implementation and UI/UX improvements.",
        type: "Remote"
    }
];

const education = [
    {
        degree: "Bachelor of Engineering - BE, Computer Engineering",
        institution: "Kadi Sarva Vishwavidyalaya (KSV), Gandhinagar",
        duration: "Apr 2021 - Dec 2025",
        description: "Focusing on core computer engineering principles, software architecture, and advanced programming methodologies.",
    }
];

export const Experience: React.FC = () => {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Experience & Education</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-highlight mx-auto rounded-full" />
            </motion.div>

            <div className="space-y-20">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl glass-accent text-white flex items-center justify-center text-sm font-black border border-white/10 shadow-lg">01</span>
                        Professional Experience
                    </h3>
                    <div className="space-y-12 border-l border-white/5 ml-5 pl-10 relative">
                        {experiences.map((item, index) => (
                            <motion.div
                                key={item.role + index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-[51px] top-1.5 w-5 h-5 rounded-full bg-brand-primary border-2 border-brand-accent shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                                <div className="flex flex-wrap items-center gap-4 mb-3">
                                    <span className="text-brand-highlight text-xs font-black uppercase tracking-[0.2em]">{item.duration}</span>
                                    {item.type && (
                                        <span className="px-3 py-1 glass border border-white/5 text-slate-400 text-[10px] font-black uppercase rounded-lg tracking-widest">
                                            {item.type}
                                        </span>
                                    )}
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">{item.role}</h4>
                                <p className="text-slate-500 font-bold mb-6 italic">{item.company}</p>
                                <p className="text-slate-400 leading-relaxed max-w-2xl font-light">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl glass-accent text-white flex items-center justify-center text-sm font-black border border-white/10 shadow-lg">02</span>
                        Education
                    </h3>
                    <div className="space-y-12 border-l border-white/5 ml-5 pl-10 relative">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.degree + index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-[51px] top-1.5 w-5 h-5 rounded-full bg-brand-primary border-2 border-brand-highlight shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                                <span className="text-brand-accent text-xs font-black mb-3 block uppercase tracking-[0.2em]">{item.duration}</span>
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight">{item.degree}</h4>
                                <p className="text-slate-500 font-bold mb-6 italic">{item.institution}</p>
                                <p className="text-slate-400 leading-relaxed max-w-2xl font-light">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

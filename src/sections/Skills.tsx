import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';

const skillCategories = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Node.js", ".NET", "C#", "REST APIs"]
    },
    {
        title: "Database",
        skills: ["SQL", "MongoDB"]
    },
    {
        title: "Tools & Others",
        skills: ["Git", "GitHub", "Security Admin", "Linux", "Docker"]
    }
];

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Technical Expertise</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-highlight mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="h-full border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-brand-accent rounded-full" />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3.5 py-1.5 glass-accent text-slate-200 rounded-xl text-xs font-semibold border border-white/5 hover:border-brand-highlight/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../components/Card';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formspree.io/f/mvzaawya', { 
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
                <div className="w-20 h-1.5 bg-indigo-600 dark:bg-indigo-500 mx-auto rounded-full" />
                <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-lg mx-auto">
                    Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
                </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-12">
                <Card className="p-8 md:p-12">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white"
                            />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white resize-none"
                            />
                        </div>
                        <div className="md:col-span-2 mt-4">
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100 dark:shadow-none hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </button>
                        </div>
                        
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="md:col-span-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl text-center font-medium border border-green-100 dark:border-green-900/30"
                                >
                                    Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="md:col-span-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-xl text-center font-medium border border-red-100 dark:border-red-900/30"
                                >
                                    Something went wrong. Please try again or email me directly at work.harshdhimmar@gmail.com
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </Card>
            </div>

            <div className="mt-16 flex justify-center gap-8">
                <a href="https://linkedin.com/in/harshdhimmar" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/harshdhimmar" target="_blank" rel="noopener noreferrer" className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.805.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </div>
        </section>
    );
};

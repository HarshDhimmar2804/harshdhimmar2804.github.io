import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Scroll Spy Logic
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveSection(sectionId);
                    
                    // Update URL hash without jumping
                    if (window.location.hash !== `#${sectionId}`) {
                        window.history.replaceState(null, '', `#${sectionId}`);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['home', 'about', 'skills', 'work', 'projects', 'contact'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        
        if (element) {
            const offset = 80; // Account for navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
            scrolled ? 'py-4' : 'py-6'
        }`}>
            <div className={`max-w-6xl mx-auto rounded-3xl transition-all duration-300 relative z-10 ${
                scrolled 
                    ? 'glass shadow-2xl border border-white/10 px-8 py-3' 
                    : 'px-4 py-2'
            }`}>
                <div className="flex items-center justify-between">
                    <a href="#home" className="hover:opacity-80 transition-all group" onClick={(e) => handleScrollTo(e, '#home')}>
                        <span className="text-2xl font-bold tracking-tighter text-white font-display">
                            H<span className="text-brand-accent group-hover:text-brand-highlight transition-colors">D</span>.
                        </span>
                    </a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '');
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleScrollTo(e, item.href)}
                                    className={`text-sm font-black tracking-widest uppercase transition-all relative ${
                                        isActive ? 'text-brand-highlight' : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-highlight rounded-full"
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-white p-2 glass rounded-xl transition-colors border border-white/5"
                            aria-label="Toggle Menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1, marginTop: '1rem' } : { height: 0, opacity: 0, marginTop: 0 }}
                className="md:hidden overflow-hidden glass rounded-3xl border border-white/10 shadow-2xl"
            >
                <div className="p-8 flex flex-col gap-6">
                    {navLinks.map((item) => {
                        const isActive = activeSection === item.href.replace('#', '');
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className={`text-xl font-black uppercase tracking-widest transition-colors ${
                                    isActive ? 'text-brand-highlight' : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </div>
            </motion.div>
        </nav>
    );
};

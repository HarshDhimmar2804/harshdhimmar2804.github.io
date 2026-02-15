import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const GlowCursor: React.FC = () => {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Fast spring for the core
    const coreX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const coreY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    // Slower, trailing spring for the aura
    const auraX = useSpring(mouseX, { damping: 40, stiffness: 80 });
    const auraY = useSpring(mouseY, { damping: 40, stiffness: 80 });

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('pointermove', handlePointerMove);
        return () => window.removeEventListener('pointermove', handlePointerMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* --- INTERACTIVE ELEMENTS --- */}
            
            {/* Outer Trailing Aura */}
            <motion.div
                className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-30 mix-blend-screen bg-purple-600/20 blur-[80px]"
                style={{
                    x: auraX,
                    y: auraY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Core Interactive Glow */}
            <motion.div
                className="absolute top-0 left-0 w-[150px] h-[150px] rounded-full opacity-40 mix-blend-screen bg-cyan-400/30 blur-[40px]"
                style={{
                    x: coreX,
                    y: coreY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Pointer Highlight Dot */}
            <motion.div
                className="absolute top-0 left-0 w-2 h-2 rounded-full z-50 bg-brand-highlight/60 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                style={{
                    x: coreX,
                    y: coreY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* --- AMBIENT BACKGROUND ELEMENTS --- */}

            {/* Ambient Blob 1 - Purple */}
            <motion.div
                animate={{
                    x: ['-10%', '20%', '-5%', '-10%'],
                    y: ['-10%', '10%', '20%', '-10%'],
                    scale: [1, 1.2, 1.1, 1],
                    rotate: [0, 90, 180, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-10 bg-purple-600/20 blur-[100px]"
            />

            {/* Ambient Blob 2 - Cyan */}
            <motion.div
                animate={{
                    x: ['10%', '-20%', '5%', '10%'],
                    y: ['10%', '30%', '-10%', '10%'],
                    scale: [1, 1.3, 0.9, 1],
                    rotate: [0, -90, -180, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-10 bg-cyan-500/10 blur-[120px]"
            />
        </div>
    );
};

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
}) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                "glass rounded-3xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden group",
                "hover:border-brand-accent/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Code, Globe, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const { name, role, tagline, socials } = portfolioData.personalInfo;

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 px-6 pt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
            >

                <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter text-white w-full">
                    {name}
                </h1>
                <p className="text-2xl md:text-4xl text-gray-400 font-light mb-12 max-w-full px-4 leading-tight">
                    {role}
                    <div className="h-4"></div>
                    <span className="text-green-500 font-medium">{tagline}</span>
                </p>

                <div className="flex gap-8 justify-center flex-wrap mb-12 w-full px-4">
                    {socials.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={idx}
                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-white/5 border border-white/10 rounded-2xl transition-colors text-gray-300 hover:text-white"
                                title={social.name}
                            >
                                <Icon className="w-8 h-8" />
                            </motion.a>
                        );
                    })}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`mailto:${portfolioData.personalInfo.email}`}
                        className="px-8 py-4 bg-green-600 hover:bg-green-500 text-black text-xl font-bold rounded-2xl transition-colors flex items-center gap-3"
                    >
                        <Mail className="w-6 h-6" /> Contact Me
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10"
            >
                <ArrowDown className="w-6 h-6 text-gray-600" />
            </motion.div>
        </section>
    );
};

export default Hero;

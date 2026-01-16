import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const categories = Object.entries(portfolioData.skills);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
                Technical <span className="text-green-500">Arsenal</span>
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {categories.map(([category, skills], idx) => (
                    <motion.div
                        key={idx}
                        variants={item}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-bold mb-4 text-green-400 font-mono">0{idx + 1}. {category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1 bg-white/5 rounded text-sm text-gray-300 border border-white/5"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;

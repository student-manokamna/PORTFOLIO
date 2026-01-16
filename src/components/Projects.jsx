import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
    return (
        <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 text-center"
            >
                Featured <span className="text-green-500">Work</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="p-8 relative">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-mono mt-1">{project.subtitle}</p>
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.links.github} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-mono px-2 py-1 bg-black/40 rounded text-green-300/80 border border-green-500/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

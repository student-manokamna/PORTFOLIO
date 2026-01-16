import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 px-6 relative z-10 border-t border-white/10 bg-black/40">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Let's Connect</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                        <div className="p-4 bg-green-500/10 rounded-full text-green-400">
                            <Mail className="w-6 h-6" />
                        </div>
                        <p className="text-sm text-gray-400">Email Me</p>
                        <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-white font-medium hover:text-green-400">
                            {portfolioData.personalInfo.email}
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                        <div className="p-4 bg-green-500/10 rounded-full text-green-400">
                            <Phone className="w-6 h-6" />
                        </div>
                        <p className="text-sm text-gray-400">Call Me</p>
                        <p className="text-white font-medium">
                            {portfolioData.personalInfo.phone}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                        <div className="p-4 bg-green-500/10 rounded-full text-green-400">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-white font-medium">
                            {portfolioData.personalInfo.location}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                    <p>Designed & Built by {portfolioData.personalInfo.name}</p>
                    <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Contact;

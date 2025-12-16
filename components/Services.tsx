import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ShieldCheck, Sparkles, Smile, Activity, Anchor, Zap, HelpCircle } from 'lucide-react';

// Explicitly map icon strings to components to avoid 'Script error' from dynamic namespace lookups
const iconMap: Record<string, any> = {
  ShieldCheck,
  Sparkles,
  Smile,
  Activity,
  Anchor,
  Zap
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-600 font-semibold tracking-wide text-sm uppercase bg-teal-50 px-4 py-1.5 rounded-full"
          >
            Our Treatments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl mt-6 mb-6 text-slate-900 leading-tight"
          >
            Comprehensive Care for <br/> the Whole Family
          </motion.h2>
          <p className="font-sans text-slate-600 text-lg">
            From routine checkups to complex restorations, we use the latest technology to ensure the best possible results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
                // Safe Icon Rendering
                const IconComponent = iconMap[service.icon] || HelpCircle;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
                    >
                        <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                            <IconComponent size={28} className="text-teal-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        
                        <h3 className="font-serif text-2xl text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                            {service.title}
                        </h3>
                        
                        <p className="font-sans text-slate-500 leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default Services;
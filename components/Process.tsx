import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Stethoscope, Smile } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book online or call us. We'll find a time that fits your busy lifestyle."
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Exam",
    description: "Digital X-rays, photos, and a gentle cleaning to assess your needs."
  },
  {
    icon: Smile,
    title: "Personalized Plan",
    description: "We'll discuss your options and create a plan to achieve your dream smile."
  }
];

const Process: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop" 
                        alt="Dentist explaining treatment" 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-50 rounded-full -z-10 hidden md:block" />
            </div>

            <div className="order-1 lg:order-2">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-cyan-600 font-bold tracking-wide text-sm uppercase"
                >
                    Your Journey
                </motion.span>
                <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 text-slate-900 leading-tight">
                    What to expect at your <br/> <span className="text-teal-600">first visit.</span>
                </h2>

                <div className="space-y-8">
                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex gap-6"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xl font-serif">
                                    {idx + 1}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
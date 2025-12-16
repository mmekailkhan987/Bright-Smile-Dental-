import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-teal-600 font-bold tracking-wide text-sm uppercase">Common Questions</span>
            <h2 className="font-serif text-4xl mt-3 text-slate-900">Good to know.</h2>
        </div>

        <div className="space-y-4">
            {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <button
                        onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className="font-serif text-lg font-medium text-slate-800">{faq.question}</span>
                        <span className={`p-2 rounded-full ${activeIndex === idx ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500'}`}>
                            {activeIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                    </button>
                    <AnimatePresence>
                        {activeIndex === idx && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
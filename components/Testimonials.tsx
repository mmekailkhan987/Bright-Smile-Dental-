import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Patient Stories</h2>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto">
            We love our patients, and they love us back. See what our community has to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10"
                >
                    <div className="text-cyan-300 mb-6">
                        <Quote size={32} />
                    </div>
                    <p className="text-lg leading-relaxed text-teal-50 mb-6 italic">
                        "{review.text}"
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="font-bold text-white font-serif tracking-wide">{review.name}</span>
                        <div className="flex text-yellow-400">
                             {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
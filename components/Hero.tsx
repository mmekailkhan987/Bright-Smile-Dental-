import React from 'react';
import { motion } from 'framer-motion';
import { BOOKING_LINK, BOOKING_EMERGENCY_LINK, PHONE } from '../constants';
import { ShieldCheck, Star, Phone as PhoneIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-white/70 z-10" /> {/* General lightening overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" /> {/* Text readability gradient */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"
          poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
        >
          {/* Using a calm, premium 'sunlight through curtains' video to match the 'Bright' theme */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-sunlight-through-the-window-curtains-12064-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Abstract Shapes - Preserved but adjusted for video background */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-3xl animate-blob mix-blend-multiply z-10" />
      <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] bg-cyan-200/20 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 bg-teal-100/80 backdrop-blur-sm text-teal-800 text-xs font-bold uppercase tracking-wider rounded-full border border-teal-200">
              Accepting New Patients
            </span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-slate-600 text-sm font-medium">5.0 (200+ Reviews)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.1] mb-6 drop-shadow-sm"
          >
            Dentistry done <br/>
            <span className="text-teal-600 italic">differently.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-slate-700 text-lg md:text-xl mb-8 max-w-lg leading-relaxed font-medium"
          >
            Experience modern, pain-free dental care in a relaxing environment. 
            We combine advanced technology with a gentle touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={BOOKING_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200 transform hover:-translate-y-1"
            >
              Book Appointment
            </a>
            <a
              href={BOOKING_EMERGENCY_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 font-semibold rounded-full hover:bg-white transition-all hover:border-teal-200 shadow-sm"
            >
              <PhoneIcon size={18} className="mr-2 text-teal-600" />
              {PHONE}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex items-center gap-8 text-slate-600 text-sm font-medium"
          >
            <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
              <ShieldCheck size={20} className="text-teal-600" />
              <span>Most Insurance Accepted</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">
              <ShieldCheck size={20} className="text-teal-600" />
              <span>Late & Weekend Hours</span>
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="relative order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/10 aspect-[4/5] lg:aspect-square border-[8px] border-white/50 backdrop-blur-md">
               <img 
                 src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                 alt="Smiling patient in dental clinic" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Next Available</span>
              </div>
              <p className="text-sm text-slate-600">Tomorrow at 10:00 AM</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
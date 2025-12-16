import React from 'react';
import { INSURANCE_PROVIDERS } from '../constants';

const Insurance: React.FC = () => {
  return (
    <div className="w-full py-10 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">We accept most major insurance plans</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-infinite-scroll flex whitespace-nowrap">
                {INSURANCE_PROVIDERS.map((provider, index) => (
                    <div key={index} className="mx-8 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-serif font-bold text-slate-300 hover:text-teal-600 transition-colors cursor-default">
                            {provider}
                        </span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {INSURANCE_PROVIDERS.map((provider, index) => (
                    <div key={`dup-${index}`} className="mx-8 flex items-center justify-center">
                        <span className="text-xl md:text-2xl font-serif font-bold text-slate-300 hover:text-teal-600 transition-colors cursor-default">
                            {provider}
                        </span>
                    </div>
                ))}
            </div>
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent"></div>
        </div>
    </div>
  );
};

export default Insurance;

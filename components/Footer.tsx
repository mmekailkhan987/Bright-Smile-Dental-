import React from 'react';
import { Instagram, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, EMAIL, PHONE, INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
            <span className="font-serif text-2xl text-white font-bold">{COMPANY_NAME}</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Modern dentistry designed around you. Experience the difference of personalized, gentle care.
          </p>
          <div className="flex gap-4">
            <a href={INSTAGRAM_LINK} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                <Instagram size={18} />
            </a>
            <a href={`mailto:${EMAIL}`} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <MapPin size={20} className="text-teal-500 mt-1 shrink-0" />
                    <span>{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone size={20} className="text-teal-500 shrink-0" />
                    <span>{PHONE}</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail size={20} className="text-teal-500 shrink-0" />
                    <span>{EMAIL}</span>
                </li>
            </ul>
        </div>

        {/* Hours */}
        <div>
            <h4 className="text-white font-serif text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-slate-400">
                <li className="flex justify-between">
                    <span>Mon - Thu</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                    <span>Friday</span>
                    <span className="text-white">8:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">By Appointment</span>
                </li>
                <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-teal-500">Closed</span>
                </li>
            </ul>
        </div>

        {/* Links */}
        <div>
             <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
             <ul className="space-y-2">
                 <li><a href="#services" className="hover:text-teal-400 transition-colors">Services</a></li>
                 <li><a href="#about" className="hover:text-teal-400 transition-colors">New Patients</a></li>
                 <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Reviews</a></li>
                 <li><a href="#faq" className="hover:text-teal-400 transition-colors">FAQ</a></li>
                 <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
             </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with care in San Francisco.</p>
      </div>
    </footer>
  );
};

export default Footer;
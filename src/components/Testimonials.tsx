import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareQuote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarfarz',
    role: 'CEO, Pleux Ecommerce',
    content: 'Rahim completely transformed our online presence. The custom React frontend and smooth Firebase backend he built for us handles our traffic flawlessly. His professionalism as a freelancer is unmatched.',
  },
  {
    name: 'director, Protect Life Sciences',
    role: 'Director, Protect Life Sciences',
    content: 'We needed a highly responsive, professional website deployed quickly. Rahim delivered exactly what we asked for, managed the domain setup, and provided excellent post-launch support.',
  },
  {
    name: 'Tasaduqnabishah',
    role: 'Founder, Poona Enterprises',
    content: 'Integrating Sanity CMS was a game-changer for our team. We can now update our site content instantly without needing developer help. Rahim is an incredibly skilled and reliable engineer.',
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-950 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#cc73f8]/10 border border-[#cc73f8]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#cc73f8] mb-3"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Feedback</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            What Clients Say
          </motion.h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#cc73f8] to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative bg-slate-900/60 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
          
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-[#cc73f8]/20 flex items-center justify-center text-white transition-colors z-20 hidden md:flex">
             <ChevronLeft className="w-5 h-5" />
          </button>

          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 hover:bg-[#cc73f8]/20 flex items-center justify-center text-white transition-colors z-20 hidden md:flex">
             <ChevronRight className="w-5 h-5" />
          </button>

          <div className="relative h-64 sm:h-48 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg sm:text-xl leading-relaxed italic mb-8 max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <span className="text-[#cc73f8] text-sm font-medium">{testimonials[currentIndex].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-[#cc73f8] w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

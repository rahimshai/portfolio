import React, { useState } from 'react';
import { Mail, Phone, Send, Info, RefreshCw, Github, Linkedin } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARzL2K93vCPqGLOj-sg9CDsLmosIKpA8E",
  authDomain: "portfolio-54b95.firebaseapp.com",
  projectId: "portfolio-54b95",
  storageBucket: "portfolio-54b95.appspot.com",
  messagingSenderId: "104887106569",
  appId: "1:104887106569:web:a42441a4a46fec1f058cd8",
  measurementId: "G-M998KS6Y4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type SubmitStatus = {
  isSubmitting: boolean;
  success: boolean;
  error: string | null;
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    isSubmitting: false,
    success: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, success: false, error: null });

    try {
      await addDoc(collection(db, "contact-submissions"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date()
      });

      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus({ isSubmitting: false, success: true, error: null });

      setTimeout(() => {
        setSubmitStatus({ isSubmitting: false, success: false, error: null });
      }, 4000);
    } catch (error) {
      console.error("Firebase submission failed, falling back to WhatsApp: ", error);
      
      // Fallback: Open WhatsApp with pre-filled message
      const text = `Hi Rahim!%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
      window.open(`https://wa.me/918623082784?text=${text}`, '_blank');
      
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus({ isSubmitting: false, success: true, error: null });
      
      setTimeout(() => {
        setSubmitStatus({ isSubmitting: false, success: false, error: null });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/35 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-[#cc73f8]/10 border border-[#cc73f8]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#cc73f8] mb-3"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Connect</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#cc73f8] to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Info Grid */}
          <motion.div 
            className="md:col-span-5 flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Let’s build something amazing together. Reach out for project proposals, collaboration ideas, or business inquiries.
              </p>
            </div>

            <div className="space-y-5">
              <a href="mailto:shaikhrahim882@gmail.com" className="flex items-center p-4 bg-slate-900/40 border border-white/5 hover:border-[#cc73f8]/30 rounded-2xl group transition-all duration-300">
                <div className="p-3 bg-[#cc73f8]/10 border border-[#cc73f8]/20 group-hover:bg-[#cc73f8] group-hover:text-white rounded-xl text-[#cc73f8] mr-4 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</span>
                  <span className="text-gray-200 group-hover:text-[#cc73f8] transition-colors font-medium text-sm sm:text-base">shaikhrahim882@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/918623082784" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-900/40 border border-white/5 hover:border-[#cc73f8]/30 rounded-2xl group transition-all duration-300">
                <div className="p-3 bg-[#cc73f8]/10 border border-[#cc73f8]/20 group-hover:bg-[#cc73f8] group-hover:text-white rounded-xl text-[#cc73f8] mr-4 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">WhatsApp</span>
                  <span className="text-gray-200 group-hover:text-[#cc73f8] transition-colors font-medium text-sm sm:text-base">+91 8623082784</span>
                </div>
              </a>

              <a href="https://github.com/rahimshai" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-900/40 border border-white/5 hover:border-[#cc73f8]/30 rounded-2xl group transition-all duration-300">
                <div className="p-3 bg-[#cc73f8]/10 border border-[#cc73f8]/20 group-hover:bg-[#cc73f8] group-hover:text-white rounded-xl text-[#cc73f8] mr-4 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">GitHub</span>
                  <span className="text-gray-200 group-hover:text-[#cc73f8] transition-colors font-medium text-sm sm:text-base">github.com/rahimshai</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/rahim-shaikh-02b343194/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-slate-900/40 border border-white/5 hover:border-[#cc73f8]/30 rounded-2xl group transition-all duration-300">
                <div className="p-3 bg-[#cc73f8]/10 border border-[#cc73f8]/20 group-hover:bg-[#cc73f8] group-hover:text-white rounded-xl text-[#cc73f8] mr-4 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">LinkedIn</span>
                  <span className="text-gray-200 group-hover:text-[#cc73f8] transition-colors font-medium text-sm sm:text-base">Let's Connect</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form Panel */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card bg-slate-950/50 border border-white/5 p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#cc73f8]/50 focus:border-[#cc73f8] focus:outline-none text-white text-sm transition-all duration-300 placeholder:text-gray-600"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#cc73f8]/50 focus:border-[#cc73f8] focus:outline-none text-white text-sm transition-all duration-300 placeholder:text-gray-600"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#cc73f8]/50 focus:border-[#cc73f8] focus:outline-none text-white text-sm transition-all duration-300 placeholder:text-gray-600"
                  rows={5}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={submitStatus.isSubmitting}
                className={`w-full flex items-center justify-center font-bold text-sm text-white py-3.5 rounded-xl transition-all duration-300 shadow-md ${
                  submitStatus.isSubmitting 
                    ? 'bg-slate-800 text-gray-500 cursor-not-allowed shadow-none' 
                    : 'bg-gradient-to-r from-[#cc73f8] to-purple-600 hover:shadow-lg hover:shadow-[#cc73f8]/20 hover:-translate-y-0.5'
                }`}
              >
                {submitStatus.isSubmitting ? (
                  <span className="flex items-center">
                    <RefreshCw className="w-4 h-4 animate-spin mr-2" /> Sending message...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </span>
                )}
              </button>
              
              {submitStatus.success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 font-semibold text-center text-sm bg-green-500/10 border border-green-500/20 py-2.5 rounded-xl"
                >
                  🎉 Message sent successfully! I'll get back to you shortly.
                </motion.div>
              )}
              {submitStatus.error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 font-semibold text-center text-sm bg-red-500/10 border border-red-500/20 py-2.5 rounded-xl"
                >
                  ⚠️ {submitStatus.error}
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

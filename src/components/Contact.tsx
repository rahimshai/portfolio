import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyARzL2K93vCPqGLOj-sg9CDsLmosIKpA8E",
  authDomain: "portfolio-54b95.firebaseapp.com",
  projectId: "portfolio-54b95",
  storageBucket: "portfolio-54b95.firebasestorage.app",
  messagingSenderId: "104887106569",
  appId: "1:104887106569:web:a42441a4a46fec1f058cd8",
  measurementId: "G-M998KS6Y4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function Contact() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage form submission status
  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    success: false,
    error: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous submission status
    setSubmitStatus({ isSubmitting: true, success: false, error: null });

    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, "contact-submissions"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date()
      });

      // Clear form and show success message
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus({ 
        isSubmitting: false, 
        success: true, 
        error: null 
      });

      // Optional: Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus({ 
          isSubmitting: false, 
          success: false, 
          error: null 
        });
      }, 3000);

    } catch (error) {
      // Handle any errors during submission
      setSubmitStatus({ 
        isSubmitting: false, 
        success: false, 
        error: 'Failed to submit message. Please try again.'
      });
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-[#cc73f8] mr-3" />
                <span>shaikhrahim882@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-[#cc73f8] mr-3" />
                <span>+91 8623082784</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 text-[#cc73f8] mr-3" />
                <span>kharadi, pune , india</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#cc73f8] focus:border-transparent text-white"
                placeholder="Your name"
              />
            </div>
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#cc73f8] focus:border-transparent text-white"
                placeholder="Your email"
              />
            </div>
            
            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#cc73f8] focus:border-transparent text-white"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            
            {/* Submit Button with Loading State */}
            <button
              type="submit"
              disabled={submitStatus.isSubmitting}
              className={`w-full text-white py-3 rounded-lg transition-colors ${
                submitStatus.isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-[#cc73f8] hover:bg-[#b85ee4]'
              }`}
            >
              {submitStatus.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Success and Error Messages */}
            {submitStatus.success && (
              <div className="text-green-500 text-center mt-4">
                Message sent successfully!
              </div>
            )}
            {submitStatus.error && (
              <div className="text-red-500 text-center mt-4">
                {submitStatus.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
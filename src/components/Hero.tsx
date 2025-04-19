'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-1" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={textRef} className="text-center opacity-0">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">John Bell</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mb-8"
          >
            Full Stack Developer & Designer
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-12"
          >
            I create beautiful, functional, and user-friendly web applications.
            Let&apos;s build something amazing together.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float-1 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(100px, -50px) scale(1.1);
          }
          50% {
            transform: translate(50px, 50px) scale(0.9);
          }
          75% {
            transform: translate(-50px, -30px) scale(1.05);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes float-2 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(-80px, 30px) scale(0.95);
          }
          50% {
            transform: translate(30px, -40px) scale(1.05);
          }
          75% {
            transform: translate(60px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes float-3 {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(-30px, -60px) scale(1.1);
          }
          50% {
            transform: translate(40px, 30px) scale(0.95);
          }
          75% {
            transform: translate(-20px, 40px) scale(1.05);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 25s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 30s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 
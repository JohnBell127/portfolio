'use client';

import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const AnimatedSection = ({ children, id, className = '' }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection; 
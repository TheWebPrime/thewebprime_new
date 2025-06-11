'use client';

import { motion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export default function MotionWrapper({ children, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
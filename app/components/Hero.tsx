'use client';

import Link from 'next/link';
import MotionWrapper from './MotionWrapper';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100vh] overflow-hidden bg-black">
      <Particles
        className="absolute inset-0 z-0"
        options={{
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            number: { value: 20 },
            color: { value: '#ffffff' },
            size: { value: 2 },
            move: { enable: true, speed: 0.4 },
          },
        }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-white drop-shadow-md"
        >
          Build Your Business Website
        </motion.h1>
        <p className="mt-4 text-white/80 text-lg max-w-xl">
          Just $249. Fast, responsive, and custom-built for your business.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition hover:scale-105 hover:brightness-110"
          >
            Get Started
          </a>
          <a
            href="#demos"
            className="px-6 py-3 border border-white text-white rounded-lg text-sm hover:bg-white/10 transition"
          >
            See Demos
          </a>
        </div>
      </div>
    </section>
  );
}

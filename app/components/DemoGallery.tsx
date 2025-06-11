'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const placeholderDemos = [
  { title: 'Demo Website 1', status: 'Coming Soon' },
  { title: 'Demo Website 2', status: 'Coming Soon' },
  { title: 'Demo Website 3', status: 'Coming Soon' },
];

export default function DemoGallery() {
  return (
    <section id="demos" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Live Website Demos</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Explore our high-quality site templates — more launching soon.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {placeholderDemos.map((demo, idx) => (
            <Tilt
              key={idx}
              glareEnable={true}
              glareMaxOpacity={0.1}
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              transitionSpeed={400}
              className="rounded-xl"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-gradient-to-br from-blue-100/40 to-blue-50/20 p-6 rounded-xl shadow-md border border-gray-200 backdrop-blur-sm"
              >
                <div className="h-48 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {demo.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{demo.status}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
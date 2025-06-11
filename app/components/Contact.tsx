'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900"
        >
          Let&apos;s build something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-600 text-lg"
        >
          Reach out via WhatsApp or leave your message below. We'll get back within 24 hours.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/1234567890?text=Hi%20Web%20Prime%2C%20I%20want%20a%20business%20website!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition shadow-md"
          >
            💬 Chat on WhatsApp
          </motion.a>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-10 bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl border border-blue-100 text-left space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Doe"
              className="w-full p-3 border border-gray-300 placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm placeholder:text-gray-400 font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium placeholder:text-gray-400 text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              required
              placeholder="Tell us what you need..."
              rows={4}
              className="w-full p-3 border border-gray-300 placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
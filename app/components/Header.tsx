// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const navLinks = [
//   { label: 'Home', href: '#hero' },
//   { label: 'Features', href: '#features' },
//   { label: 'Pricing', href: '#pricing' },
//   { label: 'Demos', href: '#demos' },
//   { label: 'Contact', href: '#contact' },
// ];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState<string>('');
//   const [isAtTop, setIsAtTop] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Scroll shadow + blur
//   useEffect(() => {
//     const handleScroll = () => {
//       const y = window.scrollY;
//       setScrolled(window.scrollY > 10);
//       setIsAtTop(y < window.innerHeight * 0.7);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // ScrollSpy
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY + 120;
//       let current = '';

//       for (const link of navLinks) {
//         const section = document.querySelector(link.href);
//         if (section && section instanceof HTMLElement) {
//           const offsetTop = section.offsetTop;
//           if (scrollY >= offsetTop) current = link.href;
//         }
//       }

//       setActiveSection(current);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//   className={`fixed top-0 w-full p-5 z-50 transition-all duration-300 ${
//     scrolled
//       ? 'backdrop-blur-md bg-white/60 shadow-[0_2px_20px_rgba(0,123,255,0.1)] border-b border-blue-100'
//       : 'bg-transparent'
//   }`}
// >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
//         <Link href="/">
//           <span className="text-xl font-bold text-blue-700">The Web Prime</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 relative text-sm">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className={`px-1 py-0.5 transition relative ${
//                 activeSection === link.href
//                   ? 'text-blue-600 font-semibold'
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//             >
//               {link.label}
//               {activeSection === link.href && (
//                 <motion.div
//                   layoutId="underline"
//                   className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 rounded"
//                 />
//               )}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen((prev) => !prev)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <div className="md:hidden bg-white/90 backdrop-blur-md px-4 pb-4 space-y-2 shadow">
//           {navLinks.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               className={`block text-sm ${
//                 activeSection === link.href
//                   ? 'text-blue-600 font-semibold'
//                   : 'text-gray-700 hover:text-blue-600'
//               }`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Demos', href: '#demos' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setIsAtTop(y < window.innerHeight * 0.7); // in hero if less than 70% height
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSpy = () => {
      const scrollY = window.scrollY + 120;
      let current = '';

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section && section instanceof HTMLElement) {
          const offsetTop = section.offsetTop;
          if (scrollY >= offsetTop) current = link.href;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleSpy);
    handleSpy();
    return () => window.removeEventListener('scroll', handleSpy);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full p-5 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/60 shadow-[0_2px_20px_rgba(0,123,255,0.1)] border-b border-blue-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <span className={`text-xl font-bold transition ${
            isAtTop ? 'text-white' : 'text-blue-700'
          }`}>The Web Prime</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 relative text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-1 py-0.5 transition relative ${
                isAtTop
                  ? activeSection === link.href
                    ? 'text-white font-semibold'
                    : 'text-white/70 hover:text-white'
                  : activeSection === link.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="underline"
                  className={`absolute bottom-0 left-0 h-[2px] w-full ${
                    isAtTop ? 'bg-white' : 'bg-blue-600'
                  } rounded`}
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center pt-[360px] w-full overflow-hidden font-[family-name:var(--font-geist)]">
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/background.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Fading White Gradient at the base so it seamlessly meets the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[60%] from-[rgba(255,255,255,0)] to-[100%] to-white z-20" />
      </div>

      {/* Navigation Taskbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 w-full backdrop-blur-md bg-white/50 border-b border-white/20 transition-all"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[42px] font-bold text-gray-900 tracking-tighter">Aira</span>
        </div>

        {/* Taskbar */}
        <div className="hidden md:flex items-center justify-center gap-10 py-3 px-8">
          {['About us', 'Our Product', 'Our Team', 'Pricing', 'Contact us'].map((item) => (
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.5)', y: -2 }}
              whileTap={{ scale: 0.95 }}
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-[26px] px-5 py-2 rounded-full font-[family-name:var(--font-geist)] font-medium text-black hover:bg-gray-100 transition-all pointer-events-auto leading-none"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-[22px] font-medium text-black hover:opacity-70 transition-opacity pointer-events-auto">
            View Live Demo
          </button>
          <button className="px-8 py-3 rounded-full bg-black text-white text-[22px] font-medium shadow-sm hover:opacity-90 transition-opacity pointer-events-auto">
            Contact Sales
          </button>
        </div>
      </motion.nav>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 w-full max-w-[1400px] px-6 mx-auto flex flex-col items-center justify-center text-center gap-8 pointer-events-auto"
      >
        {/* Main Heading positioned cleanly over the video again */}
        <motion.h1 
          variants={itemVariants} 
          className="text-white text-[96px] md:text-[110px] font-semibold leading-[1.05] tracking-[-0.03em] m-0 drop-shadow-2xl pb-12"
        >
          Predicting the Unseen, <br /> Safeguarding your <span className="font-[family-name:var(--font-instrument)] font-normal italic text-[115px] md:text-[130px] leading-[1]">Indoor Air</span>
        </motion.h1>
      </motion.div>
    </section>
  );
}

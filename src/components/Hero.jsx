import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Import your images - update these paths according to your actual images
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";

export default function Hero({ isDark }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images for the slider
  const heroImages = [Image1, Image2, Image3, Image4];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const bgClass = isDark
    ? "from-slate-900 via-slate-800 to-slate-900"
    : "from-white via-blue-50 to-cyan-50";

  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <section
      className={`relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br ${bgClass} transition-colors duration-300 overflow-hidden`}
      id="hero"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/10" : "bg-cyan-400/20"
          }`}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl ${
            isDark ? "bg-blue-500/10" : "bg-blue-400/20"
          }`}
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Grid Pattern */}
        <div
          className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] ${
            isDark ? "opacity-20" : "opacity-10"
          }`}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-4"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-cyan-400 font-medium">INDIA</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-6xl lg:text-7xl font-bold ${textClass} leading-tight`}
            >
              <span className="block">Dr. Himanshu</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Bhayana
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-cyan-400 font-semibold tracking-wide"
            >
              Excellence in surgical precision
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg ${textMutedClass} max-w-md mx-auto lg:mx-0`}
            >
              Associate Professor specializing in Trauma Surgery, Joint
              Arthroplasty & Sports Medicine at PGIMER, Chandigarh
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="/publications"
                className={`px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold ${
                  isDark ? "hover:bg-cyan-400/10" : "hover:bg-cyan-400/5"
                } transition-all flex items-center justify-center gap-2 group`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Publications</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Background Glow */}
              <div
                className={`absolute inset-0 rounded-3xl blur-2xl ${
                  isDark
                    ? "bg-gradient-to-br from-cyan-400/20 to-blue-500/20"
                    : "bg-gradient-to-br from-cyan-300/30 to-blue-400/30"
                }`}
              ></div>

              {/* Image Slider - Wider and Shorter */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl aspect-[4/3] w-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={heroImages[currentImageIndex]}
                    alt="Dr. Himanshu Bhayana"
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDark
                      ? "from-slate-900/20 to-transparent"
                      : "from-white/10 to-transparent"
                  }`}
                ></div>
              </div>

              {/* Slider Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-cyan-400 scale-125"
                        : isDark
                        ? "bg-slate-600 hover:bg-slate-400"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              {/* Next/Previous Buttons */}
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? heroImages.length - 1 : prev - 1
                  )
                }
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark
                    ? "bg-slate-800/80 hover:bg-slate-700/80 text-white"
                    : "bg-white/80 hover:bg-white text-slate-700"
                } backdrop-blur-sm border border-cyan-400/30 transition-all text-sm`}
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex((prev) =>
                    prev === heroImages.length - 1 ? 0 : prev + 1
                  )
                }
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark
                    ? "bg-slate-800/80 hover:bg-slate-700/80 text-white"
                    : "bg-white/80 hover:bg-white text-slate-700"
                } backdrop-blur-sm border border-cyan-400/30 transition-all text-sm`}
              >
                ›
              </button>

              {/* Floating Badge */}
              <motion.div
                className={`absolute -bottom-3 -right-3 px-4 py-2 rounded-xl ${
                  isDark ? "bg-slate-800" : "bg-white"
                } border border-cyan-400/30 shadow-lg backdrop-blur-sm`}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span
                    className={`text-xs font-semibold ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    Available
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

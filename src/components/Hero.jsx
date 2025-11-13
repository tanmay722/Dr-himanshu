import { motion } from "framer-motion";
import Himanshu from "../assets/Himanshu-Bhayana.webp";

export default function Hero({ isDark }) {
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

  const bgClass = isDark
    ? "from-slate-900 via-slate-800 to-slate-900"
    : "from-white via-blue-50 to-cyan-50";

  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <section
      className={`relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br ${bgClass} transition-colors duration-300`}
      id="hero"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/10" : "bg-cyan-400/20"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl ${
            isDark ? "bg-blue-500/10" : "bg-blue-400/20"
          }`}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className={`text-5xl md:text-7xl font-bold ${textClass}`}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Dr. Himanshu
              </span>
              <br />
              <span>Bhayana</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-cyan-400 font-semibold"
            >
              Associate Professor, Orthopedic Surgery
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-lg ${textMutedClass}`}
            >
              Specializing in Trauma Surgery, Arthroplasty & Sports Medicine
            </motion.p>

            <motion.div
              variants={itemVariants}
              className={`flex items-center gap-2 ${textMutedClass}`}
            >
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span>PGIMER, Chandigarh, India</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-6 flex-wrap"
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/publications"
                className={`px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold ${
                  isDark ? "hover:bg-cyan-400/10" : "hover:bg-cyan-400/5"
                } transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Publications
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`absolute inset-0 rounded-2xl blur-xl ${
                isDark
                  ? "bg-gradient-to-br from-cyan-400/20 to-blue-500/20"
                  : "bg-gradient-to-br from-cyan-300/30 to-blue-400/30"
              }`}
            ></div>
            <img
              src={Himanshu}
              alt="Dr. Himanshu Bhayana"
              className={`relative w-full rounded-2xl border-2 border-cyan-400/30 shadow-2xl`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

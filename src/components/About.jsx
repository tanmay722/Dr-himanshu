import { motion } from "framer-motion";

export default function About({ isDark }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const credentials = [
    { label: "Publications", value: "38+", icon: "📚" },
    { label: "Years Experience", value: "15+", icon: "🏥" },
    { label: "Guest Talks", value: "6+", icon: "🎤" },
    { label: "Fellowships", value: "2", icon: "🌍" },
  ];

  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-gradient-to-br from-blue-50 via-white to-cyan-50";

  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-300" : "text-slate-600";
  const cardBg = isDark ? "bg-slate-800/50" : "bg-white";
  const cardBorder = isDark ? "border-cyan-400/20" : "border-cyan-300/30";

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className={`space-y-6 mb-12 text-lg ${textMutedClass}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants}>
            I am an Associate Professor in the Department of Orthopedics at
            PGIMER, Chandigarh, with a passion for advancing orthopedic surgery
            through innovative research, clinical excellence, and mentoring. My
            expertise spans trauma surgery, joint arthroplasty, sports medicine,
            and arthroscopy.
          </motion.p>

          <motion.p variants={itemVariants}>
            Driven by a commitment to improving patient outcomes and
            contributing to orthopedic knowledge, I have published extensively
            in peer-reviewed journals and actively participated in national and
            international conferences. My clinical practice combines
            evidence-based medicine with compassionate patient care.
          </motion.p>

          <motion.p variants={itemVariants}>
            I have completed specialized fellowships in arthroplasty, sports
            medicine, and arthroscopy in Germany, enhancing my technical skills
            and exposure to international best practices in orthopedic surgery.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              className={`${cardBg} p-6 rounded-lg border ${cardBorder} text-center group hover:border-cyan-400/50 transition-all`}
              variants={itemVariants}
              whileHover={{
                translateY: -10,
                boxShadow: isDark
                  ? "0 20px 40px rgba(6, 182, 212, 0.15)"
                  : "0 20px 40px rgba(6, 182, 212, 0.25)",
              }}
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">
                {item.icon}
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">
                {item.value}
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

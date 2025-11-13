import { motion } from "framer-motion";

export default function ProfessionalMemberships({ isDark }) {
  const memberships = [
    { title: "IOA Membership", id: "LM 11330", icon: "🎖️" },
    { title: "AO Membership", id: "100164010", icon: "🌐" },
    { title: "ISKSAA Membership", id: "1441", icon: "🏅" },
    { title: "DMC Registration", id: "DMC/R/07576", icon: "✓" },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 backdrop-blur-sm"
    : "bg-gradient-to-br from-white to-blue-50";

  const cardBg = isDark
    ? "bg-gradient-to-br from-slate-700/60 to-slate-600/40 backdrop-blur-sm hover:from-slate-700/80 hover:to-slate-600/60"
    : "bg-gradient-to-br from-white to-blue-50 hover:to-cyan-50";
  const cardBorder = isDark
    ? "border-slate-500/40 hover:border-cyan-400/50"
    : "border-cyan-300/30 hover:border-cyan-400/50";
  const textClass = isDark ? "text-slate-100" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-300" : "text-slate-600";
  const accentText = isDark ? "text-cyan-300" : "text-cyan-500";

  return (
    <section
      id="memberships"
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Professional Memberships
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {memberships.map((cert, index) => (
            <motion.div
              key={index}
              className={`${cardBg} border ${cardBorder} rounded-lg p-5 sm:p-6 text-center group transition-all`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-125 transition-transform inline-block">
                {cert.icon}
              </div>
              <h4
                className={`${textClass} font-semibold mb-1 text-sm sm:text-base`}
              >
                {cert.title}
              </h4>
              <p className={`${accentText} text-xs sm:text-sm font-medium`}>
                {cert.id}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

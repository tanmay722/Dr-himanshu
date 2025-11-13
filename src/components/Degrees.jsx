import { motion } from "framer-motion";

export default function Degrees({ isDark }) {
  const education = [
    {
      degree: "Diplomate of National Board (DNB)",
      specialty: "Orthopedics",
      year: "2016",
      institution: "National Board of Examinations, India",
    },
    {
      degree: "Masters of Surgery (MS)",
      specialty: "Orthopedics",
      year: "2015",
      institution: "University of Delhi, UCMS & GTB Hospital",
    },
    {
      degree: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
      specialty: "",
      year: "2010",
      institution: "University of Delhi, MAMC & LNJP Hospital",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    ? "bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900"
    : "bg-gradient-to-br from-blue-50 via-white to-cyan-50";

  const cardBg = isDark
    ? "bg-gradient-to-br from-slate-800/70 to-slate-700/50 backdrop-blur-sm hover:from-slate-800/90 hover:to-slate-700/70"
    : "bg-white hover:bg-blue-50";
  const cardBorder = isDark
    ? "border-slate-600/40 hover:border-cyan-400/40"
    : "border-cyan-300/30 hover:border-cyan-400/50";
  const textClass = isDark ? "text-slate-100" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";
  const yearColor = isDark ? "text-cyan-300" : "text-cyan-500";

  return (
    <section
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
      id="education"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Educational Qualifications
        </motion.h2>

        <motion.div
          className="space-y-3 sm:space-y-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`${cardBg} border ${cardBorder} rounded-lg p-5 sm:p-6 transition-all group`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ x: 5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2">
                <h4
                  className={`${textClass} font-semibold text-sm sm:text-base flex-1`}
                >
                  {edu.degree}
                </h4>
                <span
                  className={`${yearColor} font-bold text-sm sm:text-lg flex-shrink-0`}
                >
                  {edu.year}
                </span>
              </div>
              {edu.specialty && (
                <p className="text-cyan-400/80 text-xs sm:text-sm mb-2">
                  {edu.specialty}
                </p>
              )}
              <p className={`text-xs sm:text-sm ${textMutedClass}`}>
                {edu.institution}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

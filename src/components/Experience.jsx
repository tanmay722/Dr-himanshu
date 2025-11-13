import { motion } from "framer-motion";

export default function Experience({ isDark }) {
  const experiences = [
    {
      title: "Associate Professor",
      institution: "PGIMER, Chandigarh",
      period: "July 2023 - Present",
      description:
        "Leading orthopedic teaching and research programs. Mentoring residents and fellows in advanced trauma and joint surgery techniques.",
      icon: "🏆",
    },
    {
      title: "Assistant Professor",
      institution: "PGIMER, Chandigarh",
      period: "August 2019 - July 2023",
      description:
        "Managed Advanced Trauma Centre operations. Conducted clinical research and published multiple peer-reviewed articles.",
      icon: "📚",
    },
    {
      title: "Consultant Orthopedist",
      institution: "Primus Super Specialty Hospital, New Delhi",
      period: "September 2018 - August 2019",
      description:
        "Provided specialized orthopedic care. Performed complex joint and trauma surgeries with excellent patient outcomes.",
      icon: "🏥",
    },
    {
      title: "Senior Resident",
      institution: "UCMS & GTB Hospital, Delhi",
      period: "September 2015 - August 2018",
      description:
        "Comprehensive training in orthopedic trauma and surgery. Active participation in departmental research and academic programs.",
      icon: "🎓",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-gradient-to-br from-white via-blue-50 to-cyan-50";

  const cardBg = isDark ? "bg-slate-800/50" : "bg-white";
  const cardBorder = isDark ? "border-cyan-400/20" : "border-cyan-300/30";
  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}
      id="experience"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex gap-6 group"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xl group-hover:scale-125 transition-transform">
                  {exp.icon}
                </div>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-400 to-transparent mt-4"></div>
                )}
              </div>

              <div
                className={`${cardBg} border ${cardBorder} rounded-lg p-6 flex-1 group-hover:border-cyan-400/50 transition-all`}
              >
                <p className="text-sm text-cyan-400 font-semibold">
                  {exp.period}
                </p>
                <h3 className={`text-xl font-bold mt-2 ${textClass}`}>
                  {exp.title}
                </h3>
                <p className={`font-medium mt-1 ${textMutedClass}`}>
                  {exp.institution}
                </p>
                <p
                  className={`mt-3 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function Education() {
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

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      id="education"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-cyan-400 "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Educational Qualifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Degrees
            </motion.h3>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 border border-cyan-400/20 rounded-lg p-5 hover:border-cyan-400/50 transition-all group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold flex-1">
                      {edu.degree}
                    </h4>
                    <span className="text-cyan-400 font-bold text-lg ml-3">
                      {edu.year}
                    </span>
                  </div>
                  {edu.specialty && (
                    <p className="text-cyan-400 text-sm mb-2">
                      {edu.specialty}
                    </p>
                  )}
                  <p className="text-slate-400 text-sm">{edu.institution}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

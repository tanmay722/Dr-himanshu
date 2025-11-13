import { motion } from "framer-motion";

export default function GuestTalks({ isDark }) {
  const talks = [
    {
      title: "Complications in Orthopaedics Trauma",
      event: "Seminar on Orthopaedic and Rehabilitation Nursing",
      date: "June 2021",
    },
    {
      title: "Swashbuckler Approach to Distal Femur",
      event: "POACON 2019, Ludhiana",
      date: "October 2019",
    },
    {
      title: "Management of Lateral Ankle Instability",
      event: "PGI Foot and Ankle Course",
      date: "March 2020",
    },
    {
      title: "Management of Pin Track Infection",
      event: "PGI Deformity Course",
      date: "November 2019",
    },
    {
      title: "Surgical Fixation of Terrible Triad of Elbow Joint",
      event: "Annual Conference of North Zone Orthopaedics Association",
      date: "February 2020",
    },
    {
      title: "Role of Arthroscopy in Osteoarthritis Knee",
      event: "Orthopaedic Horizon, Delhi",
      date: "April 2017",
    },
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
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-gradient-to-br from-white via-blue-50 to-cyan-50";

  const cardBg = isDark ? "bg-slate-800/50" : "bg-white";
  const cardBorder = isDark ? "border-cyan-400/20" : "border-cyan-300/30";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section
      id="guest-talks"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Guest Talks & Lectures
        </motion.h2>

        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {talks.map((talk, index) => (
            <motion.div
              key={index}
              className={`${cardBg} border ${cardBorder} rounded-lg p-4 hover:border-cyan-400/50 transition-all group flex gap-4`}
              variants={itemVariants}
            >
              <div className="text-cyan-400 font-bold text-lg group-hover:text-cyan-300 transition-colors flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                  {talk.title}
                </h5>
                <p className={`text-xs mb-1 ${textMutedClass}`}>{talk.event}</p>
                <p className={`text-xs ${textMutedClass}`}>{talk.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

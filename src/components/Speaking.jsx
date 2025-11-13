import { motion } from "framer-motion";

export default function Speaking() {
  const awards = [
    {
      title: "Gold Medal Award for Best Poster Presentation",
      event: "PAIOCON 2017",
      topic:
        "Comparison of outcomes of shoulder function following RND and MRND",
      year: "March 2017",
    },
  ];

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

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      id="speaking"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Awards & Speaking Engagements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h3
              className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">🏆</span>
              Awards
            </motion.h3>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-amber-900/30 to-yellow-900/20 border border-amber-400/30 rounded-lg p-6 hover:border-amber-400/60 transition-all group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <h4 className="text-white font-semibold mb-2 group-hover:text-amber-300 transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-amber-400/80 text-sm mb-2">
                    {award.event}
                  </p>
                  <p className="text-slate-400 text-sm mb-2">{award.topic}</p>
                  <p className="text-slate-500 text-xs">{award.year}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">🎤</span>
              Guest Talks
            </motion.h3>

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
                  className="bg-slate-800/50 border border-cyan-400/20 rounded-lg p-4 hover:border-cyan-400/50 transition-all group flex gap-4"
                  variants={itemVariants}
                >
                  <div className="text-cyan-400 font-bold text-lg group-hover:text-cyan-300 transition-colors flex-shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                      {talk.title}
                    </h5>
                    <p className="text-slate-400 text-xs mb-1">{talk.event}</p>
                    <p className="text-slate-500 text-xs">{talk.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

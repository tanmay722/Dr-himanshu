import { motion } from "framer-motion";

export default function Awards({ isDark }) {
  const awards = [
    {
      title: "Gold Medal Award for Best Poster Presentation",
      event: "PAIOCON 2017",
      topic:
        "Comparison of outcomes of shoulder function following RND and MRND",
      year: "March 2017",
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
    ? "bg-gradient-to-br from-slate-900/90 via-amber-900/20 to-slate-900/90"
    : "bg-gradient-to-br from-blue-50 via-white to-white";

  const cardBg = isDark
    ? "bg-gradient-to-br from-amber-900/40 via-yellow-900/30 to-amber-900/40 backdrop-blur-sm hover:from-amber-900/60 hover:via-yellow-900/40"
    : "bg-gradient-to-br from-amber-100 to-yellow-100 hover:to-amber-100";
  const cardBorder = isDark
    ? "border-amber-600/50 hover:border-amber-400/60"
    : "border-amber-300/50 hover:border-amber-400/70";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";
  const headingColor = isDark ? "text-amber-200" : "text-amber-900";
  const eventColor = isDark ? "text-amber-300/90" : "text-amber-600";

  return (
    <section
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-amber-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Awards & Recognition
        </motion.h2>

        <motion.div
          className="space-y-4 sm:space-y-5"
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
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className={`${cardBg} border ${cardBorder} rounded-lg p-5 sm:p-6 transition-all group`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ x: 5 }}
            >
              <h4
                className={`${headingColor} font-semibold mb-2 text-sm sm:text-base group-hover:text-amber-300 transition-colors`}
              >
                {award.title}
              </h4>
              <p
                className={`${eventColor} text-xs sm:text-sm mb-2 font-medium`}
              >
                {award.event}
              </p>
              <p className={`text-xs sm:text-sm mb-2 ${textMutedClass}`}>
                {award.topic}
              </p>
              <p className={`text-xs ${textMutedClass}`}>{award.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

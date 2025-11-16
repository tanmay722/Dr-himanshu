import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Publications({ isDark }) {
  const publications = [
    {
      id: 1,
      title:
        "Comparative Study for Assessment of Functional Outcome of Intraarticular AO Type C Distal Humerus Fractures",
      authors: "Bhayana H, Pandey R, Dhammi IK et al.",
      journal: "JOIO",
      year: 2019,
      citation: "JOIO 53, 190–195 (2019)",
    },
    {
      id: 2,
      title:
        "Prevalence and factors associated with psychological morbidity, phantom limb pain in lower limb amputees",
      authors: "Bhayana H, Bu S, Saini UC, Mehra A",
      journal: "Injury",
      year: 2024,
      citation: "Injury. 2024 Nov;55(11):111828",
    },
    {
      id: 3,
      title:
        "Internal brace augmentation in elbow varus posteromedial rotatory instability",
      authors: "Greiner S, Voss A, Soler A, Bhayana H",
      journal: "Arch Orthop Trauma Surg",
      year: 2024,
      citation: "Arch Orthop Trauma Surg. 2024 Dec 18;145(1):62",
    },
    {
      id: 4,
      title:
        "Osteonecrosis in patients with inflammatory bowel disease: a systematic review and meta-analysis",
      authors: "Bhayana H, Sharma TK, Sharma A, et al.",
      journal: "Eur J Gastroenterol Hepatol",
      year: 2024,
      citation: "Eur J Gastroenterol Hepatol. 2024 May 1;36(5):513-519",
    },
    {
      id: 5,
      title:
        "Functional and Radiological Outcomes of Single-Stage Bilateral Total Hip Replacement",
      authors: "Kanojia RK, Basappa RK, Shah D, et al.",
      journal: "JOIO",
      year: 2025,
      citation: "JOIO (2025)",
    },
    {
      id: 6,
      title: "Spine and Trunk Injuries",
      authors: "Bhayana H, Mahr D",
      journal: "Injury and Health Risk Management in Sports. Springer",
      year: 2020,
      citation: "Springer, Berlin, Heidelberg (2020)",
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
    ? "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800"
    : "bg-gradient-to-br from-blue-50 via-white to-white";

  const cardBg = isDark ? "bg-slate-800/50" : "bg-white";
  const cardBorder = isDark ? "border-cyan-400/20" : "border-cyan-300/30";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
      id="publications"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Publications
        </motion.h2>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              className={`${cardBg} border ${cardBorder} rounded-lg p-6 hover:border-cyan-400/50 transition-all group`}
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="flex gap-4">
                <div className="text-3xl font-bold text-cyan-400/30 group-hover:text-cyan-400 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-semibold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {pub.title}
                  </h4>
                  <p className={`text-sm mb-3 ${textMutedClass}`}>
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span
                      className={isDark ? "bg-slate-700/50" : "bg-blue-100"}
                      style={{ color: isDark ? "inherit" : "#0369a1" }}
                    >
                      {pub.journal}
                    </span>
                    <span
                      className={isDark ? "bg-slate-700/50" : "bg-blue-100"}
                      style={{ color: isDark ? "inherit" : "#0369a1" }}
                    >
                      {pub.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/publications"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            View All Publications →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

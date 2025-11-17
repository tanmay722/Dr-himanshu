import { motion } from "framer-motion";
import profileImage from "../assets/about.jpg"; // Update with your actual image path

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const credentials = [
    { label: "Publications", value: "51+", icon: "📚" },
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

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300`}
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          {/* Text Content */}
          <motion.div
            className="space-y-4 md:space-y-6 text-base md:text-lg order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className={`${textMutedClass} leading-relaxed md:leading-loose`}
            >
              I am an Associate Professor in the Department of Orthopedics at
              PGIMER, Chandigarh, with a passion for advancing orthopedic
              surgery through innovative research, clinical excellence, and
              mentoring. My expertise spans trauma surgery, joint arthroplasty,
              sports medicine, and arthroscopy.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`${textMutedClass} leading-relaxed md:leading-loose`}
            >
              Driven by a commitment to improving patient outcomes and
              contributing to orthopedic knowledge, I have published extensively
              in peer-reviewed journals and actively participated in national
              and international conferences. My clinical practice combines
              evidence-based medicine with compassionate patient care.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`${textMutedClass} leading-relaxed md:leading-loose`}
            >
              I have completed specialized fellowships in arthroplasty, sports
              medicine, and arthroscopy in Germany, enhancing my technical
              skills and exposure to international best practices in orthopedic
              surgery.
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Elements */}
            <div
              className={`absolute -inset-2 sm:-inset-3 md:-inset-4 rounded-2xl ${
                isDark
                  ? "bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"
                  : "bg-gradient-to-r from-cyan-200/40 to-blue-300/40 blur-xl"
              } opacity-50`}
            ></div>

            <div
              className={`absolute -inset-1 sm:-inset-2 rounded-2xl ${
                isDark
                  ? "bg-gradient-to-r from-cyan-400/10 to-blue-500/10"
                  : "bg-gradient-to-r from-cyan-200/20 to-blue-300/20"
              }`}
            ></div>

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Professional portrait"
                className="w-full h-auto object-cover max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[600px]"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"
                    : "bg-gradient-to-t from-white/20 via-transparent to-transparent"
                }`}
              ></div>

              {/* Clickable Floating Badge */}
              <motion.button
                onClick={scrollToContact}
                className={`absolute bottom-4 md:bottom-6 left-4 md:left-6 ${
                  isDark
                    ? "bg-slate-800/90 hover:bg-slate-700/90"
                    : "bg-white/90 hover:bg-white"
                } backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-full shadow-lg cursor-pointer border-0 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: isDark
                    ? "0 10px 25px rgba(6, 182, 212, 0.3)"
                    : "0 10px 25px rgba(6, 182, 212, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                aria-label="Navigate to contact section"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span
                    className={`text-xs md:text-sm font-medium ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    Available for Consultation
                  </span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Credentials Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {credentials.map((item, index) => (
            <motion.div
              key={index}
              className={`${cardBg} p-4 md:p-6 rounded-xl border ${cardBorder} text-center group hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm`}
              variants={itemVariants}
              whileHover={{
                translateY: -6,
                scale: 1.02,
                boxShadow: isDark
                  ? "0 15px 30px rgba(6, 182, 212, 0.15)"
                  : "0 15px 30px rgba(6, 182, 212, 0.25)",
              }}
            >
              <div className="text-2xl md:text-3xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="text-xl md:text-2xl font-bold text-cyan-400 mb-1 md:mb-2">
                {item.value}
              </div>
              <div
                className={`text-xs md:text-sm font-medium ${
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

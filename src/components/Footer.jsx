import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaResearchgate,
  FaEnvelope,
  FaGraduationCap,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer({ isDark }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/dr_himanshu_pgi_ortho?igsh=Ymdqb2dsNWp2OG42",
      color: "hover:text-pink-500",
    },
    {
      name: "ResearchGate",
      icon: <FaResearchgate />,
      url: "https://www.researchgate.net/profile/Himanshu-Bhayana",
      color: "hover:text-emerald-400",
    },
    {
      name: "Google scholar link",
      icon: <FaGraduationCap />,
      url: "https://scholar.google.com/citations?user=jIfRmWMAAAAJ&hl=en",
      color: "hover:text-cyan-400",
    },
  ];

  const quickLinks = [
    "About",
    "Experience",
    "Education",
    "Publications",
    "Contact",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-400/10"
    : "bg-gradient-to-br from-slate-50 via-white to-slate-50 border-t border-cyan-300/30";

  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919599149380"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#22c55e",
        }}
        whileTap={{ scale: 0.9 }}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
        <motion.div
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white text-xs font-bold">!</span>
        </motion.div>
      </motion.a>

      {/* Left Side Social Media Icons - Visible on all screens */}
      <motion.div
        className="fixed left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3 sm:gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
              isDark
                ? "bg-slate-800/80 backdrop-blur-sm"
                : "bg-white/80 backdrop-blur-sm"
            } shadow-lg border ${
              isDark ? "border-slate-700" : "border-slate-200"
            } transition-all duration-300 ${link.color} text-base sm:text-lg`}
            whileHover={{
              scale: 1.15,
              x: 8,
            }}
            whileTap={{ scale: 0.95 }}
            title={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className={`${bgClass} transition-colors duration-300 relative`}>
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* === Responsive Grid === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
            {/* --- 1. About / Info --- */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-lg font-bold flex items-center gap-2 ${textClass}`}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">DR</span>
                </div>
                Dr. Himanshu Bhayana
              </h3>

              <motion.p
                className={`text-sm ${textMutedClass} leading-relaxed`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Associate Professor, Department of Orthopaedics at PGIMER,
                Chandigarh
              </motion.p>

              {/* Contact Info */}
              <motion.div
                className="space-y-1.5 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-cyan-500 text-xs flex-shrink-0" />
                  <a
                    href="mailto:himanshu.bhayana.mamc@gmail.com"
                    className="hover:text-cyan-400 transition-colors truncate"
                  >
                    himanshu.bhayana.mamc@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-cyan-500 text-xs flex-shrink-0" />
                  <span>+91 95991 49380</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-500 text-xs flex-shrink-0" />
                  <span>Chandigarh, India</span>
                </div>
              </motion.div>
            </motion.div>

            {/* --- 2. Quick Links --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className={`${textClass} font-semibold mb-3 text-sm`}>
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className={`transition-colors text-xs ${textMutedClass} hover:text-cyan-400 hover:translate-x-1 transform duration-200`}
                    >
                      {link}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/publications"
                    className={`transition-colors text-xs ${textMutedClass} hover:text-cyan-400 hover:translate-x-1 transform duration-200`}
                  >
                    All Publications
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* --- 3. Social Links (Hidden on small screens since they're on the left) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <h4 className={`${textClass} font-semibold mb-3 text-sm`}>
                Connect With Me
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isDark ? "bg-slate-700" : "bg-slate-200"
                    } transition-all duration-300 ${
                      link.color
                    } shadow-md hover:shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              {/* WhatsApp Quick Action */}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://wa.me/919599149380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-xs ${
                    isDark
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white px-3 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  <FaWhatsapp className="text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* === Footer Bottom Text === */}
          <motion.div
            className={`border-t ${
              isDark ? "border-cyan-400/10" : "border-cyan-300/30"
            } pt-6 text-center ${textMutedClass} text-xs transition-colors`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>© {currentYear} Dr. Himanshu Bhayana. All rights reserved.</p>
            <p className="mt-1">
              Built with dedication for orthopaedic education, clinical
              excellence, and research advancement.
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}

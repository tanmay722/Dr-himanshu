import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaResearchgate,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
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
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/himanshu-bhayana",
      color: "hover:text-blue-500",
    },
    {
      name: "ResearchGate",
      icon: <FaResearchgate />,
      url: "https://www.researchgate.net/profile/Himanshu-Bhayana",
      color: "hover:text-emerald-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:himanshu.bhayana.mamc@gmail.com",
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
    ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-400/10"
    : "bg-gradient-to-r from-white via-blue-50 to-white border-t border-cyan-300/30";

  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <footer className={`${bgClass} transition-colors duration-300`}>
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* === Top Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* --- 1. About / Info --- */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 flex items-center gap-2 ${textClass}`}
            >
              <div className="w-7 h-7 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xs">DR</span>
              </div>
              Dr. Himanshu Bhayana
            </h3>
            <p className={`text-sm ${textMutedClass}`}>
              Associate Professor, Department of Orthopaedics
            </p>
            <p className={`text-sm ${textMutedClass}`}>
              PGIMER, Chandigarh, India
            </p>

            {/* Contact Info */}
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-cyan-500" />
                <a
                  href="mailto:himanshu.bhayana.mamc@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  himanshu.bhayana.mamc@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-cyan-500" /> +91 95991 49380
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cyan-500" /> Chandigarh, India
              </p>
            </div>
          </div>

          {/* --- 2. Quick Links --- */}
          <div>
            <h4 className={`${textClass} font-semibold mb-4`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className={`transition-colors text-sm ${textMutedClass} hover:text-cyan-400`}
                  >
                    {link}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/publications"
                  className={`transition-colors text-sm ${textMutedClass} hover:text-cyan-400`}
                >
                  All Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* --- 3. Resources --- */}
          <div>
            <h4 className={`${textClass} font-semibold mb-4`}>Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/publications"
                  className={`transition-colors text-sm ${textMutedClass} hover:text-cyan-400`}
                >
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-colors text-sm ${textMutedClass} hover:text-cyan-400`}
                >
                  Guest Talks & Seminars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`transition-colors text-sm ${textMutedClass} hover:text-cyan-400`}
                >
                  Workshops Attended
                </a>
              </li>
            </ul>
          </div>

          {/* --- 4. Social Links --- */}
          <div>
            <h4 className={`${textClass} font-semibold mb-4`}>Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className={`text-2xl ${textMutedClass} transition-colors ${link.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* === Footer Bottom Text === */}
        <motion.div
          className={`border-t ${
            isDark ? "border-cyan-400/10" : "border-cyan-300/30"
          } pt-8 text-center ${textMutedClass} text-sm transition-colors`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Dr. Himanshu Bhayana. All rights reserved.</p>
          <p className="mt-2">
            Built with dedication for orthopaedic education, clinical
            excellence, and research advancement.
          </p>
          <p className="mt-1">
            📧{" "}
            <a
              href="mailto:himanshu.bhayana.mamc@gmail.com"
              className="text-cyan-500 hover:text-blue-500 font-medium"
            >
              himanshu.bhayana.mamc@gmail.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

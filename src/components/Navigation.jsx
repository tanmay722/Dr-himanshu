import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import {
  HiOutlineUser,
  HiBriefcase,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineMail,
} from "react-icons/hi";

export default function Navigation({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about", icon: HiOutlineUser },
    { label: "Experience", id: "experience", icon: HiBriefcase },
    { label: "Education", id: "education", icon: HiOutlineAcademicCap },
    { label: "Memberships", id: "memberships", icon: HiOutlineAcademicCap },
    { label: "Guest Talks", id: "guest-talks", icon: HiOutlineBookOpen },
    { label: "Publications", id: "publications", icon: HiOutlineBookOpen },
    { label: "Testimonials", id: "testimonials", icon: HiOutlineUser },
    { label: "Contact", id: "contact", icon: HiOutlineMail },
  ];

  const scrollToSection = (id) => {
    // If we're not on the home page, navigate to home page first with hash
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      // If we're on home page, scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const bgClass = isDark
    ? isScrolled
      ? "bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-lg shadow-lg shadow-slate-950/20"
      : "bg-transparent"
    : isScrolled
    ? "bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 backdrop-blur-lg shadow-lg shadow-blue-200/20"
    : "bg-transparent";

  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 sm:px-6 2xl:px-8">
        <div className={`py-4 flex justify-between items-center ${textClass}`}>
          {/* Logo */}
          <motion.div
            className="cursor-pointer flex items-center gap-2 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.location.href = "/";
              }
            }}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-bold text-xs">DR</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hidden sm:inline">
              Dr. Himanshu
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium flex items-center gap-2 rounded-lg transition-all duration-300 ${
                    isDark
                      ? "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
                      : "text-slate-700 hover:text-cyan-600 hover:bg-blue-100/60"
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
            <Link
              to="/gallery"
              className={`px-3 py-2 text-sm font-medium flex items-center gap-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
                  : "text-slate-700 hover:text-cyan-600 hover:bg-blue-100/60"
              }`}
            >
              <HiOutlineBookOpen size={18} />
              <span>Gallery</span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-slate-800/60 text-yellow-400 hover:bg-slate-700/80"
                  : "bg-blue-100/60 text-slate-700 hover:bg-blue-200/80"
              }`}
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.95 }}
              title="Toggle theme"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              style={{
                background: isDark
                  ? "rgba(30, 41, 59, 0.6)"
                  : "rgba(191, 219, 254, 0.6)",
              }}
            >
              {isOpen ? (
                <FiX
                  size={24}
                  className={isDark ? "text-cyan-400" : "text-cyan-600"}
                />
              ) : (
                <FiMenu
                  size={24}
                  className={isDark ? "text-cyan-400" : "text-cyan-600"}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`md:hidden pb-4 overflow-hidden rounded-2xl mb-4 ${
                isDark
                  ? "bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/50"
                  : "bg-gradient-to-b from-blue-50/90 to-white/90 border border-blue-200/50"
              }`}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      variants={menuItemVariants}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isDark
                          ? "text-slate-200 hover:text-cyan-400 hover:bg-slate-700/60 hover:translate-x-1"
                          : "text-slate-700 hover:text-cyan-600 hover:bg-blue-100/60 hover:translate-x-1"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={20} className="flex-shrink-0" />
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}
                <Link
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isDark
                      ? "text-slate-200 hover:text-cyan-400 hover:bg-slate-700/60 hover:translate-x-1"
                      : "text-slate-700 hover:text-cyan-600 hover:bg-blue-100/60 hover:translate-x-1"
                  }`}
                >
                  <HiOutlineBookOpen size={20} className="flex-shrink-0" />
                  <span>Gallery</span>
                </Link>
              </div>

              {/* Divider */}
              <div
                className={`my-2 mx-4 h-px ${
                  isDark ? "bg-slate-700/50" : "bg-blue-200/50"
                }`}
              ></div>

              {/* Mobile Theme Toggle with Label */}
              <div className="px-4 py-2">
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isDark
                      ? "text-slate-200 bg-slate-700/30 hover:bg-slate-700/60"
                      : "text-slate-700 bg-blue-100/30 hover:bg-blue-100/60"
                  }`}
                >
                  {isDark ? (
                    <FiSun size={20} className="text-yellow-400" />
                  ) : (
                    <FiMoon size={20} className="text-slate-600" />
                  )}
                  <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

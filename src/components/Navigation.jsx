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
  HiChatAlt2,
  HiPhotograph,
  HiViewGrid,
  HiPresentationChartLine,
  HiBadgeCheck,
} from "react-icons/hi";

export default function Navigation({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about", icon: HiOutlineUser },
    { label: "Experience", id: "experience", icon: HiBriefcase },
    { label: "Education", id: "education", icon: HiOutlineAcademicCap },
    { label: "Memberships", id: "memberships", icon: HiBadgeCheck },
    { label: "Guest Talks", id: "guest-talks", icon: HiPresentationChartLine },
    { label: "Publications", id: "publications", icon: HiOutlineBookOpen },
    { label: "Testimonials", id: "testimonials", icon: HiChatAlt2 },
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const bgClass = isDark
    ? isScrolled
      ? "bg-slate-900/95 backdrop-blur-xl shadow-xl"
      : "bg-transparent"
    : isScrolled
    ? "bg-white/95 backdrop-blur-xl shadow-xl"
    : "bg-transparent";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="py-3 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="cursor-pointer flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              location.pathname === "/"
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : (window.location.href = "/")
            }
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xs">DR</span>
            </div>
            <span className="text-base font-bold hidden sm:block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dr. Himanshu
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2.5 py-2 flex items-center gap-1.5 text-sm rounded-lg transition-all ${
                    isDark
                      ? "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
                      : "text-slate-700 hover:text-cyan-600 hover:bg-blue-100/60"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}

            {/* Pages */}
            <Link
              to="/procedures"
              className={`px-2.5 py-2 flex items-center gap-1.5 text-sm rounded-lg ${
                isDark
                  ? "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
                  : "text-slate-700 hover:text-cyan-600 hover:bg-blue-100/60"
              }`}
            >
              <HiViewGrid size={16} />
              Procedures
            </Link>

            <Link
              to="/gallery"
              className={`px-2.5 py-2 flex items-center gap-1.5 text-sm rounded-lg ${
                isDark
                  ? "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
                  : "text-slate-700 hover:text-cyan-600 hover:bg-blue-100/60"
              }`}
            >
              <HiPhotograph size={16} />
              Gallery
            </Link>

            <Link
              to="/media"
              className={`px-2.5 py-2 flex items-center gap-1.5 text-sm rounded-lg ${
                isDark
                  ? "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
                  : "text-slate-700 hover:text-cyan-600 hover:bg-blue-100/60"
              }`}
            >
              <HiPhotograph size={16} />
              Media
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition ${
                isDark
                  ? "bg-slate-800/70 text-yellow-400"
                  : "bg-blue-100/60 text-slate-700"
              }`}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FiX size={22} className="text-cyan-400" />
              ) : (
                <FiMenu size={22} className="text-cyan-400" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`md:hidden rounded-2xl mt-2 mb-4 overflow-hidden ${
                isDark
                  ? "bg-slate-800/95 backdrop-blur-xl border border-slate-700/40"
                  : "bg-white/95 backdrop-blur-xl border border-blue-200/40"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="py-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-2 px-5 py-3.5 text-[15px] rounded-lg transition ${
                        isDark
                          ? "text-slate-200 hover:bg-slate-700/60"
                          : "text-slate-700 hover:bg-blue-100/60"
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}

                {/* Divider */}
                <div
                  className={`mx-5 my-2 h-px ${
                    isDark ? "bg-slate-700/40" : "bg-blue-200/60"
                  }`}
                />

                {/* Procedures */}
                <Link
                  to="/procedures"
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center gap-2 px-5 py-3.5 text-[15px] rounded-lg transition ${
                    isDark
                      ? "text-slate-200 hover:bg-slate-700/60"
                      : "text-slate-700 hover:bg-blue-100/60"
                  }`}
                >
                  <HiViewGrid size={18} />
                  Procedures
                </Link>

                {/* Gallery */}
                <Link
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center gap-2 px-5 py-3.5 text-[15px] rounded-lg transition ${
                    isDark
                      ? "text-slate-200 hover:bg-slate-700/60"
                      : "text-slate-700 hover:bg-blue-100/60"
                  }`}
                >
                  <HiPhotograph size={18} />
                  Gallery
                </Link>

                {/* Media */}
                <Link
                  to="/media"
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center gap-2 px-5 py-3.5 text-[15px] rounded-lg transition ${
                    isDark
                      ? "text-slate-200 hover:bg-slate-700/60"
                      : "text-slate-700 hover:bg-blue-100/60"
                  }`}
                >
                  <HiPhotograph size={18} />
                  Media
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

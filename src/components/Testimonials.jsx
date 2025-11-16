import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiMessageCircle,
  FiEdit3,
  FiHeart,
} from "react-icons/fi";

export default function Testimonials({ isDark }) {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT9p6JYSgvlmQSSx5lXMp9Y6MHVtB0OzMv8qv2tClrnFZUrC2PjvsQ_1HxiVBdKYF4ttEu3yysd05KT/pub?gid=1900309089&single=true&output=tsv";

  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdIIB1KZGmCdO71u-1bxI92yqOPTm-lnHjaqMT_akdDsx6zog/viewform?usp=dialog";

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(SHEET_URL);
        const tsvText = await res.text();

        const rows = tsvText.split("\n").filter(Boolean);
        const rawHeaders = rows[0].split("\t");
        const headers = rawHeaders.map((h) => h.trim());

        const data = rows.slice(1).map((row) => {
          const values = row.split("\t");
          const obj = {};
          headers.forEach((h, i) => {
            obj[h] = values[i] ? values[i].trim() : "";
          });
          return obj;
        });

        const approved = data.filter(
          (t) => t["Approved"]?.toLowerCase() === "yes"
        );

        setTestimonials(approved);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      }
    }

    load();
  }, []);

  // Items per screen based on breakpoints
  const getItemsPerScreen = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 1024) return 3; // Large screens
    if (window.innerWidth >= 768) return 2; // Medium screens
    return 1; // Small screens
  };

  const [itemsPerScreen, setItemsPerScreen] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerScreen(getItemsPerScreen());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (testimonials.length === 0 || isPaused) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + itemsPerScreen;
        return nextIndex >= testimonials.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [testimonials.length, isPaused, itemsPerScreen]);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + itemsPerScreen;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  }, [testimonials.length, itemsPerScreen]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - itemsPerScreen;
      return prevIndex < 0
        ? Math.max(0, testimonials.length - itemsPerScreen)
        : prevIndex;
    });
  }, [testimonials.length, itemsPerScreen]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index * itemsPerScreen);
  };

  // Theme classes
  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    : "bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/50";

  const cardBg = isDark
    ? "bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-lg"
    : "bg-white/95 backdrop-blur-lg";

  const borderClass = isDark ? "border-slate-700/50" : "border-slate-200/80";

  const textClass = isDark ? "text-white" : "text-slate-800";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";

  // Get current testimonials to display
  const currentTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerScreen
  );

  // Add empty placeholders if needed
  while (currentTestimonials.length < itemsPerScreen) {
    currentTestimonials.push(
      ...testimonials.slice(0, itemsPerScreen - currentTestimonials.length)
    );
  }

  const totalSlides = Math.ceil(testimonials.length / itemsPerScreen);

  if (testimonials.length === 0) {
    return (
      <section
        id="testimonials"
        className={`py-16 px-6 ${bgClass} transition-colors duration-300`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <FiHeart className="text-rose-500" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Heartfelt Stories
              </h2>
              <FiHeart className="text-purple-500" size={28} />
            </div>
            <p className={`text-lg ${textMutedClass}`}>
              Loading patient experiences...
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 ${bgClass} transition-colors duration-300 overflow-hidden`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Creative Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <FiHeart className="text-rose-500 animate-pulse" size={32} />
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-rose-500 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Voices of Healing
            </h2>
            <FiHeart className="text-purple-500 animate-pulse" size={32} />
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </motion.div>
          <p
            className={`text-xl ${textMutedClass} font-light max-w-2xl mx-auto`}
          >
            Real journeys, real transformations
          </p>
        </motion.div>

        {/* Compact Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className={`absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-2xl backdrop-blur-lg border ${borderClass} ${cardBg} shadow-2xl transition-all duration-300 hover:scale-110 group`}
          >
            <FiChevronLeft
              size={20}
              className={
                isDark
                  ? "text-cyan-400 group-hover:text-cyan-300"
                  : "text-blue-600 group-hover:text-blue-500"
              }
            />
          </button>

          <button
            onClick={nextTestimonial}
            className={`absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-2xl backdrop-blur-lg border ${borderClass} ${cardBg} shadow-2xl transition-all duration-300 hover:scale-110 group`}
          >
            <FiChevronRight
              size={20}
              className={
                isDark
                  ? "text-cyan-400 group-hover:text-cyan-300"
                  : "text-blue-600 group-hover:text-blue-500"
              }
            />
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-hidden px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
              >
                {currentTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${cardBg} border ${borderClass} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[280px] flex flex-col justify-between`}
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <FiMessageCircle
                        size={24}
                        className={isDark ? "text-cyan-400" : "text-blue-400"}
                      />
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 mb-4">
                      <p
                        className={`text-sm leading-relaxed ${textClass} font-light line-clamp-5`}
                      >
                        "{testimonial["Testimonial"]}"
                      </p>
                    </div>

                    {/* Patient Info */}
                    <div className="border-t pt-4 border-slate-700/30">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              size={14}
                              className={
                                i < (Number(testimonial["Rating"]) || 5)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : isDark
                                  ? "text-slate-600"
                                  : "text-slate-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <h3 className={`font-bold text-base ${textClass}`}>
                        {testimonial["Name"]}
                      </h3>
                      <p className={`text-xs ${textMutedClass}`}>Patient</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Compact Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerScreen) === index
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 scale-125"
                    : isDark
                    ? "bg-slate-600 hover:bg-slate-500"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Compact Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mt-8"
        >
          <a
            href="/testimonials"
            className={`group relative overflow-hidden px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
                : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2 justify-center text-sm">
              <FiMessageCircle size={16} />
              View All Stories
            </span>
          </a>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 ${
              isDark
                ? "border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                : "border-blue-400/50 text-blue-600 hover:bg-blue-50"
            }`}
          >
            <span className="relative z-10 flex items-center gap-2 justify-center text-sm">
              <FiEdit3 size={14} />
              Share Experience
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// import { useEffect, useState, useRef } from "react";

// export default function Testimonials({ isDark }) {
//   const [testimonials, setTestimonials] = useState([]);
//   const scrollRef = useRef(null);

//   // ✅ Your Google Sheet TSV link (correct with gid)
//   const SHEET_URL =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vT9p6JYSgvlmQSSx5lXMp9Y6MHVtB0OzMv8qv2tClrnFZUrC2PjvsQ_1HxiVBdKYF4ttEu3yysd05KT/pub?gid=1900309089&single=true&output=tsv";

//   // Google Form (write review)
//   const FORM_URL =
//     "https://docs.google.com/forms/d/e/1FAIpQLSdIIB1KZGmCdO71u-1bxI92yqOPTm-lnHjaqMT_akdDsx6zog/viewform?usp=dialog";

//   useEffect(() => {
//     async function load() {
//       try {
//         const res = await fetch(SHEET_URL);
//         const tsvText = await res.text();

//         const rows = tsvText.split("\n").filter(Boolean);

//         // CLEAN HEADERS
//         const rawHeaders = rows[0].split("\t");
//         const headers = rawHeaders.map((h) => h.trim());

//         // PARSE ROWS SAFELY
//         const data = rows.slice(1).map((row) => {
//           const values = row.split("\t");
//           const obj = {};

//           headers.forEach((h, i) => {
//             obj[h] = values[i] ? values[i].trim() : "";
//           });

//           return obj;
//         });

//         // FILTER by Approved column
//         const approved = data.filter(
//           (t) => t["Approved"]?.toLowerCase() === "yes"
//         );

//         setTestimonials(approved);
//       } catch (error) {
//         console.error("Error loading testimonials:", error);
//       }
//     }

//     load();
//   }, []);

//   const cardBg = isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800";

//   return (
//     <section className="py-20 px-6">
//       <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//         Patient Stories
//       </h2>

//       {/* Horizontal Scroll Carousel */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth hide-scrollbar"
//       >
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className={`snap-center flex-shrink-0 w-full sm:w-[70%] md:w-[45%] lg:w-[32%] ${cardBg} rounded-3xl shadow-xl p-6 border border-slate-200`}
//           >
//             {/* Testimonial Text */}
//             <p className="text-sm leading-relaxed mb-4 max-h-32 line-clamp-4 overflow-hidden">
//               {t["Testimonial"] ? t["Testimonial"].slice(0, 180) : ""}...
//             </p>

//             {/* Patient Name */}
//             <h3 className="mt-4 font-bold text-lg">{t["Name"]}</h3>

//             {/* Rating */}
//             <p className="text-yellow-500 text-lg">
//               {"★".repeat(Number(t["Rating"]) || 5)}
//             </p>

//             <p className="text-slate-400 text-sm">Patient</p>
//           </div>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex justify-center gap-6 mt-10">
//         <a
//           href="/testimonials"
//           className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-xl font-semibold shadow-md"
//         >
//           Read All Testimonials
//         </a>

//         <a
//           href={FORM_URL}
//           target="_blank"
//           className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-semibold shadow-md"
//         >
//           Write a Review
//         </a>
//       </div>
//     </section>
//   );
// }

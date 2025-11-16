import { useEffect, useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Testimonials({ isDark }) {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef(null);
  const [itemsPerScreen, setItemsPerScreen] = useState(3);

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

  // Set items per screen based on window size
  useEffect(() => {
    const updateItemsPerScreen = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerScreen(3);
      else if (width >= 768) setItemsPerScreen(2);
      else setItemsPerScreen(1);
    };

    updateItemsPerScreen();
    window.addEventListener("resize", updateItemsPerScreen);
    return () => window.removeEventListener("resize", updateItemsPerScreen);
  }, []);

  // Auto-scroll functionality - infinite loop
  useEffect(() => {
    if (testimonials.length === 0) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [testimonials.length]);

  // Get visible testimonials for current index
  const getVisibleTestimonials = () => {
    if (testimonials.length === 0) return [];

    const visible = [];
    for (let i = 0; i < itemsPerScreen; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  const cardBg = isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800";
  const arrowBg = isDark
    ? "bg-slate-800/80 hover:bg-slate-700"
    : "bg-white/80 hover:bg-white";
  const arrowColor = isDark ? "text-cyan-400" : "text-slate-700";

  return (
    <section className="py-20 px-6">
      <h2 className="text-center text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Patient Stories
      </h2>

      {/* Testimonial Grid */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentIndex(
              (prev) => (prev - 1 + testimonials.length) % testimonials.length
            )
          }
          className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 ${arrowBg} ${arrowColor} rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-slate-200`}
        >
          <FiChevronLeft size={20} />
        </button>

        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          }
          className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 ${arrowBg} ${arrowColor} rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-slate-200`}
        >
          <FiChevronRight size={20} />
        </button>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 transition-all duration-500">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`${cardBg} rounded-3xl shadow-xl p-6 border border-slate-200 max-h-[250px] flex flex-col justify-between transition-transform duration-500 hover:scale-105`}
            >
              {/* Testimonial Text */}
              <p className="text-sm leading-relaxed mb-4 line-clamp-5">
                {testimonial["Testimonial"]
                  ? testimonial["Testimonial"].slice(0, 200)
                  : ""}
                {testimonial["Testimonial"] &&
                testimonial["Testimonial"].length > 200
                  ? "..."
                  : ""}
              </p>

              {/* Patient Info */}
              <div>
                <h3 className="font-bold text-lg mb-2">
                  {testimonial["Name"]}
                </h3>
                <p className="text-yellow-500 text-lg mb-1">
                  {"★".repeat(Number(testimonial["Rating"]) || 5)}
                </p>
                <p className="text-slate-400 text-sm">Patient</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        <a
          href="/testimonials"
          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105"
        >
          Read All Testimonials
        </a>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105"
        >
          Write a Review
        </a>
      </div>
    </section>
  );
}

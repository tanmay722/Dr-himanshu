import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TestimonialsPage({ isDark }) {
  const [testimonials, setTestimonials] = useState([]);

  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT9p6JYSgvlmQSSx5lXMp9Y6MHVtB0OzMv8qv2tClrnFZUrC2PjvsQ_1HxiVBdKYF4ttEu3yysd05KT/pub?gid=1900309089&single=true&output=tsv";

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch(SHEET_URL);
        const tsvText = await res.text();

        const rows = tsvText.split("\n").filter(Boolean);
        const headers = rows[0].split("\t");

        const data = rows.slice(1).map((row) => {
          const values = row.split("\t");
          const obj = {};
          headers.forEach((h, i) => {
            obj[h.trim()] = values[i] ? values[i].trim() : "";
          });
          return obj;
        });

        const approved = data.filter(
          (t) => t["Approved"]?.toLowerCase() === "yes"
        );

        setTestimonials(approved);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    }

    fetchTestimonials();
  }, []);

  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-gradient-to-br from-white via-blue-50 to-cyan-50";

  const cardBg = isDark ? "bg-slate-800" : "bg-white";
  const cardBorder = isDark ? "border-slate-700" : "border-slate-200";
  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <div
      className={`min-h-screen ${bgClass} pt-32 px-6 pb-20 transition-colors duration-300`}
    >
      {/* Back to Home Link */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
            isDark
              ? "bg-slate-800 hover:bg-slate-700 text-cyan-400"
              : "bg-white hover:bg-blue-50 text-cyan-600"
          } shadow-lg border ${cardBorder}`}
        >
          ← Back to Home
        </Link>
      </div>

      <h2 className={`text-center text-4xl font-bold mb-12 ${textClass}`}>
        Patient Testimonials
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 shadow-lg border ${cardBg} ${cardBorder} transition-all duration-300 hover:shadow-xl hover:scale-105`}
          >
            <p className={`text-sm mb-4 ${textMutedClass}`}>{t.Testimonial}</p>
            <h3 className={`font-bold ${textClass}`}>{t.Name}</h3>
            <p className="text-yellow-500 text-lg">★★★★★</p>
            <p className={`text-sm ${textMutedClass}`}>Patient</p>
          </div>
        ))}
      </div>

      {testimonials.length === 0 && (
        <div className="text-center py-12">
          <p className={`text-lg ${textMutedClass}`}>Loading testimonials...</p>
        </div>
      )}
    </div>
  );
}

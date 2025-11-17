import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

export default function ProcedureCard({ data, isDark }) {
  const [open, setOpen] = useState(false);

  const cardBg = isDark ? "bg-slate-800/60" : "bg-white";
  const border = isDark ? "border-cyan-400/10" : "border-cyan-300/30";
  const titleColor = isDark ? "text-cyan-300" : "text-cyan-600";
  const textColor = isDark ? "text-slate-200" : "text-slate-900";
  const muted = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <>
      {/* CARD */}
      <motion.div
        className={`rounded-2xl overflow-hidden shadow-xl border ${border} ${cardBg} cursor-pointer backdrop-blur-sm`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {/* FIXED HEIGHT IMAGE */}
        <div className="h-52 overflow-hidden rounded-t-2xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h3 className={`text-lg font-bold mb-2 ${titleColor} line-clamp-1`}>
            {data.title}
          </h3>
          <p className={`text-sm mb-4 ${muted}`}>{data.short}</p>

          <button
            onClick={() => setOpen(true)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              isDark
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md"
                : "bg-cyan-500 text-white shadow-md hover:bg-cyan-600"
            }`}
          >
            Read more
          </button>
        </div>
      </motion.div>

      {/* MODAL */}
      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto ${
              isDark
                ? "bg-black/60 backdrop-blur-sm"
                : "bg-black/30 backdrop-blur-sm"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className={`w-full max-w-lg sm:max-w-2xl md:max-w-3xl rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] ${
                isDark
                  ? "bg-slate-800/90 border border-cyan-400/20"
                  : "bg-white/95 border border-cyan-300/30"
              }`}
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 30, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* TOP HEADER */}
              <div
                className={`relative px-4 py-3 sm:px-6 sm:py-4 ${
                  isDark
                    ? "bg-gradient-to-r from-cyan-600/20 to-blue-600/20"
                    : "bg-gradient-to-r from-cyan-100 to-blue-100"
                }`}
              >
                <h2 className={`text-lg sm:text-xl font-bold ${titleColor}`}>
                  {data.title}
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className={`absolute top-2 right-2 sm:top-3 sm:right-3 p-2 rounded-full shadow-md transition ${
                    isDark
                      ? "bg-slate-900/70 hover:bg-slate-700"
                      : "bg-white hover:bg-slate-200"
                  }`}
                >
                  <AiOutlineClose
                    size={20}
                    className={isDark ? "text-white" : "text-slate-800"}
                  />
                </button>
              </div>

              {/* CONTENT */}
              <div className="px-4 py-4 sm:px-6 sm:py-6">
                <p className={`text-sm sm:text-base mb-4 ${muted}`}>
                  {data.short}
                </p>

                <div
                  className={`text-sm leading-relaxed ${textColor} space-y-4`}
                >
                  <p>{data.full}</p>

                  {/* BENEFITS */}
                  <div
                    className={`mt-4 p-3 sm:p-4 rounded-xl ${
                      isDark ? "bg-slate-700/40" : "bg-cyan-50"
                    }`}
                  >
                    <h4 className={`font-semibold mb-2 ${titleColor}`}>
                      Key Benefits
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Minimally invasive options available</li>
                      <li>Reduced pain and faster recovery</li>
                      <li>Improved joint function and long-term outcomes</li>
                      <li>Less tissue damage and scarring</li>
                      <li>Better stability and mobility after rehab</li>
                    </ul>
                  </div>

                  {/* WHEN RECOMMENDED */}
                  <div
                    className={`mt-4 p-3 sm:p-4 rounded-xl ${
                      isDark ? "bg-slate-700/40" : "bg-blue-50"
                    }`}
                  >
                    <h4 className={`font-semibold mb-2 ${titleColor}`}>
                      When Is It Recommended?
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Chronic joint pain affecting daily life</li>
                      <li>Sports injuries or ligament tears</li>
                      <li>Severe arthritis or joint degeneration</li>
                      <li>Instability or frequent giving-way episodes</li>
                      <li>Cartilage damage or mechanical symptoms</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 h-2" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

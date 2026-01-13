import React, { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function MediaPPTs({ isDark }) {
  // Combined list of presentations (pptx) and PDFs in /public
  const files = [
    {
      title: "38-MD_Orthobiologics_38",
      file: "/38-MD_Orthobiologics_38.pdf",
      type: "pdf",
    },
    {
      title: "Hyalurinidase injection in knee arthritis",
      file: "/Hyalurinidase injection in knee arthritis.pdf",
      type: "pdf",
    },
    {
      title: "meniscus repair",
      file: "/meniscus repair - rohit.pdf",
      type: "pdf",
    },
    { title: "platelet", file: "/platelet rohit.pdf", type: "pdf" },
    {
      title: "Shoulder Instability Scores",
      file: "/Shoulder_Instability_Scores_Visual_Conference.pptx",
      type: "pptx",
    },
  ];

  const [index, setIndex] = useState(0);
  const total = files.length;
  const viewerRef = useRef(null);
  const touchStartX = useRef(null);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);
  const goTo = (i) => setIndex(i % total);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    if (dx < -50) next();
    touchStartX.current = null;
  };

  const current = files[index];

  // Detect local/private hosts — Office viewer can't fetch local files
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const canPreviewPptx =
    hostname !== "localhost" &&
    !hostname.startsWith("127.") &&
    !hostname.startsWith("192.");

  const getEmbedSrc = (f) => {
    if (f.type === "pdf") return f.file;
    if (f.type === "pptx") {
      if (!canPreviewPptx) return null;
      // Use Office viewer to embed PPTX (requires a public URL accessible by Microsoft servers)
      const origin =
        typeof window !== "undefined" ? window.location.origin : "";
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        origin + f.file
      )}`;
    }
    return f.file;
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2
        className={`text-2xl font-semibold mb-4 ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        Presentations & Documents
      </h2>

      <div className="flex flex-col gap-4">
        <div
          className={`relative rounded-lg overflow-hidden ${
            isDark ? "bg-slate-800" : "bg-white"
          }`}
        >
          {/* Viewer area */}
          <div
            ref={viewerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full h-[60vh] md:h-[80vh] bg-black/5 flex items-center justify-center"
          >
            {current.type === "pptx" && !canPreviewPptx ? (
              <div className="w-full h-full flex flex-col items-center justify-center px-6 text-center">
                <div className="mb-3 text-lg font-semibold">
                  Preview unavailable
                </div>
                <div className="text-sm mb-4 text-slate-400">
                  PPTX files can't be previewed from localhost or private
                  networks. Host the file on a public URL for preview, or click{" "}
                  <strong>Open</strong> to download.
                </div>
                <div className="flex gap-3">
                  <a
                    href={current.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-md ${
                      isDark
                        ? "bg-cyan-500 text-white"
                        : "bg-blue-100 text-slate-800"
                    }`}
                  >
                    Open
                  </a>
                  <a
                    href={current.file}
                    download
                    className={`px-4 py-2 rounded-md ${
                      isDark
                        ? "bg-slate-700 text-slate-200"
                        : "bg-white text-slate-800 border"
                    }`}
                  >
                    Download
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                title={current.title}
                src={getEmbedSrc(current)}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            )}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/40"
          >
            <HiChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/40"
          >
            <HiChevronRight size={22} />
          </button>
        </div>

        {/* Thumbnails / list (horizontal on smaller screens) */}
        <div className="flex gap-3 overflow-x-auto py-2">
          {files.map((f, i) => (
            <button
              key={f.file}
              onClick={() => goTo(i)}
              className={`min-w-[170px] p-3 text-left rounded-md transition border ${
                i === index
                  ? "ring-2 ring-cyan-400"
                  : isDark
                  ? "border-slate-700"
                  : "border-blue-100"
              } ${
                isDark
                  ? "bg-slate-800 text-slate-200"
                  : "bg-white text-slate-800"
              }`}
            >
              <div className="font-medium text-sm truncate">{f.title}</div>
              <div className="text-xs text-slate-400 mt-1">
                {f.type.toUpperCase()}
              </div>
            </button>
          ))}
        </div>

        <div
          className={`flex items-center justify-between ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          <div className="text-sm">
            {index + 1} of {total}
          </div>
          <div className="flex gap-3">
            <a
              href={current.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 rounded-md ${
                isDark ? "bg-cyan-500 text-white" : "bg-blue-100 text-slate-800"
              }`}
            >
              Open Raw
            </a>
            {/* Download link */}
            <a
              href={current.file}
              download
              className={`px-3 py-2 rounded-md ${
                isDark
                  ? "bg-slate-700 text-slate-200"
                  : "bg-white text-slate-800 border"
              }`}
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

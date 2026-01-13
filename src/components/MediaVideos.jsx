import React, { useState } from "react";
import { HiPlay } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

export default function MediaVideos({ isDark }) {
  const videos = [
    { type: "youtube", id: "o5KEaGL_yhI", title: "Podcast on sports injury" },
    {
      type: "instagram",
      id: "DSmFPq9kjLB",
      title:
        "Pressure + delay = damage. Compartment Syndrome needs urgent action.",
      url: "https://www.instagram.com/reel/DSmFPq9kjLB/?igsh=c2FzdXpjcXVpZXpm",
    },
    {
      type: "instagram",
      id: "DSo_VaXEnck",
      title:
        "Today's food may look filling but often misses key nutrients. Support your muscle and bone health.",
      url: "https://www.instagram.com/reel/DSo_VaXEnck/?igsh=c2FzdXpjcXVpZXpm",
    },
  ];

  const [loaded, setLoaded] = useState({});

  const load = (v) => setLoaded((s) => ({ ...s, [v.id + v.type]: true }));

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2
        className={`text-2xl font-semibold mb-6 ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        Videos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => {
          const key = v.id + v.type;
          const isLoaded = !!loaded[key];

          return (
            <div
              key={key}
              className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01] ${
                isDark ? "bg-slate-800" : "bg-white"
              }`}
            >
              <div className="relative">
                {!isLoaded ? (
                  <button
                    onClick={() => load(v)}
                    className="w-full block text-left"
                    aria-label={`Play ${v.title}`}
                  >
                    {v.type === "youtube" ? (
                      <img
                        src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                        alt={v.title}
                        className="w-full h-44 md:h-56 object-cover"
                      />
                    ) : (
                      <div className="w-full h-44 md:h-56 flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
                        <div className="text-white font-semibold">
                          Instagram Reel
                        </div>
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 flex items-center justify-center pointer-events-none`}
                    >
                      <div className="rounded-full bg-black/50 p-3">
                        <HiPlay size={24} className="text-white" />
                      </div>
                    </div>
                  </button>
                ) : (
                  <div className="w-full h-44 md:h-56">
                    {v.type === "youtube" ? (
                      <iframe
                        title={v.title}
                        src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <iframe
                        title={v.title}
                        src={`https://www.instagram.com/reel/${v.id}/embed/`}
                        frameBorder="0"
                        scrolling="no"
                        className="w-full h-full"
                      />
                    )}
                  </div>
                )}
              </div>

              <div
                className={`p-4 ${
                  isDark ? "text-slate-200" : "text-slate-800"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="font-medium text-md">{v.title}</div>
                  {v.type === "instagram" && (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`ml-2 px-3 py-1 rounded-md text-sm ${
                        isDark
                          ? "bg-cyan-500 text-white"
                          : "bg-blue-100 text-slate-800"
                      }`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

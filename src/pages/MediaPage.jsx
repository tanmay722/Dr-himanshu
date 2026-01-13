import React from "react";
import MediaVideos from "../components/MediaVideos";
import MediaPPTs from "../components/MediaPPTs";

export default function MediaPage({ isDark }) {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 mt-4 text-center">
          <h1
            className={`text-3xl font-bold mb-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Media & Resources
          </h1>
          <p
            className={`text-sm ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            YouTube videos and presentation files collected here. Click to open
            or download.
          </p>
        </header>

        <MediaVideos isDark={isDark} />

        <div className="my-6 border-t" />

        <MediaPPTs isDark={isDark} />
      </div>
    </main>
  );
}

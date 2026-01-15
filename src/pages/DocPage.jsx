import React from "react";
import Doc from "../components/Doc";

export default function DocPage({ isDark }) {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 mt-4 text-center">
          <h1
            className={`text-3xl font-bold mb-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Documents & Resources
          </h1>
          <p
            className={`text-sm ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Presentation files and documents collected here. Click to open or
            download.
          </p>
        </header>

        <Doc isDark={isDark} />
      </div>
    </main>
  );
}

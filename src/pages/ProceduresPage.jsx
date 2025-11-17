import React from "react";
import ProcedureCard from "../components/ProcedureCard";

// Import your images
import img1 from "../assets/serviceImg/1.jpg";
import img2 from "../assets/serviceImg/2.png";
import img3 from "../assets/serviceImg/3.jpeg";
import img4 from "../assets/serviceImg/4.jpeg";
import img5 from "../assets/serviceImg/5.jpeg";
import img6 from "../assets/serviceImg/6.jpeg";

const procedures = [
  {
    id: "knee-arthroscopy",
    title: "Knee Arthroscopy",
    short:
      "A minimally invasive procedure using a tiny camera to diagnose and treat problems inside the knee joint.",
    full: "Knee arthroscopy is a modern minimally invasive procedure where a small camera (arthroscope) is inserted into the knee through tiny incisions. It allows direct visualization of the meniscus, cartilage, ligaments, and joint lining. Commonly treated conditions include meniscus tears, cartilage damage, loose fragments, early arthritis, and ligament injuries. Benefits include smaller incisions, faster recovery, reduced pain, minimal scarring, and quicker return to daily activities. This procedure also helps athletes recover efficiently with targeted rehabilitation.",
    image: img1,
  },
  {
    id: "daa-hip-replacement",
    title: "DAA Hip Replacement",
    short:
      "A muscle-sparing hip replacement approach offering faster recovery and less postoperative pain.",
    full: "Direct Anterior Approach (DAA) hip replacement is a highly advanced technique where the hip joint is accessed from the front without cutting major muscles. This approach preserves important structures, resulting in faster recovery, early mobility, and less discomfort. It also allows accurate implant positioning under fluoroscopic guidance. Many patients can walk the same day or the next day after surgery. DAA is suitable for primary hip replacements and selected revision cases, offering excellent long-term function and stability.",
    image: img2,
  },
  {
    id: "cruciate-retaining-knee",
    title: "Cruciate Retaining Knee Joint Replacement",
    short:
      "A knee replacement method that preserves the posterior cruciate ligament for natural joint movement.",
    full: "Cruciate Retaining (CR) Knee Replacement preserves the patient’s posterior cruciate ligament, allowing the knee to maintain more natural biomechanics. This technique is ideal for patients with good ligament strength. Benefits include better knee stability, smoother bending, improved joint sensation, and long-term satisfaction. The procedure effectively treats advanced arthritis or joint degeneration, helping restore mobility, reduce pain, and improve quality of life through a tailored rehabilitation program.",
    image: img3,
  },
  {
    id: "acl-reconstruction",
    title: "ACL Reconstruction",
    short:
      "Reconstruction of the anterior cruciate ligament using graft tissue to restore knee strength.",
    full: "ACL Reconstruction replaces a torn anterior cruciate ligament using a graft (hamstring tendon, patellar tendon, or quadriceps tendon). This surgery is recommended for people experiencing knee instability, repeated giving-way episodes, or athletes wanting to return to pivoting sports such as football, basketball, or badminton. Modern techniques ensure anatomical tunnel placement for natural ligament function. Rehab includes phases of swelling control, mobility restoration, strengthening, balance recovery, and guided return-to-sport training.",
    image: img4,
  },
  {
    id: "revision-arthroplasty",
    title: "Revision Hip and Knee Replacement",
    short:
      "A complex procedure performed when a previous implant has worn out or failed.",
    full: "Revision arthroplasty is required when a previous hip or knee replacement fails due to loosening, infection, wear, trauma, or implant breakage. This surgery is technically demanding and requires specialized implants, bone reconstruction techniques, and meticulous surgical planning. The goal is to restore joint stability, reduce pain, and improve mobility. Advanced diagnostic tools, infection management, and customized rehabilitation plans play a major role in ensuring successful outcomes.",
    image: img5,
  },
  {
    id: "sports-injuries",
    title: "Sports Injuries",
    short:
      "Comprehensive treatment for ligament, tendon, cartilage, and joint injuries related to sports.",
    full: "Sports injuries include ligament tears, cartilage defects, muscle strains, tendon injuries, and joint instability. Treatment involves precise diagnosis, arthroscopy, physiotherapy, bracing, or minimally invasive procedures. Rehabilitation is customized based on the athlete’s sport, level of activity, and goals. The focus is on safe, structured return-to-sport while preventing re-injury. High-performance rehabilitation combines strength, agility, proprioception, balance training, and sport-specific conditioning.",
    image: img6,
  },
];

export default function ProceduresPage({ isDark }) {
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-cyan-50 text-slate-900"
      }`}
    >
      <div className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <h1
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${
            isDark ? "text-cyan-300" : "text-cyan-600"
          }`}
        >
          Procedures
        </h1>

        <p
          className={`text-center mb-10 max-w-3xl mx-auto ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Explore detailed information about various orthopedic and
          sports-related procedures, including benefits, recovery expectations,
          and when they are recommended.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {procedures.map((p) => (
            <ProcedureCard key={p.id} data={p} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}

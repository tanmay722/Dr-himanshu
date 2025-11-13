import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PublicationDetails({ isDark }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allPublications = [
    {
      id: 1,
      title:
        "Comparative Study for Assessment of Functional Outcome of Intraarticular AO Type C Distal Humerus Fractures Treated by Parallel Plating",
      authors: "Bhayana H, Pandey R, Dhammi IK et al.",
      journal: "JOIO",
      year: 2019,
      volume: "53",
      pages: "190–195",
      doi: "https://doi.org/10.4103/ortho.IJOrtho_298_18",
      category: "Trauma",
    },
    {
      id: 2,
      title:
        "Prevalence and factors associated with psychological morbidity, phantom limb pain in lower limb amputees",
      authors: "Bhayana H, Bu S, Saini UC, Mehra A",
      journal: "Injury",
      year: 2024,
      volume: "55(11)",
      pages: "111828",
      doi: "https://doi.org/10.1016/j.injury.2024.111828",
      category: "Amputation",
    },
    {
      id: 3,
      title:
        "Internal brace augmentation in elbow varus posteromedial rotatory instability (VPMRI) allows early rehabilitation and prevents stiffness",
      authors: "Greiner S, Voss A, Soler A, Bhayana H",
      journal: "Arch Orthop Trauma Surg",
      year: 2024,
      volume: "145(1)",
      pages: "62",
      doi: "",
      category: "Sports Medicine",
    },
    {
      id: 4,
      title:
        "Osteonecrosis in patients with inflammatory bowel disease: a systematic review and meta-analysis",
      authors:
        "Bhayana H, Sharma TK, Sharma A, Dhillon MS, Jena A, Kumar D, Sharma V",
      journal: "Eur J Gastroenterol Hepatol",
      year: 2024,
      volume: "36(5)",
      pages: "513-519",
      doi: "",
      category: "Research",
    },
    {
      id: 5,
      title:
        "Functional and Radiological Outcomes of Single-Stage Bilateral Total Hip Replacement: A Retrospective Observational Study",
      authors: "Kanojia RK, Basappa RK, Shah D et al.",
      journal: "JOIO",
      year: 2025,
      volume: "",
      pages: "",
      doi: "",
      category: "Arthroplasty",
    },
    {
      id: 6,
      title:
        "Sequential manual manipulation technique of closed reduction to retrieve a bent femoral intramedullary nail: a case report",
      authors: "Thami T, Bhayana H, Bindal S, Srivastava A, Bansal A, Kumar D",
      journal: "International Journal of Research in Orthopaedics",
      year: 2024,
      volume: "11(1)",
      pages: "230–234",
      doi: "https://doi.org/10.18203/issn.2455-4510.IntJResOrthop20243913",
      category: "Trauma",
    },
    {
      id: 7,
      title:
        "Nonfinancial Barriers to Prosthetic Use Following Upper-Limb Amputation: A Prospective Observational Study in India",
      authors:
        "Bhayana H, Mehra A, Saini UC, Mahajan R, Jayant UK, Kiran T, Soni S",
      journal: "JPO Journal of Prosthetics and Orthotics",
      year: 2024,
      volume: "",
      pages: "",
      doi: "",
      category: "Amputation",
    },
    {
      id: 8,
      title:
        "Evaluation of short-term functional mobility outcomes in patients with traumatic lower limb amputations: A prospective cohort study in India",
      authors:
        "Saini UC, Soni S, Mehra A, Shubhankar BU, Bansal A, Suri N, Bhayana H",
      journal: "J Bodyw Mov Ther",
      year: 2025,
      volume: "41",
      pages: "115-120",
      doi: "https://doi.org/10.1016/j.jbmt.2024.11.015",
      category: "Amputation",
    },
    {
      id: 9,
      title:
        "Hindi translated version of TAPES-R (Trinity Amputation Prosthesis Experience Scale): A tool to evaluate satisfaction with prosthesis in lower limb amputees",
      authors: "Bansal A, Bhayana H et al.",
      journal: "Journal of Clinical Orthopaedics & Trauma",
      year: 2024,
      volume: "57",
      pages: "102633",
      doi: "",
      category: "Amputation",
    },
    {
      id: 10,
      title:
        "Non-vascularised fibula as an adjuvant in the management of diaphyseal humerus non-union- A meta-analysis and systematic review",
      authors: "Sharma TK, Kumar D, Gupta A, Bachhal V, Bansal A, Bhayana H",
      journal: "J Orthop",
      year: 2024,
      volume: "58",
      pages: "140-145",
      doi: "",
      category: "Trauma",
    },
    {
      id: 11,
      title:
        "Prevalence of neck pain among unilateral upper limb amputees: A systematic review and meta-analysis",
      authors:
        "Suri N, Baral SS, Shamim MA, Satapathy P, Choudhary P, Mital A, Bhayana H, Saini UC",
      journal: "J Bodyw Mov Ther",
      year: 2024,
      volume: "40",
      pages: "934-941",
      doi: "",
      category: "Amputation",
    },
    {
      id: 12,
      title:
        "Scapulothoracic Dissociation: A Systematic Review, Current Concepts and Meta-Analysis of Case Reports",
      authors: "Kumar V, Bhayana H, Salaria AK, Neradi D, Aggarwal S",
      journal: "SN Compr. Clin. Med",
      year: 2020,
      volume: "2",
      pages: "2884-2889",
      doi: "",
      category: "Trauma",
    },
    {
      id: 13,
      title:
        "Outcomes of plate osteosynthesis for displaced 3-part and 4-part proximal humerus fractures with deltopectoral vs. deltoid split approach",
      authors:
        "Bhayana H, Chouhan DK, Aggarwal S, Prakash M, Patel S, Arora C, Dhillon MS",
      journal: "Eur J Trauma Emerg Surg",
      year: 2021,
      volume: "",
      pages: "",
      doi: "https://doi.org/10.1007/s00068-021-01761-6",
      category: "Trauma",
    },
    {
      id: 14,
      title:
        "Changing Pattern of Orthopaedic Trauma Admissions During COVID-19 Pandemic: Experience at a Tertiary Trauma Centre in India",
      authors:
        "Dhillon MS, Kumar D, Saini UC, Bhayana H, Gopinathan NR, Aggarwal S",
      journal: "Indian J Orthop",
      year: 2020,
      volume: "54",
      pages: "1-6",
      doi: "https://doi.org/10.1007/s43465-020-00241-0",
      category: "Research",
    },
    {
      id: 15,
      title:
        "An unusual mechanism of sideswipe injury in passengers traveling in a train and review of literature",
      authors: "Pandey R, Rajnish RK, Srivastava A, Bhayana H, Dhammi IK",
      journal: "Int J Burns Trauma",
      year: 2021,
      volume: "11(5)",
      pages: "350-356",
      doi: "",
      category: "Trauma",
    },
    {
      id: 16,
      title:
        "Coexistence of Osteomalacia in Osteoporotic Hip Fractures in More Than 50 Years Age Group",
      authors:
        "Kumar K, Bhayana H, Vaiphei K, Chouhan D, Kanojia RK, Bhadada S",
      journal: "Indian J Orthop",
      year: 2021,
      volume: "55(3)",
      pages: "614-620",
      doi: "https://doi.org/10.1007/s43465-020-00323-z",
      category: "Arthroplasty",
    },
    {
      id: 17,
      title:
        'Letter to the Editor Regarding Sukhsathein et al.: "Cup Alignment Change After Screw Fixation in Total Hip Arthroplasty"',
      authors: "Dhillon MS, Bhayana H, Patel S",
      journal: "Indian J Orthop",
      year: 2020,
      volume: "54(6)",
      pages: "913-914",
      doi: "https://doi.org/10.1007/s43465-020-00064-z",
      category: "Arthroplasty",
    },
    {
      id: 18,
      title:
        "Ipsilateral multiple costovertebral joint dislocation: Case report and review of literature",
      authors: "Mishra KK, Sharma A, Meena SK, Mehta H, Gupta A, Bhayana H",
      journal: "IP J Surg Allied Sci",
      year: 2020,
      volume: "2(2)",
      pages: "37-40",
      doi: "",
      category: "Trauma",
    },
    {
      id: 19,
      title:
        "Analysis of Potential Bone Donors and Deferral Rates for Bone Bank in a Tertiary Care Hospital",
      authors:
        "Kumar S, Ahmer Zafar, Jain AK, Aggarwal AK, Bhayana H, Dhammi IK",
      journal: "ojmpc",
      year: 2020,
      volume: "27(1)",
      pages: "22-7",
      doi: "",
      category: "Research",
    },
    {
      id: 20,
      title:
        "Evolving Practices in Elective Arthroplasty during COVID 19 Pandemic: Experience at Tertiary Care Centre in India",
      authors: "Kanojia RK, Bhayana H, Kaushal A, Ghosh A",
      journal: "EC Orthopaedics",
      year: 2021,
      volume: "12.2",
      pages: "37-47",
      doi: "",
      category: "Arthroplasty",
    },
    {
      id: 21,
      title:
        "Type 4 Capitellum Fracture Malunion Treated with Corrective Osteotomy, Headless Screws and Interposition Arthroplasty",
      authors: "Ghosh AK, Negi DK, Ksheerasagar VP, As SK, Bhayana H",
      journal: "SSRN",
      year: 2022,
      volume: "",
      pages: "",
      doi: "https://doi.org/10.2139/ssrn.4308580",
      category: "Trauma",
    },
    {
      id: 22,
      title: "Post Injection sciatic nerve palsy in a patient with PIVD",
      authors: "Verma D, Jain AK, Gupta A, Bhayana H",
      journal: "Journal of Bone and Joint Diseases",
      year: 2018,
      volume: "33(3)",
      pages: "69-71",
      doi: "",
      category: "Research",
    },
    {
      id: 23,
      title:
        "Dilemmas in COVID-19 Crisis: Have Responsibilities of Orthopedic Surgeons Clearly Defined?",
      authors: "Kumar D, Bhayana H",
      journal: "J Postgrad Med Edu Res",
      year: 2020,
      volume: "54(3)",
      pages: "86–87",
      doi: "",
      category: "Research",
    },
    {
      id: 24,
      title:
        "Malunited capitellum fracture treated with corrective osteotomy, headless screws and interposition arthroplasty",
      authors:
        "Akash Kumar Ghosh, Deepak Kumar Negi, Vivek P. Ksheerasagar, Himanshu Bhayana, A.S. Sunil Kumar",
      journal: "Journal of Orthopaedic Reports",
      year: 2023,
      volume: "2(3)",
      pages: "",
      doi: "",
      category: "Trauma",
    },
    {
      id: 25,
      title: "A rare variant in Pipkin classification",
      authors: "Kumar V, Kansal R, Bhayana H, Aggarwal S",
      journal: "J Med Sci Res",
      year: 2019,
      volume: "7(4)",
      pages: "123-127",
      doi: "http://dx.doi.org/10.17727/JMSR.2019/7-22",
      category: "Trauma",
    },
    {
      id: 26,
      title:
        "Langerhans Cell Histiocytosis of Scapula- Diagnosis & Treatment Options",
      authors: "Pandey R, Bhayana H, Dhammi IK, Jain AK",
      journal: "Revista Columna",
      year: 2019,
      volume: "",
      pages: "",
      doi: "",
      category: "Research",
    },
    {
      id: 27,
      title: "Spine and Trunk Injuries",
      authors: "Bhayana H, Mahr D",
      journal: "Injury and Health Risk Management in Sports",
      year: 2020,
      volume: "",
      pages: "",
      doi: "",
      category: "Sports Medicine",
    },
    {
      id: 28,
      title: "Polytrauma and the Unconscious Athlete",
      authors: "Mahr D, Bhayana H",
      journal: "Injury and Health Risk Management in Sports",
      year: 2020,
      volume: "",
      pages: "",
      doi: "",
      category: "Sports Medicine",
    },
    {
      id: 29,
      title:
        "Ultrasound guided versus landmark guided corticosteroid injection in patients with rotator cuff syndrome: Randomised controlled trial",
      authors: "Bhayana H, Mishra P, Tandon A, Pankaj A, Pandey R, Malhotra R",
      journal: "Journal of Clinical Orthopaedics and Trauma",
      year: 2020,
      volume: "",
      pages: "",
      doi: "",
      category: "Sports Medicine",
    },
    {
      id: 30,
      title:
        "Displaced, Comminuted Intracapsular Fracture Neck Femur in Young Adults; Outcome following four screws fixation",
      authors: "Rajnish R, Haq R, Aggarwal A, Verma N, Pandey R, Bhayana H",
      journal: "Indian Journal of Orthopedics",
      year: 2019,
      volume: "",
      pages: "",
      doi: "",
      category: "Trauma",
    },
    {
      id: 31,
      title:
        "Hand function outcome in closed small bone fractures treated by open reduction & internal fixation by mini plate or closed crossed pinning",
      authors: "Pandey R, Soni N, Bhayana H, Malhotra R, Pankaj A, Arora S",
      journal: "Musculoskeletal Surgery Journal",
      year: 2019,
      volume: "",
      pages: "",
      doi: "",
      category: "Trauma",
    },
    {
      id: 32,
      title: "Capsule Endoscopy at a Large Academic Referral Centre",
      authors:
        "Jason Korenblit, Laura Setlur, Yaa Oppong, Himanshu Bhayana et al.",
      journal: "Gastrointestinal Endoscopy",
      year: 2011,
      volume: "73(4)",
      pages: "",
      doi: "",
      category: "Research",
    },
    {
      id: 33,
      title:
        "Wireless Capsule Endoscopy in Patients with Implantable Cardiac Devices",
      authors:
        "Jason Korenblit, Laura Setlur, Yaa Oppong, Himanshu Bhayana et al.",
      journal: "Gastrointestinal Endoscopy",
      year: 2011,
      volume: "73(4)",
      pages: "",
      doi: "",
      category: "Research",
    },
    {
      id: 34,
      title: "Drug Resistant Spinal Tuberculosis",
      authors: "Jain AK, Jaggi K, Bhayana H, Chatterjee R",
      journal: "Indian Journal of Orthopedics",
      year: 2012,
      volume: "",
      pages: "",
      doi: "",
      category: "Research",
    },
    {
      id: 35,
      title:
        "Hypoglossal nerve palsy as a rare complication of C1-C2 Pott's spine",
      authors: "Pandey R, Bhayana H, Gupta A, Dhammi IK, Jain AK",
      journal: "Indian Journal of Orthopaedics",
      year: 2019,
      volume: "",
      pages: "",
      doi: "",
      category: "Research",
    },
    {
      id: 36,
      title:
        "Patient's perception in Bicruciate Retaining Total Knee Arthroplasty",
      authors: "Baumann F, Bhayana H",
      journal: "Biomedical Journal of Scientific and Technical Research",
      year: 2019,
      volume: "",
      pages: "",
      doi: "",
      category: "Arthroplasty",
    },
    {
      id: 37,
      title: "Neglected posterior dislocation of shoulder and its management",
      authors: "Bhayana H, Pandey R, Dhammi IK, Jaggi KR, Lakshminarayan S",
      journal: "Indian Journal of Applied Research",
      year: 2018,
      volume: "8(4)",
      pages: "",
      doi: "",
      category: "Trauma",
    },
    {
      id: 38,
      title: "Manual of Fracture Management Foot and Ankle - Book Review",
      authors: "Bhayana H, Rathod PM",
      journal: "J Postgrad Med Edu Res",
      year: 2020,
      volume: "54(4)",
      pages: "252",
      doi: "",
      category: "Research",
    },
  ];

  const categories = [
    "all",
    ...new Set(allPublications.map((pub) => pub.category)),
  ];
  const filteredPublications =
    selectedCategory === "all"
      ? allPublications
      : allPublications.filter((pub) => pub.category === selectedCategory);

  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-gradient-to-br from-white via-blue-50 to-cyan-50";

  const cardBg = isDark ? "bg-slate-800/50" : "bg-white";
  const cardBorder = isDark ? "border-cyan-400/20" : "border-cyan-300/30";
  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";
  const buttonActiveBg = "bg-gradient-to-r from-cyan-500 to-blue-500";
  const buttonInactiveBg = isDark ? "bg-slate-800" : "bg-white";

  return (
    <div
      className={`min-h-screen ${bgClass} pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <motion.h1
          className="text-5xl font-bold mb-4 text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          All Publications
        </motion.h1>

        <motion.p
          className={`mb-8 text-lg ${textMutedClass}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Comprehensive collection of research publications and academic
          contributions
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? `${buttonActiveBg} text-white shadow-lg shadow-cyan-500/50`
                  : `${buttonInactiveBg} ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    } border ${cardBorder}`
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.p
          className={`text-sm mb-6 ${textMutedClass}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Showing {filteredPublications.length} publication
          {filteredPublications.length !== 1 ? "s" : ""}
        </motion.p>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {filteredPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              className={`${cardBg} border ${cardBorder} rounded-lg p-6 hover:border-cyan-400/50 transition-all group`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-cyan-400/30 group-hover:text-cyan-400 transition-colors flex-shrink-0">
                  {String(pub.id).padStart(2, "0")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-semibold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 ${textClass}`}
                  >
                    {pub.title}
                  </h3>
                  <p className={`text-sm mb-3 ${textMutedClass}`}>
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-3">
                    <span
                      className={isDark ? "bg-slate-700/50" : "bg-blue-100"}
                      style={{ color: isDark ? "inherit" : "#0369a1" }}
                    >
                      {pub.journal}
                    </span>
                    <span
                      className={isDark ? "bg-slate-700/50" : "bg-blue-100"}
                      style={{ color: isDark ? "inherit" : "#0369a1" }}
                    >
                      {pub.year}
                    </span>
                    {pub.volume && (
                      <span
                        className={isDark ? "bg-slate-700/50" : "bg-blue-100"}
                        style={{ color: isDark ? "inherit" : "#0369a1" }}
                      >
                        Vol. {pub.volume}
                      </span>
                    )}
                  </div>
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      View Publication
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

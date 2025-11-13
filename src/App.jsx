import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Degrees from "./components/Degrees";
import ProfessionalMemberships from "./components/ProfessionalMemberships";
import Publications from "./components/Publications";
import PublicationDetails from "./pages/PublicationDetails";
import Awards from "./components/Awards";
import GuestTalks from "./components/GuestTalks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-gradient-to-br from-white via-blue-50 to-cyan-50";

  const textClass = isDark ? "text-white" : "text-slate-900";

  return (
    <Router>
      <ScrollToTop />
      <div
        className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}
      >
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero isDark={isDark} />
                <About isDark={isDark} />
                <Experience isDark={isDark} />
                <Degrees isDark={isDark} />
                <ProfessionalMemberships isDark={isDark} />
                <Publications isDark={isDark} />
                <Awards isDark={isDark} />
                <GuestTalks isDark={isDark} />
                <Contact isDark={isDark} />
                <Footer isDark={isDark} />
              </main>
            }
          />
          <Route
            path="/publications"
            element={
              <div className="flex flex-col min-h-screen">
                <PublicationDetails isDark={isDark} />
                <Footer isDark={isDark} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

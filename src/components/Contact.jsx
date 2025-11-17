import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact({ isDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  React.useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY_HERE");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await emailjs.send("YOUR_SERVICE_ID_HERE", "YOUR_TEMPLATE_ID_HERE", {
        to_email: "himanshu.bhayana.mamc@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSuccessMessage(
        "Message sent successfully! I will get back to you soon."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      console.error("Email error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900"
    : "bg-gradient-to-br from-blue-50 via-white to-cyan-50";

  const cardBg = isDark
    ? "bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-800/80 backdrop-blur-sm"
    : "bg-white";
  const cardBorder = isDark
    ? "border-slate-600/40 hover:border-cyan-400/40"
    : "border-cyan-300/30 hover:border-cyan-400/50";
  const inputBg = isDark ? "bg-slate-700/50 backdrop-blur-sm" : "bg-blue-50";
  const inputBorder = isDark ? "border-slate-600/40" : "border-cyan-300/30";
  const inputText = isDark ? "text-slate-100" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="space-y-4 sm:space-y-6 min-w-0"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "📧",
                title: "Email",
                value: "himanshu.bhayana.mamc@gmail.com",
                href: "mailto:himanshu.bhayana.mamc@gmail.com",
                accentClass: isDark
                  ? "from-blue-500/30 to-blue-600/20"
                  : "from-blue-200/40 to-blue-100/30",
              },
              {
                icon: "📍",
                title: "Address",
                value: "PGIMER, Chandigarh, India",
                href: "#",
                accentClass: isDark
                  ? "from-rose-500/30 to-rose-600/20"
                  : "from-rose-200/40 to-rose-100/30",
              },
              {
                icon: "📞",
                title: "Phone",
                value: "+91 95991 49380",
                href: "tel:+919599149380",
                accentClass: isDark
                  ? "from-pink-500/30 to-pink-600/20"
                  : "from-pink-200/40 to-pink-100/30",
              },
            ].map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                className={`flex gap-4 p-5 sm:p-6 ${cardBg} border ${cardBorder} rounded-lg transition-all group overflow-hidden relative`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ x: 5 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${info.accentClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                ></div>

                <div className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform flex-shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4
                    className={`font-semibold mb-1 text-sm sm:text-base ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {info.title}
                  </h4>
                  <p
                    className={`group-hover:text-cyan-400 transition-colors text-xs sm:text-sm break-words ${textMutedClass}`}
                  >
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            className="space-y-4 min-w-0"
            onSubmit={handleSubmit}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: "name",
                label: "Name",
                type: "text",
                placeholder: "Your name",
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "your@email.com",
              },
              {
                name: "subject",
                label: "Subject",
                type: "text",
                placeholder: "Subject of your message",
              },
            ].map((field) => (
              <motion.div
                className="space-y-2"
                key={field.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <label
                  htmlFor={field.name}
                  className={`block text-sm font-medium ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className={`w-full px-4 py-2.5 sm:py-3 ${inputBg} border ${inputBorder} rounded-lg ${inputText} placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all`}
                />
              </motion.div>
            ))}

            <motion.div
              className="space-y-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <label
                htmlFor="message"
                className={`block text-sm font-medium ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Your message..."
                className={`w-full px-4 py-2.5 sm:py-3 ${inputBg} border ${inputBorder} rounded-lg ${inputText} placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all resize-none`}
              ></textarea>
            </motion.div>

            {successMessage && (
              <motion.div
                className="p-3 sm:p-4 bg-emerald-900/30 border border-emerald-400/50 rounded-lg text-emerald-400 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {successMessage}
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                className="p-3 sm:p-4 bg-red-900/30 border border-red-400/50 rounded-lg text-red-400 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errorMessage}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

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

  const openingHours = [
    { day: "Monday", hours: "10:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 5:00 PM" },
    { day: "Friday", hours: "10:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "himanshu.bhayana.mamc@gmail.com",
      href: "mailto:himanshu.bhayana.mamc@gmail.com",
    },
    {
      icon: "📍",
      title: "Address",
      value: "PGIMER, Chandigarh",
      href: "#",
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91 95991 49380",
      href: "tel:+919599149380",
    },
  ];

  return (
    <section
      className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${bgClass}`}
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Book an Appointment
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Contact Info & Opening Hours */}
          <div className="space-y-6">
            {/* Contact Information - Vertical Row Layout */}
            <motion.div
              className={`p-5 rounded-xl ${cardBg} border ${cardBorder} shadow-lg`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-lg font-bold mb-4 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Get In Touch
              </h3>
              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className={`flex flex-row items-center gap-4 p-1 rounded-lg transition-all group w-full ${
                      isDark ? "hover:bg-slate-700/50" : "hover:bg-blue-50/50"
                    } border ${
                      isDark ? "border-slate-600/30" : "border-cyan-200/50"
                    }`}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <p
                        className={`font-semibold text-sm ${
                          isDark ? "text-white" : "text-slate-900"
                        } mb-1`}
                      >
                        {info.title}
                      </p>
                      <p
                        className={`text-sm ${textMutedClass} group-hover:text-cyan-400 transition-colors break-words`}
                      >
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Opening Hours - 2 Column Grid */}
            <motion.div
              className={`p-5 rounded-xl ${cardBg} border ${cardBorder} shadow-lg`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Opening Hours
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span
                    className={`text-xs font-semibold ${
                      isDark ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    Available
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {openingHours.map((dayInfo, index) => (
                  <motion.div
                    key={dayInfo.day}
                    className={`flex flex-col p-2 rounded-lg ${
                      isDark ? "bg-slate-700/30" : "bg-blue-50/50"
                    } transition-all hover:scale-105`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span
                      className={`text-xs font-medium mb-1 ${
                        isDark ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      {dayInfo.day}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        dayInfo.day === "Sunday"
                          ? "text-red-400"
                          : isDark
                          ? "text-green-400"
                          : "text-green-600"
                      }`}
                    >
                      {dayInfo.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.form
            className="min-w-0"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className={`p-6 rounded-xl ${cardBg} border ${cardBorder} shadow-lg h-full`}
            >
              {/* Form Heading */}
              <motion.h3
                className={`text-xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                } text-center`}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Send Enquiry
              </motion.h3>

              <div className="space-y-5">
                {/* Empty space for better spacing */}
                <div className="h-2"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "name",
                      label: "Name",
                      type: "text",
                      placeholder: "Your full name",
                    },
                    {
                      name: "email",
                      label: "Email address",
                      type: "email",
                      placeholder: "your@email.com",
                    },
                  ].map((field) => (
                    <motion.div
                      className="space-y-2"
                      key={field.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
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
                        className={`w-full px-3 py-2.5 ${inputBg} border ${inputBorder} rounded-lg ${inputText} placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Empty space */}
                <div className="h-1"></div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    Enquiry For
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Consultation, Appointment, General Inquiry"
                    className={`w-full px-3 py-2.5 ${inputBg} border ${inputBorder} rounded-lg ${inputText} placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all`}
                  />
                </motion.div>

                {/* Empty space */}
                <div className="h-1"></div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
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
                    placeholder="Please describe your enquiry in detail..."
                    className={`w-full px-3 py-2.5 ${inputBg} border ${inputBorder} rounded-lg ${inputText} placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none`}
                  ></textarea>
                </motion.div>

                {/* Empty space before button */}
                <div className="h-2"></div>

                {successMessage && (
                  <motion.div
                    className="p-3 bg-emerald-900/30 border border-emerald-400/50 rounded-lg text-emerald-400 text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {successMessage}
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    className="p-3 bg-red-900/30 border border-red-400/50 rounded-lg text-red-400 text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    {errorMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

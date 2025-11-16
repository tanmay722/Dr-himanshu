import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Gallery = ({ images, data, isDark }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /** 🌙 Theme Based Classes **/
  const bgClass = isDark
    ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    : "bg-gradient-to-br from-white via-blue-50 to-cyan-50";

  const cardOverlay = isDark ? "bg-black/60" : "bg-black/30";
  const modalBg = isDark ? "bg-black/80" : "bg-white/90 backdrop-blur-md";
  const closeBtnBg = isDark
    ? "bg-slate-900/80 hover:bg-slate-700/80"
    : "bg-white/80 hover:bg-slate-200";
  const arrowBg = isDark
    ? "bg-slate-900/80 hover:bg-slate-700/80"
    : "bg-white/80 hover:bg-slate-200";
  const textClass = isDark ? "text-white" : "text-slate-900";
  const textMutedClass = isDark ? "text-slate-400" : "text-slate-600";
  const borderClass = isDark ? "border-slate-700" : "border-slate-200";
  const cardBg = isDark ? "bg-slate-800" : "bg-white";

  /** Open modal */
  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  /** Close modal */
  const closeModal = () => {
    setSelectedImage(null);
  };

  /** Next image */
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  /** Previous image */
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  /** Close modal if clicked outside image */
  const handleClickOutside = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();
    }
  };

  return (
    <div
      className={`min-h-screen ${bgClass} pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      {/* Heading */}
      <motion.h1
        className={`text-center text-3xl font-semibold mb-4 ${textClass}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {data}
      </motion.h1>

      <motion.p
        className={`text-center mb-6 text-lg ${textMutedClass}`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Explore our collection of beautiful moments
      </motion.p>

      {/* Image Grid */}
      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6 mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-xl group cursor-pointer shadow-xl border ${borderClass} ${cardBg}`}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 object-cover transition-transform duration-500"
            />
            <div
              className={`absolute inset-0 ${cardOverlay} opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500`}
            >
              <p className="text-white text-lg font-semibold">View Image</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            id="modal-background"
            className={`fixed inset-0 ${modalBg} flex items-center justify-center z-50`}
            onClick={handleClickOutside}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 ${closeBtnBg} rounded-full p-2 text-lg shadow-lg transition z-10`}
            >
              <AiOutlineClose
                size={28}
                className={isDark ? "text-white" : "text-slate-800"}
              />
            </button>

            <div className="relative w-full h-full flex justify-center items-center">
              {/* Full Image */}
              <motion.img
                src={selectedImage}
                alt="Selected"
                className="w-[90vw] sm:w-[80vw] md:w-[70vw] h-auto max-h-[90vh] object-contain rounded-xl shadow-2xl"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className={`absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 ${arrowBg} p-3 rounded-full shadow-lg transition z-10`}
              >
                <AiOutlineLeft
                  size={24}
                  className={isDark ? "text-white" : "text-slate-800"}
                />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className={`absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 ${arrowBg} p-3 rounded-full shadow-lg transition z-10`}
              >
                <AiOutlineRight
                  size={24}
                  className={isDark ? "text-white" : "text-slate-800"}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

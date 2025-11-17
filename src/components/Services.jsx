import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/serviceImg/1.jpg";
import img2 from "../assets/serviceImg/2.png";
import img3 from "../assets/serviceImg/3.jpeg";
import img4 from "../assets/serviceImg/4.jpeg";
import img5 from "../assets/serviceImg/5.jpeg";
import img6 from "../assets/serviceImg/6.jpeg";

const services = [
  {
    id: 1,
    title: "Knee Arthroscopy",
    description:
      "Arthroscopy is a surgical procedure in which an arthroscope is inserted into the knee joint. It is a device used to see inside of the joint. It includes a camera that is connected to a screen.",
    image: img1,
    moreInfo: "Read more",
    url: "/knee-arthroscopy",
  },
  {
    id: 2,
    title: "DAA Hip Replacement",
    description:
      "DAA hip replacement is an approach through which no muscles are cut, helping in faster recovery with less pain. It is also a more anatomical way of doing Hip Replacement.",
    image: img2,
    moreInfo: "Read more",
    url: "/daa-hip-replacement",
  },
  {
    id: 3,
    title: "Cruciate Retaining Knee Joint Replacement",
    description:
      "Knee joint replacement helps patients with severely diseased knee joints. This procedure reduces pain, restores mobility, and regains function.",
    image: img3,
    moreInfo: "Read more",
    url: "/cruciate-retaining-knee-joint-replacement",
  },
  {
    id: 4,
    title: "ACL Reconstruction",
    description:
      "The procedure for anterior cruciate ligament reconstruction replaces a patient’s torn anterior cruciate ligament (ACL) tendon with a new tendon to restore knee stability.",
    image: img4,
    moreInfo: "Read more",
    url: "/acl-reconstruction",
  },
  {
    id: 5,
    title: "Revision Hip and Knee Replacement",
    description:
      "In cases of failed arthroplasty, we specialise in doing these complex revision cases both in the knee and hip.",
    image: img5,
    moreInfo: "Read more",
    url: "/hip-and-knee-replacement",
  },
  {
    id: 6,
    title: "Sports Injuries",
    description:
      "Dr. Rohit Pandey specializes in sports medicine and provides world-class care to athletes. He specializes in sports-related injuries around the shoulder, ankle, and other joints.",
    image: img6,
    moreInfo: "Read more",
    url: "/sports-injuries",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        Our Services
      </h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 truncate">
                {service.title}
              </h3>
              <p className="text-gray-600 line-clamp-3">
                {service.description}
              </p>
              <a
                href={service.url} // Update href to use the new URL property
                className="text-[#1a237e] hover:underline mt-4 inline-block"
              >
                {service.moreInfo}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

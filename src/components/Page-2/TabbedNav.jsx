import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Floorplan from "../../assets/images/page2/section3/img1.png";
import Structural from "../../assets/images/page2/section3/img2.jpg";
import Civil from "../../assets/images/page2/section3/img3.jpg";
import MEP from "../../assets/images/page2/section3/img4.jpg";
import Elevation from "../../assets/images/page2/section3/img5.png";
import Interior from "../../assets/images/page2/section3/img6.jpg";

const words = ["Residence", "Villa", "Bungalow", "Apartment", "Farmhouse", "Penthouse"];

const tabs = [
  {
    title: "Floor Plan",
    content:
      "Kadamban Architect is dedicated to transforming your space with expertly tailored floor plans! Designed for maximum space efficiency, natural light, and seamless functionality, our plans combine style with practicality. Whether for modern homes or multi-generational living, we guide and assist you in all stages to bring your dream home to life!",
    image: Floorplan,
  },
  {
    title: "Structural Design",
    content:
      "Our expert structural designers are committed to delivering precise and reliable drawings tailored to your project’s needs. Kadamban collaborates with top designers at every stage, from planning to execution, ensuring the structural design aligns with the expected creativity. From foundation details to framing specifications, we ensure every element is designed with accuracy and strength in mind. With a focus on durability and safety, we guide and assist you in all stages to create a structure that stands strong for years to come.",
    image: Structural,
  },
  {
    title: "Civil Drawings",
    content:
      "Civil drawings are essential as they provide detailed structural information required for building permits. At Kadamban Architect, our expert designers specialize in transforming ideas into clear, precise drawings that balance simplicity with purpose. These detailed plans ensure your dream home's layout is accurate, functional, and aligned with your vision.",
    image: Civil,
  },
  {
    title: "MEP Drawings",
    content:
      "MEP (Mechanical, Electrical, and Plumbing) drawings are crucial for ensuring the efficient functioning of your building’s vital systems. At Kadamban Architect, we collaborate with top designers and engineers at every stage, from planning to execution, to deliver MEP designs that integrate seamlessly with your structure. Our meticulously planned designs ensure optimal performance, energy efficiency, and safety. From electrical layouts to plumbing networks and HVAC systems, we provide clear and precise drawings to support smooth execution at every stage of your project.",
    image: MEP,
  },
  {
    title: "3D Elevation",
    content:
      "Kadamban Architect is dedicated to transforming your space with expertly tailored floor plans! Designed for maximum space efficiency, natural light, and seamless functionality, our plans combine style with practicality. Whether for modern homes or multi-generational living, we guide and assist you in all stages to bring your dream home to life!",
    image: Elevation,
  },
  {
    title: "Interior Design",
    content:
      "Interior design is all about transforming your space into a comfortable, stylish, and functional living environment. At Kadamban Architect, we focus on smart space planning to make your home feel spacious and inviting. Our expert designers carefully blend aesthetics with practicality, ensuring your home meets all your needs while creating a warm and welcoming ambiance — a place you’ll always love to return to.",
    image: Interior,
  },
];

const TabbedNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [changingWord, setChangingWord] = useState(words[0]);
  const navigate = useNavigate();
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);
  const whatsappNumber = "+919876543210"; // Replace with your actual WhatsApp number

  useEffect(() => {
    const interval = setInterval(() => {
      setChangingWord((prev) => words[(words.indexOf(prev) + 1) % words.length]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (tabRefs.current[activeTab]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[activeTab];
      setTabPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <section className="relative bg-white py-10 px-5 md:px-20">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <h2 className="text-lg font-normal text-gray-700" style={{ fontFamily: "Poppins" }}>
          One-stop shop for all things
        </h2>
        <h1 className="text-3xl font-medium mt-3">
          <span className="relative inline-block">
            <span className="text-red-500">Architectural Services</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-75 h-[2px] bg-red-500"></span>
          </span>{" "}
          For Your{" "}
          <span className="inline-block relative w-[150px] h-[40px] overflow-hidden align-middle">
            <AnimatePresence mode="wait">
              <motion.span
                key={changingWord}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-0 right-0 text-green-500 text-center w-full"
                aria-live="polite" // Announce changing word to screen readers
              >
                {changingWord}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Let's get started with us for limitless designs to build your dream palace
        </p>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="relative flex flex-wrap justify-around pb-3">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative py-2 px-4 text-lg font-medium transition ${
              activeTab === index ? "text-black" : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(index)}
            ref={(el) => (tabRefs.current[index] = el)}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tab-panel-${index}`}
            id={`tab-${index}`}
            aria-label={tab.title}
          >
            {tab.title}
          </button>
        ))}

        <motion.div
          className="absolute bottom-0 h-[3px] bg-red-500"
          initial={{ left: 0, width: 0 }}
          animate={{
            left: tabPosition.left,
            width: tabPosition.width,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          style={{ position: "absolute", bottom: 0 }} // Ensure correct positioning context
        />
      </div>

      {/* Animated Content Section */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mt-8 bg-gray-50 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8"
        id={`tab-panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {/* Big Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <motion.img
            key={tabs[activeTab].image}
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-auto max-h-[450px] rounded-xl object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold text-gray-800">{tabs[activeTab].title}</h3>
          <p className="text-gray-700 mt-4 leading-relaxed">{tabs[activeTab].content}</p>
          <button
            className="flex items-center gap-2 px-6 py-2 mt-6 bg-white text-black border border-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition"
            onClick={() => navigate("/quotation")}
          >
            Get a Quotation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      
    </section>
  );
};

export default TabbedNav;

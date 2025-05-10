import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

const tabs = ["North", "East", "South", "West"];

const images = {
  North: [
    "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
  ],
  East: [
    "https://images.pexels.com/photos/207929/pexels-photo-207929.jpeg",
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
    "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
    "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
    "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg",
  ],
  South: [
    "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
    "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    "https://images.pexels.com/photos/2102589/pexels-photo-2102589.jpeg",
    "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
  ],
  West: [
    "https://images.pexels.com/photos/276667/pexels-photo-276667.jpeg",
    "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg",
    "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
    "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
    "https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg",
  ],
};

const allDesigns = {
  North: Array(4).fill({
    title: "North Villa",
    location: "Chennai",
    price: "28.5 Lakhs onwards",
    area: "800 Sq.Ft.",
  }),
  East: [
    ...Array(3).fill({
      title: "East Villa",
      location: "Coimbatore",
      price: "30.8 Lakhs onwards",
      area: "751 Sq.Ft.",
    }),
    {
      title: "New East Villa",
      location: "Coimbatore",
      price: "35.0 Lakhs onwards",
      area: "900 Sq.Ft.",
    },
  ],
  South: Array(4).fill({
    title: "South Villa",
    location: "Madurai",
    price: "26.4 Lakhs onwards",
    area: "720 Sq.Ft.",
  }),
  West: Array(4).fill({
    title: "West Villa",
    location: "Salem",
    price: "32.0 Lakhs onwards",
    area: "860 Sq.Ft.",
  }),
};

const FloorPlanSection = () => {
  const [activeTab, setActiveTab] = useState("North");
  const selectedDesigns = allDesigns[activeTab];
  const selectedImages = images[activeTab];
  const tabRefs = useRef([]);
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    if (tabRefs.current[tabs.indexOf(activeTab)]) {
      const { offsetLeft, offsetWidth } =
        tabRefs.current[tabs.indexOf(activeTab)];
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
          Explore Our
        </h2>
        <h1 className="text-3xl font-medium mt-3">
          <span className="relative inline-block">
            <span className="text-red-500">2D Floor Plans</span> + Exterior{" "}
            <span className="text-red-500">Elevation</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-8px] w-60 h-[2px] bg-red-500"></span>
          </span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Discover a variety of floor plans tailored to different regions
        </p>
      </motion.div>

      {/* Tabs Navigation */}
      <div className="relative flex flex-wrap justify-around pb-3">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`relative py-2 px-4 text-lg font-medium transition ${
              activeTab === tab ? "text-black" : "text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
            ref={(el) => (tabRefs.current[index] = el)}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`tab-panel-${tab}`}
            id={`tab-${tab}`}
            aria-label={tab}
          >
            {tab}
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
          style={{ position: "absolute", bottom: 0 }}
        />
      </div>

      {/* Cards Layout */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 flex flex-wrap justify-center gap-16"
        id={`tab-panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {selectedDesigns.map((design, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden w-[280px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={selectedImages[index % selectedImages.length]}
              alt={design.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{design.title}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
                <span className="text-pink-500 text-xl leading-none">•</span>
                {design.location}
              </p>
              <div className="bg-gray-100 px-3 py-2 rounded-xl mb-3 flex items-center gap-3 text-left">
                <div className="text-lg text-black">₹</div>
                <div>
                  <p className="text-xs text-gray-500">Price Range</p>
                  <p className="text-sm font-semibold text-black">{design.price}</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-700 mb-4">
                <div className="flex items-center gap-1">
                  🏘️ <span>Villa Plots</span>
                </div>
                <div className="flex items-center gap-1">
                  📐 <span>{design.area}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <i className="fas fa-phone hover:text-black hover:scale-110 transition-transform cursor-pointer text-gray-600 text-lg"></i>
                <i className="fas fa-envelope hover:text-black hover:scale-110 transition-transform cursor-pointer text-gray-600 text-lg"></i>
                <i className="fab fa-whatsapp hover:text-green-600 hover:scale-110 transition-transform cursor-pointer text-lg"></i>
              </div>
              <button className="w-full bg-red-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-red-600 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FloorPlanSection;

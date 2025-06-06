import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Goutham Reddy G H",
    review:
      "Am from Bangalore. Very good design and unique ideas given for my house. Very humble and best budget. Very trusted company.",
    rating: 5,
    image: <FaUserCircle className="text-gray-500 text-6xl" />,
  },
  {
    name: "Balamurugan Ravichandran",
    review:
      "Kadambam group is the best and trustworthy place to tie up your project with them. They are very professional and dedicated in works. Their experience in this field is vast and also updated with current trends.",
    rating: 5,
    image: <FaUserCircle className="text-gray-500 text-6xl" />,
  },
  {
    name: "Er. Karthi",
    review:
      "I have a construction firm in Salem. Kadambam has been providing architectural design assistance for my project for the past two years and still continues to do so. My first choice will be Kadambam for architecture design.",
    rating: 5,
    image: <FaUserCircle className="text-gray-500 text-6xl" />,
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Get current set of testimonials
  const currentTestimonials = testimonials.slice(
    index * testimonialsPerPage,
    index * testimonialsPerPage + testimonialsPerPage
  );

  return (
    <div className="py-16 px-6 text-center">
      <h3 className="text-gray-500 text-sm uppercase">Clients Testimonials</h3>
      <h2 className="top-4 left-10 text-4xl font-bold">
        <span className="relative">
          What
          <span className="absolute left-0 bottom-[-6px] w-full h-1 bg-[#ff4a2a]"></span>
        </span>
        <span className="text-[#ff4a2a]"> Clients Say !</span>
      </h2>

      <div className="relative w-full max-w-6xl mx-auto mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {currentTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="relative bg-white p-6 rounded-lg shadow-lg"
              >
                <FaQuoteLeft className="text-gray-300 text-3xl absolute top-4 right-4" />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    {testimonial.image}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <FaStar key={j} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.review}"</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-all ${
                index === i ? "bg-[#ff4a2a]" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Redirect to Google Business */}
      <button
  onClick={() =>
    window.open("https://www.google.com/search?q=Kadamban+Group&ludocid=xxxxxxxxxxxxxxxxxx#lrd=0x0xxxxxxxxxxxxxxxx:0x0&fid=0x0", "_blank")
  }
  className="mt-6 px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition"
>
  Put Your Review
</button>

    </div>
  );
};

export default TestimonialSection;

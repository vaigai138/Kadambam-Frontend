{/* Left Text Section */}
<motion.div
  className="w-full md:w-1/2 text-center flex flex-col items-center" // Removed px-2 sm:px-6
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  variants={fadeIn}
>
  <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-medium mb-0"> {/* Removed mt-0 */}
    Stylish & Superior
  </p>

  <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight mt-2 mb-0"> {/* Adjusted mt, removed mb */}
    INNOVATIVE <span className="text-red-500">DESIGNS</span> <br className="hidden md:block" />
    TO ELEVATE YOUR <br className="hidden md:block" />
    <span className="text-red-500">LIVING</span>
  </h1>

  <p className="text-base sm:text-lg text-gray-600 mt-2 mb-0 font-medium"> {/* Adjusted mt, removed mb */}
    Upgrade Your Lifestyle With Us
  </p>

  <motion.button
    className="flex items-center gap-2 px-5 py-2 border border-gray-800 mt-4 bg-white text-black rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out" // Adjusted mt
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate("/quotation")}
  >
    Get a Quotation <ArrowRight className="w-4 h-4" />
  </motion.button>

  <motion.div
    className="mt-6 flex items-center justify-center gap-2 text-center" // Adjusted mt
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={fadeIn}
  >
    <p className="text-base font-medium text-gray-600 mb-0">Our Signature</p> {/* Removed mt-0 */}
    <p className="text-base font-medium text-red-500 mb-0">Interior Theme</p> {/* Removed mt-0 */}
  </motion.div>
</motion.div>

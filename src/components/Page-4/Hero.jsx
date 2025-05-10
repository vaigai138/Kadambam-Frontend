import React from "react";
// Your existing Navbar component
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../Page-1/Navbar";
import Carousel from "./Carousel";

const OnlineShopping = () => {
    // Sample offer images from Picsum (Replace these later with actual offers)
    const offerImages = [
        "https://picsum.photos/1200/500?random=1",
        "https://picsum.photos/1200/500?random=2",
        "https://picsum.photos/1200/500?random=3",
        "https://picsum.photos/1200/500?random=4",
    ];

    return (
        <div className="relative min-h-screen bg-white" id="hero-4">
            {/* Navbar */}


            {/* Page Heading */}
            <div className="px-6 md:px-12 lg:px-20 pt-24">

            </div>

            {/* Offer Image Slider */}
            <div className="mt-12 px-4 md:px-12 lg:px-20">
                {/* Increased margin-top (mt-12) for better spacing */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation
                    loop
                    className="rounded-lg shadow-lg"
                >
                    {offerImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Offer ${index + 1}`}
                                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="p-4">
                <Carousel />
            </div>
            
            
        </div>

    );
};

export default OnlineShopping;

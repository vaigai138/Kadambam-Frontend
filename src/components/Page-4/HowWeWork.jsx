import React from "react";

const steps = [
    { id: 1, title: "Choose Your Drawing", icon: "📐" },
    { id: 2, title: "Click to Buy", icon: "🛒" },
    { id: 3, title: "Make Payment", icon: "💳" },
    { id: 4, title: "Download It", icon: "⬇️" },
    {
        id: 5,
        title: "Watch Demo",
        icon: "🎥",
        isLink: true,
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
];

const HowWeWork = () => {
    return (
        <section className="bg-white text-center py-12">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-900">How We Work?</h2>
            <p className="text-gray-600 mt-2">Quick and easy steps to get your perfect drawing.</p>

            {/* Steps */}
            <div className="mt-10 flex flex-wrap justify-center gap-6">
                {steps.map((step) => {
                    const cardContent = (
                        <div
                            className="bg-white shadow-md rounded-lg p-6 w-[250px] text-center relative hover:shadow-lg transition-all cursor-pointer"
                        >
                            <div className="text-4xl">{step.icon}</div>
                            <span className="absolute top-2 right-2 text-gray-300 text-4xl font-bold">{step.id}</span>
                            <p className="mt-3 text-gray-800 font-semibold">{step.title}</p>
                        </div>
                    );

                    return step.isLink ? (
                        <a
                            key={step.id}
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {cardContent}
                        </a>
                    ) : (
                        <div key={step.id}>
                            {cardContent}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HowWeWork;

import React from "react";
import featureIamge from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../Components/Section Title/SectionTitle";

export default function FeaturedItem() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-6 relative"
      style={{
        backgroundImage: `url(${featureIamge})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>

      <div className="z-10">
        <div className="text-white">
          {/* Section Title */}
          <SectionTitle
            subheading="Check It Out"
            heading="Featured Item"
          ></SectionTitle>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 px-4">
          {/* Image */}
          <div>
            <img
              src={featureIamge}
              alt="Featured Item"
              className="rounded-lg shadow-lg max-w-full md:max-w-[400px] hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Special Offer
            </h2>
            <h1 className="text-4xl font-bold text-white mb-4">
              Chicken Burger
            </h1>
            <p className="text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </p>
            <button className="btn btn-primary hover:bg-secondary transition-all duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

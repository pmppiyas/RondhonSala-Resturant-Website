import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { MdReviews } from "react-icons/md";

export default function Testimonial() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<AiOutlineStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <section className="py-20 bg-gray-50">
      <SectionTitle
        heading={"Testimonial"}
        subheading={"What Our Clients Say About Us"}
      ></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper px-10"
        spaceBetween={30}
        slidesPerView={1}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-lg shadow-lg">
              <p className="text-7xl ">
                <MdReviews />
              </p>
              <div className="flex justify-center text-3xl">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-600 italic text-center">
                {review.details}
              </p>
              <h3 className="text-3xl font-bold text-center text-yellow-500">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

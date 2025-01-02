import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import "../Category/Category.css"; // Import custom CSS
import SectionTitle from "../../../Components/Section Title/SectionTitle";

export default function Category() {
  return (
    <div className="category-container">
      <SectionTitle
        heading={"Order Online"}
        subheading={"From 11.00 AM to 11.00 PM"}
      ></SectionTitle>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-custom">
          <img src={slider1} alt="Slide 1" />
          <div className="slide-caption">Salads</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={slider2} alt="Slide 2" />
          <div className="slide-caption">Pizzas</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={slider3} alt="Slide 3" />
          <div className="slide-caption">Soups</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={slider4} alt="Slide 4" />
          <div className="slide-caption">Desserts</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={slider5} alt="Slide 5" />
          <div className="slide-caption">Salads</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

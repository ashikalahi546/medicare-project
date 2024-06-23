"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { medicalServicesCard } from "./services/MedicalServicesCard";

const MedicalServices = () => {
  return (
    <div className="py-[100px] bg-[#F5F8FA] px-[60px]">
      <div className="text-center">
        <p className="text-base text-primary font-medium">Departments</p>
        <h1 className="text-[32px] font-semibold mt-1">Our Medical Services</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[46px] h-1 bg-primary rounded-lg mt-[14px]"></div>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {medicalServicesCard?.map((item) => (
          <SwiperSlide key={item.id} className="pb-14">
            <div className=" rounded-lg mt-[62px] flex flex-col items-center text-center h-[305px] justify-center px-[39.5px] bg-white cursor-pointer ">
              <Image src={item?.image} width={60} height={60} alt="" />
              <h3 className="py-[17px] text-semibold text-[22px]">
                {item?.name}
              </h3>
              <p className=" text-sm text-[#1F1F1FCC] leading-6">
                {item?.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MedicalServices;

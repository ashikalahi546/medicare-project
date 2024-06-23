"use client";
import Image from "next/image";
import { specialistDoctors } from "./services/SpecialistDoctorsData";

const SpecialistDoctors = () => {
  return (
    <div className="py-[100px] bg-[#F5F8FA] px-[60px]">
      <div className="text-center">
        <p className="text-base text-primary font-medium">Meet Our Team</p>
        <h1 className="text-[32px] font-semibold mt-1">Specialist Doctors</h1>
      </div>

      <div className="flex justify-center">
        <div className="w-[46px] h-1 bg-primary rounded-lg mt-[14px]"></div>
      </div>
      <div className="mt-[62px] grid grid-cols-4 gap-6">
        {specialistDoctors?.map((item) => (
          <div
            className="bg-white flex flex-col justify-center items-center py-[50px] rounded-lg"
            key={item.id}
          >
            <Image src={item?.image} width={253} height={253} alt="" />
            <p className="pt-[17px] text-[22px] leading-[33px] font-semibold">
              {item?.doctorsName}
            </p>
            <p className="pt-2.5 text-sm font-medium leading-[23.8px] text-[##1F1F1FCC]">
              {item?.degree}
            </p>
            <div className="flex gap-5 items-center pt-[17px]">
              <Image src={item?.facebook} width={20} height={20} alt="" />
              <Image src={item?.twitter} width={20} height={20} alt="" />
              <Image src={item?.linkedin} width={20} height={20} alt="" />
              <Image src={item?.google} width={20} height={20} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistDoctors;

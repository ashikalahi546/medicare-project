import Image from "next/image";
import { testimonialData } from "./services/TestimonialData";
const Testimonial = () => {
  return (
    <div className="bg-[#F5F8FA] h-[99px] w-full">
      <div className="relative">
        <div className="h-[305px] mx-[60px] bg-white rounded-lg px-[38.75px] py-[53px] z-20">
          <div className="flex gap-[103.5px]">
            {testimonialData.map((item) => (
              <div
                className="flex flex-col items-center w-[199px]"
                key={item?.id}
              >
                <Image src={item?.image} width={52} height={70} />
                <h2 className="py-[17px] text-5xl font-bold">{item?.number}</h2>
                <p className="text-sm font-medium">{item?.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 w-full -z-10">
          <div className="bg-[#2C3F4F] h-[632px] pt-[350px]">
            <div className="flex flex-col justify-center items-center text-center text-white">
              <Image
                src="/image/testimonial5.png"
                width={78}
                height={78}
                alt=""
              />
              <p className="leading-7 pt-[29px]">
                With fat bassline, huge beats & soulful male vocal. Extended
                club remix v <span className="block">Piano-led deep house with fat bassline, huge beats
                & soulful male vocal. With</span> fat bassline, huge beats & soulful
                male vocal.
              </p>
              <h3 className="mt-[15px] text-[22px] font-semibold">Robart Adison</h3>
              <h5 className="mt-[6px] text-base font-semibold">Professor</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Hero = () => {
  return (
    <div className="bg-[url('/image/hero.png')] w-full h-[780px]">
      <div className="py-[177px] pl-[60px]">
        <div className="relative">
          <Image src="/image/blur.png" width={650} height={451} />
          <div className="absolute top-[-26px] left-[26px]">
            <Image
              src="/image/blur.png"
              width={650}
              height={451}
              className="relative"
            />
          </div>
          <div className="w-[624px] h-[425px] bg-[#4778F0] absolute top-0 left-[26px]">
            <div className="pt-[59px] pl-[81px]">
              <h2 className="text-4xl leading-snug text-white font-bold">
                We Take Care Of Your
                <span className="block">Healthy Health</span>
              </h2>
              <p className="text-white pt-[29px] leading-7">
                With fat bassline, huge beats & soulful male vocal. Extended
                <span className="block">
                  club remix v Piano-led deep house with fat bassline, huge
                </span>
                beats & soulful male vocal.
              </p>
             <button className="mt-[34px] text-primary bg-white w-[187px] h-[55px] font-medium text-base rounded-lg flex items-center justify-center gap-2.5">See All Services <MdOutlineKeyboardArrowRight className="text-xl" />
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

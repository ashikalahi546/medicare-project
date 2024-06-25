import Image from "next/image";
import { workingProcess } from "./services/WorkingProcessData";

const WorkingProcess = () => {
  return (
    <div>
      <div className="pt-[100px] pb-[199px] bg-[#F5F8FA] px-[60px]">
        <div className="text-center">
          <p className="text-base text-primary font-medium">Working Process</p>
          <h1 className="text-[32px] font-semibold mt-1">
            How It Help You Stay Healthy
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="w-[46px] h-1 bg-primary rounded-lg mt-[14px]"></div>
        </div>

        <div className="mt-[62px] grid grid-cols-4 gap-6">
          {workingProcess?.map((item) => (
            <div
              className="flex flex-col items-center justify-center text-center"
              key={item.id}
            >
              <Image src={item?.image} width={253} height={253} alt="" />
              <h2 className="text-[22px] font-semibold pt-[30px]">
                {item?.name}
              </h2>
              <p className="pt-2 text-base leading-7 w-[233px]">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;

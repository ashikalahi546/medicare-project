import Image from "next/image";
import { medicareServices } from "./services/MedicareServices";

const MedicareCentral = () => {
  return (
    <div className="px-[60px]">
      <div className="grid grid-cols-3 gap-[54px] items-center">
        <Image src="/image/medicare.png" width={408} height={649} />
        <div>
          <h1 className="text-[32px] font-bold">
            Welcome To Medicare Central Hospital
          </h1>
          <p className="font-medium leading-7 mt-[26px]">
            With fat bassline, huge beats & soulful male vocal. Extended club
            remix v Piano-led deep house with
            <span className="block">
              fat bassline, huge beats & soulful male vocal. With
            </span>
            fat bassline, huge beats & soulful male vocal.
            <span className="block"> Extended club.</span>
          </p>
          <p className="pt-10 text-primary  font-medium">Munna islam</p>
        </div>
        <div>
          {medicareServices?.map((item) => (
            <div className="bg-primary mb-4 flex justify-between h-[85px] rounded-lg items-center px-[19px] " key={item.id}>
              <div className="flex items-center gap-4">
                <Image src={item?.image} width={30} height={30} />
                <h2 className="text-white">{item?.title}</h2>
              </div>
              <p className="text-xl text-white">{item?.icon}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicareCentral;

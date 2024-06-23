"use client";
import { IoIosSearch } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navber = () => {
  const pathName = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Doctors",
      path: "/doctors",
    },
    {
      name: "Departments",
      path: "/departments",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <div className=" h-[125px] px-[60px] pt-[30px] ">
      <div className="flex items-center gap-[69px]">
        <div className="flex items-center gap-[171px]">
          <div className="flex items-center gap-[18px] ">
            <Image src="/image/logo.png" width={50} height={50} alt="" />
            <div>
              <h1 className="text-3xl font-semibold ">
                <span className="text-primary">Medi</span>
                <span className="text-secondary">care</span>
              </h1>
              <p className="mt-[2px] text-[10px] font-semibold">
                ORGANIAK HOSPITAL
              </p>
            </div>
          </div>
          <ul className="text-base font-semibold flex gap-[30px] ">
            {links?.map((link) => (
              <Link
                href={link.path}
                className={`${pathName == link.path ? "text-primary" : ""}`}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-[60px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className=" pl-[50px] h-[47px] w-[243px] border outline-none rounded-lg border-[#9B9B9B] placeholder:text-[#9B9B9B]"
            />
            <IoIosSearch className="absolute top-3 text-2xl text-[#9B9B9B] left-4" />
          </div>
          <button className="text-base font-medium bg-primary h-[47px] w-[138px] text-white rounded-lg">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navber;

import Hero from "@/components/Hero";
import MedicareCentral from "@/components/MedicareCentral ";
import MedicalServices from './../components/MedicalServices';
import SpecialistDoctors from "@/components/SpecialistDoctors";
import OurSpecialty from "@/components/our specialty/OurSpecialty";
import DoctorCheckUp from "@/components/DoctorCheckUp";
import WorkingProcess from "@/components/WorkingProcess";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
<main className="w-[1440px] mx-auto">
<Hero/>
<MedicareCentral/>
<MedicalServices/>
<OurSpecialty/>
<SpecialistDoctors/>
<DoctorCheckUp/>
<WorkingProcess/>
<Testimonial/>
  </main>
  )
}

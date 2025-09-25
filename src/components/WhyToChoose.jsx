import React, { useState } from "react";
import { FaMicrosoft, FaRupeeSign } from "react-icons/fa";
import { SiLivejournal } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiExam } from "react-icons/pi";
import { FaPersonRays } from "react-icons/fa6";

function WhyToChoose() {
  const [reasons] = useState([
    { icon: FaMicrosoft, desc: "Microsoft Certified Trainer" },
    { icon: SiLivejournal, desc: "Live Practical Based Teaching" },
    { icon: GrProjects, desc: "Free Mini Project with Each Course" },
    { icon: LiaChalkboardTeacherSolid, desc: "Guest Lectures by Industry Experts" },
    { icon: PiExam, desc: "Daily Assignments & Regular Exams" },
    { icon: FaPersonRays, desc: "Interview & Career Preparation" },
    { icon: FaRupeeSign, desc: "5 Star Rating On Google & Justdial." },
    { icon: FaRupeeSign, desc: "Affordable Fee Structure" },
  ]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#03021f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-100 mb-12">
          Why Choose Us?
          <span className="block w-66 h-1 bg-teal-400 mx-auto mt-3 rounded"></span>
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="md:min-w-[28vw] min-w-[90vw] bg-[#0f095f] hover:bg-[#15114d] transition transform hover:-translate-y-2 hover:shadow-xl rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <reason.icon className="text-teal-400 text-5xl mb-4" />
              <h3 className="text-lg font-semibold">{reason.desc}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyToChoose;

import { useState } from "react"
import { FaJava, FaPython, FaAndroid, FaPhp, FaAngular, FaWordpress } from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";
import { DiDotnet } from "react-icons/di";
import { CgWebsite } from "react-icons/cg";
import { TbFileTypeSql } from "react-icons/tb";
import { SiSelenium } from "react-icons/si";

function Courses() {
  const [courses] = useState([
    { icon: FaJava, name: "Java", desc: "Master object-oriented programming & industry-level projects." },
    { icon: FaPython, name: "Python", desc: "Learn Python for AI, ML, and automation." },
    { icon: PiFileCpp, name: "C++", desc: "Solid foundation in DSA & system-level programming." },
    { icon: DiDotnet, name: ".NET", desc: "Develop modern apps with Microsoft .NET framework." },
    { icon: FaAndroid, name: "Android", desc: "Build mobile apps with real-world examples." },
    { icon: CgWebsite, name: "Web Design", desc: "HTML, CSS, JS & responsive design principles." },
    { icon: TbFileTypeSql, name: "SQL", desc: "Database design & advanced query writing." },
    { icon: FaPhp, name: "PHP", desc: "Dynamic websites & server-side development." },
    { icon: FaAngular, name: "Angular", desc: "Powerful SPA development with Angular." },
    { icon: SiSelenium, name: "Selenium", desc: "Automation testing with hands-on practice." },
    { icon: FaWordpress, name: "WordPress", desc: "Build blogs & e-commerce sites easily." },
  ]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#03021f] text-white">
      <div className="max-w-6xl px-6 py-12">
        <h2 className="text-gray-100 text-3xl md:text-5xl text-center font-bold mb-12">
          Our Courses
          <span className="block w-52 h-1 bg-teal-400 mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-[#1a1560] hover:bg-[#15114d] transition transform hover:-translate-y-2 hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <course.icon className="text-teal-400 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-300 text-sm">{course.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;

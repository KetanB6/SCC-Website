import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Reviews() {
  const [reviews] = useState([
    {
      name: "Udhav US",
      desc: "Best Coding Institute in Latur 🌟 Sankalp Coding Classes! 🌟 If someone asks me which is the best coding class in Latur I’ll confidently say: Sankalp Coding Classes.",
      link: "https://maps.app.goo.gl/5xrb9TgZFqPktBLi8",
    },
    {
      name: "Amruta Sonwar",
      desc: "My name is Amruta, and I am currently at the final stage of my C language batch at Sankalp Coding Classes. My experience with this class has been truly amazing ✨.",
      link: "https://maps.app.goo.gl/VtoFhs24LvgHUVCc6",
    },
    {
      name: "Samadhan Bhojane",
      desc: "I recently completed Java programming. Sankalp Coding Classes is the best. One of the best teachers I’ve learned from – he explains concepts in the simplest way. Very supportive and knowledgeable teacher who makes coding fun.",
      link: "https://maps.app.goo.gl/MD7Da5vGE6dvtqnt9",
    },
  ]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#03021f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-100 mb-12">
          Student Reviews
          <span className="block w-66 h-1 bg-teal-400 mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="bg-[#050328] hover:bg-[#0b0840] transition transform hover:-translate-y-2 hover:shadow-xl rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">"{review.desc}"</p>
              <h3 className="font-bold text-lg text-[aqua]">{review.name}</h3>
            </a>
          ))}
        </div>

        {/* More Reviews Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.google.com/maps/place/Sankalp+Coding+Classes,+Latur/@18.399855,76.5680155,17z/data=!4m8!3m7!1s0x3bcf835d6f89c845:0x66acab36896fa20c!8m2!3d18.399855!4d76.5680155!9m1!1b1!16s%2Fg%2F11svpx1dbq?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-[#0f095f] hover:bg-[#15114d] rounded-xl text-[aqua] font-semibold transition">
              ⭐ See More Reviews on Google
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

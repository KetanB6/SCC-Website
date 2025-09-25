import Pic from "../images/ManojSir.png"

function Trainer() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#03021f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-100 mb-12">
          Meet Your Trainer
          <span className="block w-72 h-1 bg-teal-400 mx-auto mt-2 rounded"></span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Trainer Picture */}
          <div className="flex-shrink-0">
            <img
              src={Pic}
              alt="Prof. Manoj Birajdar"
              className="rounded-2xl shadow-lg w-64 md:w-80 border-4 border-teal-500"
              loading="lazy"
            />
          </div>

          {/* Trainer Info */}
          <div className="bg-[#050531] p-8 md:p-12 rounded-2xl shadow-lg text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-100">
              Prof. Manoj Birajdar
            </h3>
            <h4 className="text-teal-400 font-semibold text-xl mt-2">
              Microsoft Certified Trainer
            </h4>

            <ul className="mt-6 space-y-2 text-gray-300 text-lg">
              <li>✅ 6+ Years of Software Development Experience</li>
              <li>✅ 10+ Years of Teaching Experience</li>
              <li>✅ Faculty at Rajarshi Shahu Mahavidyalaya, Latur</li>
              <li>✅ Expert in guiding students with real projects</li>
            </ul>

            <p className="mt-6 text-gray-400 italic">
              “Dedicated to transforming students into skilled professionals with
              practical, hands-on coding knowledge.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainer;

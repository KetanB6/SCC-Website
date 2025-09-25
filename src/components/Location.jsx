import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

function Location() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#03021f] text-white px-6 py-16">
      <div className="max-w-6xl w-full">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-100 mb-12">
          Location
          <span className="block w-24 h-1 bg-teal-400 mx-auto mt-2 rounded"></span>
        </h2>

        {/* Address + Map */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Address Box */}
          <div className="bg-[#050528] p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full md:w-1/2">
            <p className="flex items-start gap-3 text-lg">
              <FaLocationDot className="text-red-400 mt-1" />
              2nd Floor, Shinde Heights, Khori Galli, opp. Garam Masala Hotel,
              Mitra Nagar, Sawe Wadi, Latur, Maharashtra 413512
            </p>
            <p className="flex items-center gap-3 text-lg">
              <IoMdCall className="text-green-400" />{" "}
              <a href="tel:09975175899" className="hover:underline">
                09975175899
              </a>
            </p>
          </div>

          {/* Google Map */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8460821345675!2d76.5680155!3d18.399855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf835d6f89c845%3A0x66acab36896fa20c!2sSankalp%20Coding%20Classes%2C%20Latur!5e0!3m2!1sen!2sin!4v1758618264936!5m2!1sen!2sin"
              width="100%"
              height="300"
              loading="lazy"
              className="rounded-2xl shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;

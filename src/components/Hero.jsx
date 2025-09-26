import { motion } from "framer-motion"
import logo from "../images/sccLogo.webp"
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp } from "react-icons/fa";


function Hero() {

    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-[#03021f] text-white">
                <img src={logo} alt="logo" className="absolute opacity-[0.1] w-screen" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-3xl text-center px-6"
                >

                    <h2 className="mainHeading text-xl md:text-xl font-bold leading-tight mb-10">
                        {"{"}
                        <Typewriter
                            words={[' Learn Coding ']}
                            loop={1}
                            cursor
                            cursorStyle=""
                            typeSpeed={100}
                            // deleteSpeed={50}
                            delaySpeed={1500}
                        />
                        {"}"}
                    </h2>

                    <h1 className="mainHeading text-4xl md:text-6xl font-bold leading-tight">
                        Sankalp Coding Classes, Latur
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-gray-200">
                        Learn C, C++, Java, Python, Web Designing, Android Development & More
                        with <span className="text-teal-400 font-semibold">Microsoft Certified Training</span>
                    </p>

                    <div className="btns mt-6 flex justify-center gap-4 flex-wrap">
                        {/* <button className="bg-teal-500 hover:bg-teal-600 text-white rounded-2xl shadow-lg p-2 md:p-3 cursor-pointer ">
                    Book Demo
                </button> */}

                        <button className="bg-[#00a05b] hover:bg-[#01844b] text-white rounded-2xl shadow-lg p-2 md:p-3 cursor-pointer flex items-center gap-2">
                            <FaWhatsapp className="text-xl" />
                            <span>Contact Us</span>
                        </button>


                    </div>
                </motion.div>

            </section>
        </>
    )
}

export default Hero
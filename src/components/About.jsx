import { motion } from "framer-motion"

function About() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-[#03021f] text-white">
                <motion.div 
                initial={{opacity:0, y:40}}
                animate={{opacity:1, y:0}}
                transition={{duration: 0.8}}
                className="info content md:ml-15 md:mr-15 p-3">
                <h2 className="aboutUs text-3xl text-gray-100 text-center md:text-5xl font-bold leading-tight">
                    About Us
                    <span className="block w-38 h-1 bg-teal-400 mx-auto mt-2 rounded"></span>
                </h2>

                <p className="mt-10 text-lg md:text-xl text-gray-400 italic">
                    "We offers Coding Classes for C, C++, Java, Python, .Net, Android 
                    App Development, Web Designing, SQL, Final Year Project, etc. 
                    Teaching Faculty: Prof. Manoj Birajdar, Microsoft Certified Tainer,
                    6+ Exp. in Software Development, 10+ Teaching Exp. in Rajarshi 
                    Shahu Mahavidylaya, Latur. Our Special features: - Microsoft 
                    Certified Trainer - Live Practical Based Teaching - Free Mini 
                    Project on each course - Free Interview(Technical Round) 
                    Preparation on each course - Free Real Time Software Demos - 
                    Course wise 2 Guest Lecture by Industry Expert - Course wise 
                    3 Exam (UT-I, UT-II MCQ, Sem End) - Special Prizes for Exam 
                    Topper - Group Discussion on each course - Daily Assignment 
                    on each topic - Affordable Fee Structure - Visit to get more 
                    details"
                </p>
                </motion.div>
            </section>
        </>
    )
}

export default About
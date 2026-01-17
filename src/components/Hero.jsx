import { FaGithub, FaFileAlt, FaLinkedinIn } from "react-icons/fa";
import TypingText from "./TypingText.jsx";
import profile from "../../public/pf.png";
import resume from "../../assets/resume.pdf";
import { CiMail } from "react-icons/ci";


export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen py-24 md:py-0 scroll-mt-10 bg-gradient-to-br from-[#05060a] via-[#070b1a] to-[#05060a] flex items-center"
        >
            <div className="max-w-7xl mx-auto px-6 w-full
                grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-white">

                {/* LEFT CONTENT */}
                <div className="space-y-6 animate-fadeUp">
                    <span className="inline-block px-4 py-1.5 rounded-full
                        bg-indigo-500/10 border border-indigo-500/20
                        text-indigo-400 text-xl font-medium">
                        Available for work
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Hi, I'm <br />
                        <span className="text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.7)]">
                            Md Tufail
                        </span>
                    </h1>

                    <p className="text-2xl md:text-4xl font-semibold text-blue-400 opacity-70 h-[48px]">
                        I am <TypingText />
                    </p>

                    <p className="text-gray-400 max-w-xl text-sm md:text-xl leading-relaxed">
                        Passionate Computer Science student building scalable, modern web applications. Let's turn ideas into reality.
                    </p>

                    {/* CTA + SOCIALS */}
                    <div className="flex flex-wrap items-center gap-4 pt-4  text-sm md:text-2xl">
                        <a
                            href="#contact"
                            className="px-4 md:px-8 py-3 rounded-full bg-indigo-500
                            hover:bg-indigo-600 transition font-semibold
                            shadow-lg shadow-indigo-500/30"
                        >
                            Let's Talk →
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="w-11 h-11 rounded-full border border-white/15
                            flex items-center justify-center hover:bg-white/5 transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/tufailmd/"
                            target="_blank"
                            className="w-11 h-11 rounded-full border border-white/15
                            flex items-center justify-center hover:bg-white/5 transition"
                        >
                            <FaLinkedinIn />
                        </a>

                        {/* Resume (SM only) */}
                        <a
                        href={resume}
                        className="flex md:hidden w-11 h-11 rounded-full
                        border border-white/15
                        items-center justify-center
                        hover:bg-white/5 transition"
                        >
                        <FaFileAlt />
                        </a>

                        {/* Mail (MD and above only) */}
                        <a
                        href="mailto:jrtufailmd@gmail.com"
                        className="hidden md:flex w-11 h-11 rounded-full
                        border border-white/15
                        items-center justify-center
                        hover:bg-white/5 transition"
                        >
                        <CiMail />
                        </a>

                    </div>
                </div>

                {/* RIGHT PROFILE CARD */}
                <div className="flex justify-center md:justify-end">
                    <div
                        className="relative w-80 h-96 rounded-3xl
                        bg-white/5 backdrop-blur-xl
                        border border-white/10
                        overflow-hidden
                        shadow-2xl shadow-indigo-500/10
                        animate-float

                        transform rotate-[6deg] skew-y-1
                        transition-all duration-500 ease-out
                        hover:rotate-0 hover:skew-y-0"
                        >


                        {/* Glow */}
                        <div className="absolute -inset-6
                            bg-indigo-500/20 blur-3xl rounded-3xl" />

                        {/* Profile Image */}
                        <div className="relative z-10 w-full h-full hover:cursor-pointer">
                            <img
                                src={profile}
                                alt="Md Tufail"
                                className="block w-full h-full object-cover"
                            />

                        </div>

                        {/* Bottom Overlay */}
                        <div className="absolute bottom-0 left-0 right-0
                            bg-gradient-to-t from-black/80 to-transparent
                            p-5 text-center">
                            <p className="text-indigo-400 font-semibold tracking-wide">
                                {"< Developer />"}
                            </p>
                            <p className="text-sm text-gray-400">
                                Based in India
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
// D:\Web Development\Session 5(Mini project)\react\tufail\src\components\Hero.jsx
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Footer() {
    return (
        <footer
            className="py-10
      bg-gradient-to-br from-[#05060a] via-[#070b1a] to-[#05060a]
      border-t border-white/10 text-white"
        >
            <div className="max-w-7xl mx-auto px-6
        flex flex-col items-center gap-6 text-center">

                {/* Text */}
                <p className="text-gray-400 text-sm">
                    Designed &amp; Built by{" "}
                    <span className="text-white font-semibold">
                        Md Tufail
                    </span>
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/tufailmd"
                        target="_blank"
                        className="text-gray-400 hover:text-indigo-400
            transition-transform hover:scale-110"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/tufailmd"
                        target="_blank"
                        className="text-gray-400 hover:text-indigo-400
            transition-transform hover:scale-110"
                    >
                        <FaLinkedinIn size={20} />
                    </a>

                    {/* Mail */}
                    <a
                        href="mailto:jrtufailmd@gmail.com"
                        className="ext-gray-400 hover:text-indigo-400
            transition-transform hover:scale-110"
                    >
                        <CiMail size={20} />
                    </a>
                </div>

            </div>
        </footer>
    );
}

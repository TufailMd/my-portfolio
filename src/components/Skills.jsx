import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaJava,
    FaPython,
    FaCuttlefish,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";


export default function Skills() {
    return (
        <section
            id="skills"
            className="py-28 px-6
            bg-gradient-to-br from-[#05060a] via-[#070b1a] to-[#05060a]
            text-white scroll-mt-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
                        Technical Skills
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        The tools and technologies I use to build.
                    </p>
                    <div className="mt-6 w-24 h-1 bg-indigo-500 rounded-full" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Frontend */}
                    <div>
                        <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">
                            <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                            Frontend
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            <Skill icon={<FaHtml5 />} name="HTML5" />
                            <Skill icon={<FaCss3Alt />} name="CSS3" />
                            <Skill icon={<FaJs />} name="JavaScript" />
                            <Skill icon={<FaReact />} name="React JS" />
                            <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">
                            <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                            Backend
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            <Skill icon={<FaNodeJs />} name="Node.js" />
                            <Skill icon={<SiExpress />} name="Express.js" />
                            <Skill icon={<SiMongodb />} name="MongoDB" />
                            <Skill icon={<SiMysql />} name="MySQL" />
                        </div>
                    </div>

                    {/* Language */}
                    <div>
                        <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">
                            <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                            Language
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            <Skill icon={<FaJava />} name="Java" />
                            <Skill icon={<FaPython />} name="Python" />
                            <Skill icon={<FaCuttlefish />} name="C" />
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="flex items-center gap-3 text-xl font-semibold mb-6">
                            <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                            Tool
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            <Skill icon={<FaGitAlt />} name="Git" />
                            <Skill icon={<FaGithub />} name="GitHub" />
                            <Skill icon={<BiLogoVisualStudio />} name="VS Code" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* Skill Pill Component */
function Skill({ icon, name }) {
    return (
        <div
            className="group flex items-center gap-3 px-5 py-3
      rounded-xl bg-white/5 backdrop-blur-lg
      border border-white/10

      transition-all duration-300 ease-out
      hover:scale-[1.08]
      hover:border-indigo-400/40
      hover:shadow-lg hover:shadow-indigo-500/30 hover:cursor-pointer"
        >
            <span
                className="text-indigo-400 text-lg
        transition-transform duration-300
        group-hover:scale-110"
            >
                {icon}
            </span>

            <span className="text-gray-200 font-medium">
                {name}
            </span>
        </div>
    );
}

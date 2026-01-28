import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Learnify Verse",
        description:
            "Study material platform for B.Tech resources organized by course, semester, and subject.",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/TufailMd/Learning-Verse",
        demo: "https://learnifyverse.vercel.app",
    },
    {
        title: "Feels Like Home",
        description:
            "Full-stack booking platform with authentication, file uploads, cloud storage, and MVC architecture.",
        tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/TufailMd/feels-like-home/tree/main",
        demo: "https://feels-like-home-one.vercel.app",
    },
    {
        title: "Todo Web App",
        description:
            "Task manager with CRUD operations and real-time updates using modern React tooling.",
        tech: ["React", "Redux Toolkit", "Tailwind CSS", "Vite"],
        github: "https://github.com/TufailMd/ToDo-App",
        demo: "https://todo-app.vercel.app",
    },
    {
        title: "Smart Employee Management",
        description:
            "CRUD-based employee system with search functionality and persistent data storage.",
        tech: ["JavaScript", "Bootstrap 5", "REST API"],
        github: "https://github.com/TufailMd/Employee-Management-System",
        demo: "#",
    },
    {
        title: "eBay E-Commerce App",
        description:
            "E-commerce app using FakeStore API with cart management and order history.",
        tech: ["JavaScript", "Bootstrap 5", "REST API"],
        github: "https://github.com/TufailMd/eBuy-Small-E-Com",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-28 px-6
      bg-gradient-to-br from-[#05060a] via-[#070b1a] to-[#05060a]
      text-white scroll-mt-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        A selection of my recent work.
                    </p>
                    <div className="mt-6 w-24 h-1 bg-indigo-500 rounded-full" />
                </div>

                {/* Projects Grid */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-8
              transition-all duration-500 ease-out
              hover:-translate-y-2 hover:scale-[1.03]
              hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
                        >
                            {/* Glow Layer */}
                            <div className="absolute inset-0 rounded-2xl
                bg-indigo-500/10 blur-2xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500" />

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-semibold mb-3
                  group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1 rounded-full
                      bg-white/10 border border-white/10
                      text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="p-3 rounded-full
                    bg-white/10 hover:bg-white/20
                    hover:scale-110 transition"
                                    >
                                        <FaGithub />
                                    </a>

                                    {project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            className="p-3 rounded-full
                      bg-indigo-500/90 hover:bg-indigo-500
                      hover:scale-110 transition"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

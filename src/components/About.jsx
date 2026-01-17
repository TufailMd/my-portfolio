export default function About() {
    return (
        <section
            id="about"
            className="py-28 px-6
            bg-gradient-to-br from-[#05060a] via-[#070b1a] to-[#05060a]
            text-white scroll-mt-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-indigo-400">
                        About Me
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        Building scalable solutions and learning constantly.
                    </p>
                    <div className="mt-6 mx-auto w-24 h-1 bg-indigo-500 rounded-full" />
                </div>

                {/* Glass Card */}
                <div
                    className="max-w-4xl mx-auto
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    rounded-3xl p-8 md:p-12
                    shadow-xl shadow-indigo-500/10"
                >
                    <p className="text-gray-300 leading-relaxed text-lg">
                        I&apos;m <span className="text-white font-semibold">Md Tufail</span>, a
                        Computer Science student at
                        <span className="text-indigo-400 font-semibold">
                            {" "}Parul University
                        </span>{" "}
                        with a strong passion for full-stack development. I combine
                        solid fundamentals in Data Structures, Algorithms, and OOP
                        with hands-on experience building real-world web applications.
                    </p>

                    <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                        My expertise spans both frontend and backend development,
                        from crafting responsive UIs with
                        <span className="text-white font-medium">
                            {" "}React and Tailwind CSS
                        </span>{" "}
                        to building RESTful APIs with
                        <span className="text-white font-medium">
                            {" "}Node.js and Express
                        </span>.
                        I focus on writing maintainable code, debugging efficiently,
                        and following best practices like MVC architecture.
                    </p>

                    <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                        My goal is to secure meaningful internships and contribute
                        to impactful projects while continuously growing as a
                        developer.
                    </p>
                </div>

            </div>
        </section>
    );
}

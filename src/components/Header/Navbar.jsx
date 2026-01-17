export default function Navbar({ mobile = false, onClick }) {
  const navItems = [
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <nav className={mobile ? "bg-[#070b1a] border border-white/10 rounded-2xl p-6" : ""}>
      <ul className={`flex ${mobile ? "flex-col gap-6" : "gap-8"} items-center`}>
        {navItems.map(item => (
          <li key={item.label}>
            <a
              href={item.link}
              onClick={onClick}
              className="text-gray-300 hover:text-indigo-400 transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

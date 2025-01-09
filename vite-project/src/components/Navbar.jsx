import { useLocation, Link } from "react-router-dom";
import { IconBrandX, IconBrandInstagram, IconHome } from "@tabler/icons-react";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    {
      title: "Home",
      to: "/",
      icon: IconHome,
    },
    {
      title: "X (Twitter)",
      to: "/twitterstats",
      icon: IconBrandX,
    },
    {
      title: "Instagram",
      to: "/instagramstats",
      icon: IconBrandInstagram,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-semibold text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Socion
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                className={`p-2 rounded-lg transition-colors duration-200 
                  ${
                    currentPath === link.to
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  }`}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

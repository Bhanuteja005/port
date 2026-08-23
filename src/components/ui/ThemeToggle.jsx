import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { motion } from "framer-motion";

export const ThemeToggle = ({ className = "" }) => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        setIsLight(document.documentElement.classList.contains("light"));
    }, []);

    const toggleTheme = () => {
        const next = !isLight;
        setIsLight(next);
        document.documentElement.classList.toggle("light", next);
        try {
            localStorage.setItem("theme", next ? "light" : "dark");
        } catch (e) {
            // ignore storage errors (private browsing, etc.)
        }
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className={`relative flex items-center justify-center w-8 h-8 rounded-full text-primary-text hover:text-secondary transition-colors duration-300 ${className}`}
        >
            <motion.span
                key={isLight ? "sun" : "moon"}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
            >
                {isLight ? <FaSun size={18} /> : <FaMoon size={16} />}
            </motion.span>
        </button>
    );
};

export default ThemeToggle;

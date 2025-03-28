import { useEffect, useState } from "react";
import "./Mode.css";

const Mode = () => {
    const themes = ["light", "dark", "high-contrast"];
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const switchTheme = () => {
        const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
        setTheme(nextTheme);
    };

    return (
        <label className="theme-switch">
            <input 
                type="checkbox" 
                onChange={switchTheme} 
                checked={theme === "dark" || theme === "high-contrast"}
            />
            <span className={`slider ${theme}`}></span>
            {/* <span className="theme-icon">
                {theme === "light" ? "☀️" : theme === "dark" ? "🌙" : "⚡"}
            </span> */}
        </label>
    );
};

export default Mode;

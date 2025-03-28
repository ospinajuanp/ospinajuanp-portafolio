import { IoHome } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import Mode from "../Mode/Mode";
import { useState, useEffect } from "react";
import './Header.css'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const menuEl = document.getElementsByClassName("menu")[0];
    if (isMenuOpen) {
        menuEl.classList.add("open");
    } else {
        menuEl.classList.remove("open");
    }
    }, [isMenuOpen]);

    return (
        <div className="header-container">
            <div className="header">
                <div className="mode">
                    <Mode/>
                </div>
                <div className="name">
                    ospinajuanp
                </div>
                
                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoMenuOutline />
                </div>
            </div>
            <ul className="menu">
                <li className="element"><IoHome />Home</li>
                <li className="element"><FaCode />Skills</li>
                <li className="element"><FaLaptopCode />Projects</li>
                <li className="element"><MdEmail />Contact</li>
            </ul>
        </div>
    );
};

export default Header;
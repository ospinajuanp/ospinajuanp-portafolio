import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
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
                {/* <li><Link className="element" to="/blogpost"> <FaBlogger />Blog</Link></li> */ /* TODO: BlogPost*/ } 
                <li ><a className="element" href="#home"><IoHome />Home</a></li>
                <li><a className="element" href="#skills"><FaCode />Skills</a></li>
                <li><a className="element" href="#projects"><FaLaptopCode />Projects</a></li>
                <li><a className="element" href="#contact"><MdEmail />Contact</a></li>
            </ul>
        </div>
    );
};

export default Header;
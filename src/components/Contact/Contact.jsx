import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Contact.css"

const Contact = () => {

    const handleClick = () => {
        navigator.clipboard.writeText('juanpo996@gmail.com')
    }

    return (
        <div className="contact-container" id="contact">
            <h2 className="contact-title">Get in touch</h2>
            <div className="contact-email" onClick={handleClick}>
                <MdEmail />
                <div> juanpo996@gmail.com</div>
            </div>
            <div className="contact-icons" >
                <a className="contact-icon" target="_blank" href="https://github.com/ospinajuanp">
                    <FaGithub />
                </a>
                <a className="contact-icon" target="_blank" href="https://www.linkedin.com/in/ospinajuanp/">
                    <FaLinkedin />
                </a>
                <a className="contact-icon" target="_blank" href="https://twitter.com/ospinajuanp">
                    <FaXTwitter />
                </a>
            </div>
        </div>
    );
};

export default Contact;
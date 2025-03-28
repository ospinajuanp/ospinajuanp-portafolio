import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaMarkdown } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import Skill from "./Skill";
import "./SkillsContainer.css"

const SkillsContainer = () => {
    return (
        <div className="skills-container" id="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-list">
                <Skill name={"HTML"} icon={<RiHtml5Fill/>}/>
                <Skill name={"CSS"} icon={<FaCss3Alt />}/>
                <Skill name={"Sass"} icon={<FaSass />}/>

                <Skill name={"Javascript"} icon={<RiJavascriptFill />}/>
                <Skill name={"Typescript"} icon={<SiTypescript />}/>
                <Skill name={"React"} icon={<FaReact />}/>
                <Skill name={"Git"} icon={<FaGitSquare />}/>
                <Skill name={"SQL"} icon={<FaDatabase />}/>
                <Skill name={"Markdown"} icon={<FaMarkdown />}/>
            </div>
        </div>
    );
};

export default SkillsContainer;
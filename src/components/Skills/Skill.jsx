import "./Skill.css"

const Skill = ({name, icon}) => {
    return (
        <div className="skill">
            <div className="skill-icon">
                {icon}
            </div>
            <div className="skill-name">
                {name}
            </div>
        </div>
    );
};

export default Skill;
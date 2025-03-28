import './Profile.css'
const Profile = () => {
    return (
        <div className="profile-container" id="project">
            <div className="profile-left">
                <img src="imgNoFondo.png" alt="profile" />
            </div>
            <div className="profile-right">
                <div className="greeting">
                    Hello, I`m
                </div>
                <h1 className="nameProfile">Juan Pablo Ospina</h1>
                <div className="job">
                    <h2>Junior Frontend Developer </h2>
                </div>
                <div className="buttons">
                    <button className='button btn-work'>My Work</button>
                    <button className='button btn-contact'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
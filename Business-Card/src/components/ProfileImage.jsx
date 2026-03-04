import profile from "../assets/profile-img.jpg"
function ProfileImage()
{
    return (
        <img
            className="profile-img"
            src={profile}
            alt="profile"
        />
    );
}

export default ProfileImage;
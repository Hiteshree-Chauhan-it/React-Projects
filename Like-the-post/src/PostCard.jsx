import profile from "./assets/profile-img.jpg"
import React, {useState} from "react";
import "./PostCard.css";

function PostCard()
{
    const[liked,setLiked] = useState(false);

    function handleClick()
    {
        setLiked(!liked);
    }

    return (
        <div className="card">
            <h3>Hiteshree Chauhan</h3>
            <img 
                className="post-image"
                src={profile}
                alt="image"
            ></img>
            <div className="post-content">
                <p className="caption">Rewind please !</p>

                <span
                className="heart"
                onClick={handleClick}
                style={{color:liked ? "red" : "gray"}}
                >
                 ♥
                </span>
            </div> 
        </div>
    )
}

export default PostCard;

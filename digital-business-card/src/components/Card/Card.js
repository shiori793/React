import "./Card.css"
import mailIcon from "../../image/mail-icon.png"
import twitterIcon from "../../image/twitter-icon.png"
import facebookIcon from "../../image/facebook-icon.png"
import instagramIcon from "../../image/instagram-icon.png"
import linkedinIcon from "../../image/linkedin-icon.png"
import githubIcon from "../../image/github-icon.png"

const Card = (props) => {
    const mailTo = "mailto: " + props.email;
    return (
        <div className="card">
            <div className="card--header">
                <img src={props.avatar} alt="" />
            </div>
            <div className="card--body">
                <div className="title">
                    <h1>{props.fullName}</h1>
                    <p>{props.title}</p>
                    <a href="">{props.fullName.toLowerCase().replace(/\s/g, '')}.website</a>
                    <a href={mailTo}><button><img src={mailIcon} />Email</button></a>
                </div>
                <div className="info">
                    <h3>About</h3>
                    <p>{props.about}</p>
                </div>
                <div className="info">
                    <h3>Interests</h3>
                    <p>{props.interests}</p>
                </div>
            </div>
            <div className="card--footer">
                <a href=""><img src={twitterIcon} alt="" /></a>
                <a href=""><img src={facebookIcon} alt="" /></a>
                <a href=""><img src={instagramIcon} alt="" /></a>
                <a href=""><img src={linkedinIcon} alt="" /></a>
                <a href=""><img src={githubIcon} alt="" /></a>
            </div>
        </div>
    )
}

export default Card
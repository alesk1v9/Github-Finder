import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./User.module.css";


const User = ({ login, avatar_url, location, following, followers }: UserProps) => {
  return (
    <div className={classes.user}>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location &&
            <p className={classes.location}>
            <MdLocationPin />
            <span>{location}</span>
            </p>
        }
        <div className={classes.stats}>
            <div>
                <p>Following:</p>
                <p className={classes.number}>{following}</p>
            </div>
            <div>
                <p>Followers:</p>
                <p className={classes.number}>{followers}</p>
            </div>
        </div>
        <Link to={`repos/${login}`}>See best projects</Link>
    </div>
  
)}

export default User
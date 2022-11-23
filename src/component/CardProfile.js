import "./CardProfile.css";

export default function CardProfile(props) {
    return (
        <div className="containerCardProfile">
            <img src={props.avatar} alt="avatar" className="avatarProfile" />
            <div className="containerProfileitems">
                <p className="name">Anas Noor Hakim</p>
                <p className="usernameProfile">Github : {props.username}</p>
                <p className="emailProfile">Email : {props.email}</p>
                <p className="bioProfile">Bio : {props.bio}</p>
                <p className="locationProfile">Lokasi : {props.location}</p>
            </div>
        </div>
    );
}

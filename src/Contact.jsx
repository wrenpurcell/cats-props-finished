export default function Contact(props) {
console.log(props.img)
    return (
        <div className="contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={require("./images/phone-icon.png" )}alt="icon of a phone" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={require("./images/mail-icon.png" )}alt="icon for email" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

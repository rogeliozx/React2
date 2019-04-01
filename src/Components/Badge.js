import React from "react";
import "./styles/Badge.css";
import Banner from "../Images/Avenged1.png";
class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={Banner} alt="Logo" />
        </div>
        <div className="badge_section-name">
          <img
            className="badge_avatar"
            src="https://secure.gravatar.com/avatar/563ebfe8f0f7794677ee9c60161d02ca"
            alt="Avatar"
          />
          <h1>
            Rogelio <br />
            Romero
          </h1>
        </div>
        <div className="badge_section-info">
          <h3>Web Development</h3>
          <div>@React</div>
        </div>
        <footer className="badge_footer">#Avenged</footer>
      </div>
    );
  }
}
export default Badge;

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return "dunno";

      case false:
        return "Nope";
      default:
        return "yep";
    }
  };
  console.log(props);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);

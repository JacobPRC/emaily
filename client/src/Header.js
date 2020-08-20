import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Payments from "./components/Payments";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Sign in with Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="22" style={{ margin: "0px 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="222S">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { auth: state.authReducer };
};

export default connect(mapStateToProps)(Header);

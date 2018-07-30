import React from "react";
import logo from "../../images/nav/logo.svg";
import { NavLink } from "react-router-dom";
import "./Nav.css";

// React Redux
import { connect } from 'react-redux';
import { curtainColor } from '../../redux/actions/curtain';
import PropTypes from 'prop-types';

class Nav extends React.Component {

  render() {
    return (
      <div className="blurBar">
        <NavLink to="/" onClick={() => this.props.curtainColor(["#32b67a", "#fa8072", "#fcd12A"])}>
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <div className="MenuContainer">
          <NavLink
            className="MenuItem"
            exact
            to="/"
            onClick={() => this.props.curtainColor(["#32b67a", "#fa8072", "#fcd12A"])}
          >
            Work
          </NavLink>
          <NavLink
            className="MenuItem"
            to="/about"
            onClick={() => this.props.curtainColor(["#32b67a", "#fa8072", "#fcd12A"])}
          >
            About
          </NavLink>
        </div>


      </div>
    );
  }
}

Nav.propTypes = {
  curtainColor: PropTypes.func.isRequired
};

export default connect(null, { curtainColor })(Nav);


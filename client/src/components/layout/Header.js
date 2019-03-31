import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = props => {
    const { authenticated } = props;
    return (
        <div className="header">
            <Link className="header__btn" to="/">
                Redux Auth
            </Link>
            {!authenticated && (
                <Link className="header__btn" to="/signup">
                    Sign Up
                </Link>
            )}
            {!authenticated && (
                <Link className="header__btn" to="/signin">
                    Sign In
                </Link>
            )}
            {authenticated && (
                <Link className="header__btn" to="/signout">
                    Sign Out
                </Link>
            )}
            <Link className="header__btn" to="/features">
                Feature
            </Link>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps)(Header);

import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
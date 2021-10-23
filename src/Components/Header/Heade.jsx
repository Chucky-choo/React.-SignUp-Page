import React from 'react';
import logo from "../../Images/logo.png";
import {useStyles} from "./HeaderStyle";



const Header = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<img className={classes.logo} src={logo} alt="logo"/>
			<h1 className={classes.h1}>Sign Up with email</h1>
		</div>
	);
};

export default Header;

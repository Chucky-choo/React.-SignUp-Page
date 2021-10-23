import React from 'react';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
	wrapper: {
		margin: '20px 0 20px 0',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'& a': {
			color: '#3C9C41',
			fontSize: 18,
		},
		'& p': {
			color: '#5B5B5B',
			fontSize: 18,
			marginRight: 7,
		}
	},

	'@media (max-width: 767px)': {
		wrapper: {
			marginBottom: 16,

			'& a': {
				color: '#3C9C41',
				fontSize: 14,
			},
			'& p': {
				color: '#5B5B5B',
				fontSize: 14,
				marginRight: 7,
			}
		},
	}
})

const Footer = () => {
	const c = useStyles()
	return (
		<>
			<div className={c.wrapper}>
				<p>Already have an account?</p>
				<a href="http://localhost:3000/">Log in</a>
			</div>
			<div className={c.wrapper}>
				<p>Review privacy and disclosures </p>
				<a href="http://localhost:3000/">here</a>
			</div>
		</>
	);
};

export default Footer;

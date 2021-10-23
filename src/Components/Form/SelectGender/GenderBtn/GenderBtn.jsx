import React from 'react';
import {Field} from 'formik';
import {useStyles} from "./GenserBtnStyle";

const GenderBtn = ({icon, name, value, gender, setGender, secondIcon}) => {
	const classes = useStyles()


	return (
		<label
			className={classes.container}
			style={(gender === value)?{border: '1px solid #3C9C41'}:null}
			onClick={() => {setGender(value)}}
		>
			<img
				className={classes.img}
				src={(gender === value)? secondIcon: icon}
				alt={value}
			/>
			<Field
				type="radio"
				name={name}
				value={value}
				style={{display: 'none'}}
			/>
			<p
				style={(gender === value)?{
					color: '#3C9C41',
					fontWeight: 'bold',
				}:null}
			>
				{value}
			</p>
		</label>
	);
};

export default GenderBtn;

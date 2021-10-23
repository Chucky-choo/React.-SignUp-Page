import React from 'react';
import {Field} from 'formik';

const GenderBtn = ({icon, name, value}) => {
	return (
		<label>
			<img src={icon} alt=""/>
			<Field type="radio" name={name} value={value} />
			<p>{value}</p>
		</label>
	);
};

export default GenderBtn;

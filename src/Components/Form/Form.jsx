import React from 'react';
import {Formik, Form} from 'formik';
import TextField from "../MyTextField/TextField";
import {useStyles} from "./FormStyle";
import {Validatione} from "./Validatione";
import PasswordField from "../PasswordField/PasswordField";
import {SubmittedButton} from "./SubmittedButton";
import SelectGender from "./SelectGender/SelectGender";


const Footer = () => {
	const classes = useStyles()

	return (
		<Formik
			initialValues={{
				gender: '',
				email: '',
				password: '',
				confirmPassword: '',
			}}
			validationSchema={Validatione}
			onSubmit={(values, {setSubmitting, resetForm}) => {
				let {confirmPassword, ...result} = values
				alert(JSON.stringify(result, null, 2));
				setSubmitting(false);
				resetForm()
			}}
		>
			<Form
				className={classes.form}
				autoComplete="off"
			>
				<SelectGender/>
				<TextField
					type='text'
					label='E-mail'
					name='email'
					placeholder='email'
				/>
				<PasswordField
					type='text'
					label='Create Password'
					name='password'
				/>
				<PasswordField
					type='text'
					label='Confirm Password'
					name='confirmPassword'
				/>
				<SubmittedButton
					type='submit'
					variant="contained"
					disableRipple
				>
					Sign Up
				</SubmittedButton>
			</Form>
		</Formik>
	);
};

export default Footer;

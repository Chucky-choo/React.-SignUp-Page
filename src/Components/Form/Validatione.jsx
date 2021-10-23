import * as yup from "yup";

export const Validatione = yup.object().shape({
	email: yup.string()
		.email()
		.required('Required'),
	password: yup.string()
		.required('Required')
		.min(6),
	confirmPassword: yup.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Required')
})

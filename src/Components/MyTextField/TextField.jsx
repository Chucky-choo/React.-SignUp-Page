import {useField} from "formik";
import {styles, useClasses} from "./FildStyle";
import {useStyles} from "../PasswordField/PasswordStyle";


const TextField = ({label, errorMessage, ...props}) => {
	const c = useStyles()
	const classes = useClasses()

	const [field, meta] = useField(props);
	return (
		<label className={c.root}>
			<span className={c.label}>
				{label}
			</span>
			<input
				{...field}
				{...props}
				className={classes.in}
				style={styles(meta)}
			/>
			{meta.touched && meta.error ? (
				<p>{meta.error}</p>
			) : null}
		</label>
	);
};

export default TextField
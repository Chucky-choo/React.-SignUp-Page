import {useField} from "formik";
import {useStyles} from "./FildStyle";


const MyTextField = ({label, errorMessage, ...props}) => {
	const c = useStyles()

	const [field, meta] = useField(props);
	return (
		<label className={c.root}>
			{label}
			<input
				{...field}
				{...props}
				className={c.in}
			/>
			{meta.touched && meta.error ? (
				<p>{meta.error}</p>
			) : null}
		</label>
	);
};

export default MyTextField
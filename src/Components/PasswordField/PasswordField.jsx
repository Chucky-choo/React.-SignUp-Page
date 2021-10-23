import {useField} from "formik";
import {styles} from "../MyTextField/FildStyle";
import {useState} from "react";
import {IconButton} from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import {useStyles} from "./PasswordStyle";


const PasswordField = ({label, errorMessage, ...props}) => {
	const c = useStyles()
	const [field, meta] = useField(props);
	const [showPassword, setValues] = useState(false)

	const handleClickShowPassword = () => {
		setValues(!showPassword);
	};

	return (
		<label className={c.root}>
			<span className={c.label}>
				{label}
			</span>
			<div
				className={c.inputContainer}
				style={styles(meta)}
			>
				<input
					type={showPassword ? 'text' : 'password'}
					{...field}
					className={c.in}
					style={meta.touched && meta.error?{color: '#D23737'}:null}
				/>
				<IconButton
					aria-label="toggle password visibility"
					onClick={handleClickShowPassword}
					edge="end"
					style={{color: '#C1C1C1'}}
				>
					{showPassword
						? <VisibilityOffOutlinedIcon sx={{fontSize: 28}}/>
						: <RemoveRedEyeOutlinedIcon sx={{fontSize: 28}}/>
					}
				</IconButton>
			</div>
			{meta.touched && meta.error ? (
				<p>{meta.error}</p>
			) : null}
		</label>
	);
}

export default PasswordField
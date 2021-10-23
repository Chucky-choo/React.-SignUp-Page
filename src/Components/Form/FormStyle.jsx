import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	genders: {
		display: 'flex',
	},
	btn: {
		width: "590px",
		height: "80px",
		borderColor: '#ac2e6b',
		'&:hover': {
			color: "red"
		},
	}
});
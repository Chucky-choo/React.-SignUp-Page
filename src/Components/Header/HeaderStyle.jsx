import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	logo: {
		margin: '29px 0 24px',
		width: '14%',
		height: '8.5%',
		minHeight: 56,
		minWidth: 55

	},
	h1: {
		margin: 0,
		padding: 0,
		color: '#5B5B5B',
		fontWeight: 'bold',
		fontSize: 24,
	}
});
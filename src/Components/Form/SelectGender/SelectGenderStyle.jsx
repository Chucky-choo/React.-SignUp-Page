import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		margin: '35px 0 0',
		width: 500,
		},

	label: {
		alignSelf: 'start',
		color: '#5B5B5B',
		fontWeight: 'bold',
	},

	'@media (max-width: 767px)': {
		root:{
			width: 308,
			height: 108,
			marginTop: 24,
		}
	}
})

import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		margin: '30px 0 0',
		width: '88%',
		alignItems: 'start',

		'& p': {
			color: '#D23737',
			margin: 10
		},

	},
	inputContainer: {
		display: 'flex',
		alignItems: 'center',
		margin: '12px 0 0',
		border: '1px solid #C1C1C1',
		borderRadius: 16,
	},

	label: {
		alignSelf: 'start',
		color: '#5B5B5B',
		fontWeight: 'bold',
	},

	in: {
		background: 'transparent',
		color: ' #5B5B5B',
		width: 'calc(93% - 50px)',
		maxWidth: 448.02,
		height: 20,
		padding: '24px 0 24px 25px',
		outline: "none",
		fontSize: 18,
		border: 'none',
		fontFamily: 'Montserrat, sans-serif',
		borderRadius: 16,

		'&::placeholder': {
			color: '#C1C1C1',
		},

		'&:focus': {
			background: 'transparent',
		},
	},

	'@media (max-width: 767px)': {
		root: {
			width: 308,
		},
		label: {
			fontSize: 16,
		},
		in: {
			height: 18,
			fontSize: 16,
			padding: '15px 0 15px 18px',
		}

	}

})

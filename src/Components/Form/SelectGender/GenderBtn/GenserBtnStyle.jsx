import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
	container: {
		margin: '12px 0 0',
		border: '1px solid #C1C1C1',
		borderRadius: 16,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: 156,
		height: 100,

		'& p':{
			fontSize: 18,
			marginTop: 8,
		},

	},
	img:{
		height: 32,
	},

	'@media (max-width: 767px)': {
		container:{
			width: 90,
			height: 80,
			marginTop: 8,
			'& p':{
				fontSize: 16,
			},
		}
	}

});
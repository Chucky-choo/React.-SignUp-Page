import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

export const SubmittedButton = styled(Button)({
	boxShadow: 'none',
	textTransform: 'none',
	fontSize: 18,
	padding: '6px 12px',
	backgroundColor: '#3C9C41',
	height: 70,
	width: 500,
	borderRadius: 16,
	margin: '30px 0 14px',

	'&:hover': {
		backgroundColor: '#4DB252',
		boxShadow: 'none',
	},
	'&:active': {
		boxShadow: 'none',
		backgroundColor: '#318636',
	},

	'@media (max-width: 767px)': {
		height: 50,
		width: 308,
		margin: '20px 0 0'
	}
});
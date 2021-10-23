import {makeStyles} from "@mui/styles";

export const useClasses = makeStyles({
	in: {
		background: '#ffffff',
		color: ' #5B5B5B',
		width: 'calc(100% - 50px)',
		maxWidth: 448.02,
		height: 20,
		border: '1px solid #C1C1C1',
		borderRadius: 16,
		padding: '24px 25px 24px',
		outline: "none",
		fontSize: 18,
		margin: '12px 0 0',
		fontFamily: 'Montserrat, sans-serif',

		'&::placeholder': {
			color: '#C1C1C1',
		},

	},

	'@media (max-width: 767px)': {
		in: {
			height: 18,
			fontSize: 16,
			padding: '15px 18px',
			width: 'calc(100% - 38px)',
		}
	}
})

export const styles = (meta) => {
	let combo = {}
	if (meta.touched && meta.error) {
		combo.border = '1px solid #D23737'
		combo.color = '#D23737'
	} else if (meta.touched && !meta.error) {
		combo.border = '1px solid #87D78B'
	}
	return combo
}

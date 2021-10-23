import {makeStyles} from '@mui/styles';
import Header from "./Components/Header/Heade";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";


const useStyles = makeStyles({
	'@global': {
		body: {
			margin: 0,
			padding: 0,
			fontFamily: 'Montserrat, sans-serif',
			'& a, p': {
				margin: 0,
				padding: 0,
			}
		},
	},
	root: {
		minHeight: '100vh',
		minWidth: '100vw',
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#E5E5E5'
	},
	wrapper: {
		maxWidth: 570,
		width: '100%',
		borderRadius: 16,
		backgroundColor: 'white',
		paddingBottom: 16
	},

	'@media (max-width: 767px)': {
		wrapper:{
			width: 340,
		}
	}
});

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<Header/>
				<Form/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;

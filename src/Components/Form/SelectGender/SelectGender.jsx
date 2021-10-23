import React, {useState} from 'react';
import malePng from '../../../Icons/male.png'
import maleGreen from '../../../Icons/maleGreen.png'
import femalePng from '../../../Icons/famele.png'
import otherPng from '../../../Icons/other.png'
import otherGreen from '../../../Icons/otherGreen.png'
import femaleGreen from '../../../Icons/femaleGreen.png'
import {Grid} from "@mui/material";
import GenderBtn from "./GenderBtn/GenderBtn";
import {useStyles} from "./SelectGenderStyle";



const SelectGender = () => {
const c = useStyles()

	const [gender, setGender] = useState(null);

	return (
		<div className={c.root}>
			<p className={c.label}>Gender</p>
			<Grid
				aria-labelledby="my-radio-group"
				container
				role="group"
				justifyContent="space-between"
			>
				<GenderBtn
					value='Male'
					icon={malePng}
					secondIcon={maleGreen}
					name="gender"
					gender={gender}
					setGender={setGender}
				/>
				<GenderBtn
					value='Female'
					icon={femalePng}
					secondIcon={femaleGreen}
					name="gender"
					gender={gender}
					setGender={setGender}
				/>
				<GenderBtn
					value='Other'
					icon={otherPng}
					secondIcon={otherGreen}
					name="gender"
					gender={gender}
					setGender={setGender}
				/>
			</Grid>
		</div>
	);
};

export default SelectGender;

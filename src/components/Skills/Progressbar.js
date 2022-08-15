import React from 'react'
import "./Progressbar.css"

const Progressbar= ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '80%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		
	}
	
	const Childdiv = {
		
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div className="parent" style={Parentdiv}>
	<div className="child" style={Childdiv}>
		<span style={progresstext}>{`${progress}%`}</span>
	</div>
	</div>
	)
}

export default Progressbar;

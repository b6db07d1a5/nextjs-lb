import React from 'react'

export default function(props) {
	console.log(props.isOpen)
	return (
		<div>
			<a href='https://www.sanook.com' onClick={props.clickArrow('sabparod')} >Click Sanook</a>
			{/* <button onClick={props.clickArrow('sabparod')}>click</button> */}

			index page
		</div>
	)
}

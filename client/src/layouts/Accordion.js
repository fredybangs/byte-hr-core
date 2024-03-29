import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@material-ui/core';

const Accordion = (props) => {
	const [active, setActive] = useState(false);
	const contentRef = useRef(null);

	useEffect(() => {
		contentRef.current.style.maxHeight = active
			? `${contentRef.current.scrollHeight}px`
			: '0px';
	}, [contentRef, active]);

	const toogleActive = () => {
		setActive(!active);
	};

	const titleStyle = {
		fontWeight: 300,
		fontSize: '30px',
	};

	return (
		<div className='accordion-section'>
			<Button variant='outlined' color='primary' onClick={toogleActive}>
				<p style={titleStyle}>{props.title}</p>
				<span className={active ? 'accordion-icon rotate' : 'accordion-icon'}>
					>
				</span>
			</Button>
			<br />
			<div ref={contentRef} className='accordion-content'>
				{props.children}
			</div>
		</div>
	);
};

export default Accordion;

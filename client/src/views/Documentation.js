import React from 'react';
// import sections
import About from '../components/sections/About';
import Cta from '../components/sections/Cta';

const Documentation = () => {
	return (
		<>
			<About className='illustration-section-01' />
			<Cta split />
		</>
	);
};

export default Documentation;

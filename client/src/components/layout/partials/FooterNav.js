import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({ className, ...props }) => {
	const classes = classNames('footer-nav', className);

	return (
		<nav {...props} className={classes}>
			<ul className='list-reset'>
				{/* <li>
					<Link to='#0'>Contact</Link>
				</li> */}
				<li>
					<a href='https://byteltd.com'>About us</a>
				</li>
				<li>
					<Link to='/documentation'>FAQ's</Link>
				</li>
				{/* <li>
					<Link to='#0'>Support</Link>
				</li> */}
			</ul>
		</nav>
	);
};

export default FooterNav;

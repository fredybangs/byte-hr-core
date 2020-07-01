import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from '../elements/ButtonGroup';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';

const propTypes = {
	...SectionProps.types,
	split: PropTypes.bool,
};

const defaultProps = {
	...SectionProps.defaults,
	split: false,
};

const Cta = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	split,
	...props
}) => {
	const outerClasses = classNames(
		'cta section center-content-mobile reveal-from-bottom',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className,
	);

	const innerClasses = classNames(
		'cta-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider',
		split && 'cta-split',
	);

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<div className='container-sm'>
						<h3 className='m-0'>Leave Us A Message</h3>
						<br />
						<div className='cta-action'>
							<Input
								id='newsletter'
								type='email'
								label='Subscribe'
								labelHidden
								hasIcon='right'
								placeholder='Your Email'></Input>
							<br />
							<Input
								id='newsletter'
								type='email'
								label='Subscribe'
								labelHidden
								hasIcon='right'
								placeholder='Your Message'></Input>
							<br />
							<ButtonGroup>
								<Button tag='a' color='dark' wideMobile href=''>
									Send Message
								</Button>
							</ButtonGroup>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;

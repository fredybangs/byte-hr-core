import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const outerClasses = classNames(
		'hero section center-content',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className,
	);

	const innerClasses = classNames(
		'hero-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider',
	);

	return (
		<section {...props} className={outerClasses}>
			<div className='container-sm'>
				<div className={innerClasses}>
					<div className='hero-content'>
						<h1
							className='mt-0 mb-16 reveal-from-bottom'
							data-reveal-delay='200'>
							Welcome to <span className='text-color-primary'>Byte HRMS</span>
						</h1>
						<div className='container-xs'>
							<p
								className='m-0 mb-32 reveal-from-bottom'
								data-reveal-delay='400'>
								HR work is more complex and involved today than it ever has
								been. There’s so much that goes into the management of employee
								information, which is used for everything from recruiting and
								hiring to training, evaluations, and so much more. The
								importance and manpower behind these tasks make it critical for
								human resources professionals to have HR management software for
								more efficient management of HR information.
							</p>
							<div className='reveal-from-bottom' data-reveal-delay='600'>
								<ButtonGroup>
									<Button tag='a' color='primary' wideMobile href='#0'>
										Free Trial
									</Button>
									<Button
										tag='a'
										color='dark'
										wideMobile
										href='https://byteltd.com/'>
										About Byte Limited
									</Button>
								</ButtonGroup>
							</div>
						</div>
					</div>
					<div
						className='hero-figure reveal-from-bottom illustration-element-01'
						data-reveal-value='20px'
						data-reveal-delay='800'>
						<Image
							className='has-shadow'
							src={require('./../../assets/images/video-placeholder.jpg')}
							alt='Hero'
							width={896}
							height={504}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

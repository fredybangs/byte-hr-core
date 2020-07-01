import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		'features-split section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className,
	);

	const innerClasses = classNames(
		'features-split-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider',
	);

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top',
	);

	const sectionHeader = {
		title: 'Our Core Features',
		paragraph:
			'Byte HRMS encompasses three human resources management functions: Personnel Tracking, HR Organization Setups and Payroll Management. Every organization requires these functions once it has reached a critical mass of employees where manually running payroll and managing employees with spreadsheets becomes too burdensome a task. Each of these functions is as described below.',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className='center-content' />
					<div className={splitClasses}>
						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Payroll Management
								</div>
								<h3 className='mt-0 mb-12'>Automate core payroll tasks</h3>
								<p className='m-0'>
									Fortunately for accounting and HR departments, our HRMS can do
									most of the heavy lifting when it comes to payroll. From
									conveniently storing basic employee information to keeping you
									up to date with the most current tax laws, there isn’t much
									our HRMS can’t do for you. Our HRMS is able to automatically
									calculate wages and taxes and we customize these features to
									meet your specific payroll processes, allowing you to process
									payroll effortlessly. Our system can also help track employee
									costs, store and locate employee records, generate forms and
									send you reminders when it’s time to approve payroll.
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill',
								)}
								data-reveal-container='.split-item'>
								<Image
									src={require('./../../assets/images/features-split-image-01.png')}
									alt='Features split 01'
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-right'
								data-reveal-container='.split-item'>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Employee Information Management
								</div>
								<h3 className='mt-0 mb-12'>
									Employee Records and Self-Service Portal
								</h3>
								<p className='m-0'>
									Our HRMS include a complete directory of employee profiles
									that can include personal information, job and salary history,
									banking and tax details, insurance plans, leave requests,
									disciplinary history, performance feedback or any other custom
									fields important for your company. This keeps all of your
									employees’ information linked to the main record, for ease of
									tracking and reporting. Our HRMS can provide an employee
									self-service portal, letting them log in and view important
									information as well as a knowledge base of informative
									documents.
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill',
								)}
								data-reveal-container='.split-item'>
								<Image
									src={require('./../../assets/images/features-split-image-02.png')}
									alt='Features split 02'
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Time and Attendance Management
								</div>
								<h3 className='mt-0 mb-12'>
									Organize and track employee hours and schedules
								</h3>
								<p className='m-0'>
									Gone are the days of filing in one-by-one, standing in line,
									taking your timecard and feeding it into a machine at the
									beginning and end of your day. Time and Attendance helps you
									Organize and track employee hours and schedules; Prevent time
									theft and improve employee accountability; Track and monitor
									employee time, activities and productivity; Automate payroll
									and benefits processing and delivery; Comply with industry and
									government regulations.
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill',
								)}
								data-reveal-container='.split-item'>
								<Image
									src={require('./../../assets/images/features-split-image-03.png')}
									alt='Features split 03'
									width={528}
									height={396}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;

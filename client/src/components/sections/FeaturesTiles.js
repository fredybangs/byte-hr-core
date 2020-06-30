import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		'features-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className,
	);

	const innerClasses = classNames(
		'features-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider',
	);

	const tilesClasses = classNames(
		'tiles-wrap center-content',
		pushLeft && 'push-left',
	);

	const sectionHeader = {
		title: 'Overview of the Byte HRMS',
		paragraph:
			'Byte HRMS encompasses three human resources management functions: Personnel Tracking, HR Organization Setups and Payroll Management. Every organization requires these functions once it has reached a critical mass of employees where manually running payroll and managing employees with spreadsheets becomes too burdensome a task. Each of these functions is as described below',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className='center-content' />
					<div className={tilesClasses}>
						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/data-security.svg')}
											alt='Features tile icon 02'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Data Security</h4>
									<p className='m-0 text-sm'>
										Security is of great concern when it comes to choosing a
										human resources management system. The information stored in
										a HRMS is highly sensitive, including proprietary company
										data and volumes of personal information about employees.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='400'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/loan.svg')}
											alt='Features tile icon 06'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Loan Management</h4>
									<p className='m-0 text-sm'>
										Byte HRMS Loan module helps the user to configure different
										loan policies, assign approval authority, conduct the
										verification process and sanction loan for employees.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='400'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/recruit.svg')}
											alt='Features tile icon 03'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Recruitment</h4>
									<p className='m-0 text-sm'>
										A recruitment module should handle all your internal
										form-filling and authorization processes; allow managers
										+/or HR to post advertisements and supporting documentation
										online, offer applicant tracking and even initial sifting.
									</p>
								</div>
							</div>
						</div>
						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/working-time.svg')}
											alt='Features tile icon 05'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Time and Attendance</h4>
									<p className='m-0 text-sm'>
										Alongside payroll, this is probably one of the
										longest-standing HR automations: the time clock. These days,
										such systems often incorporate biometric identification to
										avoid ‘buddy punching’ and will link directly to (or be an
										integral part of) the workforce management module, with
										information links to your payroll and accounting software.
									</p>
								</div>
							</div>
						</div>
						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/management.svg')}
											alt='Features tile icon 04'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Performance Management</h4>
									<p className='m-0 text-sm'>
										Automating the appraisal process, recording and tracking
										objectives and targets, this module should incorporate your
										competence framework, job standards and/or other relevant
										systems.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/payroll.svg')}
											alt='Features tile icon 05'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Payroll Management</h4>
									<p className='m-0 text-sm'>
										The payroll module in Byte HRMS handles all requirements
										relating to accounting and management of an employee's
										payroll such as the ability to set and define pay components
										such as additions, deductions and tax tables, ability to
										process payslip for a single employee or a batch of
										employees and more.
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-header'>
									<div className='features-tiles-item-image mb-16'>
										<Image
											src={require('./../../assets/images/desk.svg')}
											alt='Features tile icon 02'
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8'>Absence and Leave Management</h4>
									<p className='m-0 text-sm'>
										Often linked to the time and attendance and workforce
										management functions, your leave management module is an
										automated way to allocate, book, approve, track and monitor
										any absence from the workplace. It may be for vacations,
										compassionate reasons, illness etc. Request and approval
										processes should be streamlined and the outcomes
										incorporated into team calendars where appropriate.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;

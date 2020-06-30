import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFaqs } from '../../data/actions/faqActions';

// import { Accordion, Card, Button } from 'react-bootstrap';
import Accordion from '../../layouts/Accordion';

import './accord.css';

class About extends Component {
	componentWillMount() {
		this.props.fetchFaqs();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newFaq) {
			this.props.faqs.unshift(nextProps.newPost);
		}
	}

	render() {
		const {
			className,
			topOuterDivider,
			bottomOuterDivider,
			topDivider,
			bottomDivider,
			hasBgColor,
			invertColor,
			...props
		} = this.props;

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
		const postItems = this.props.faqs.map((post) => {
			const bull = post.bullets;
			console.log('Bullet points', bull);
			return (
				// <div key={post._id}>
				// 	<h3>{post.title}</h3>
				// 	<p>{post.intro}</p>
				// 	{bull.map((faq) => (
				// 		<li>{faq.bullet}</li>
				// 	))}
				// </div>
				<Accordion title={post.title}>
					<span className='accordion-text'>
						{post.intro}:
						<br />
						<br />
						{bull.map((faq) => (
							<li>{faq.bullet}</li>
						))}
						<br />
						{post.notes}
						<br />
						<br />
					</span>
				</Accordion>
			);
		});
		return (
			<div>
				<section {...props} className={outerClasses}>
					<div className='container-sm'>
						<div className={innerClasses}>
							<h1
								className='mt-0 mb-16 reveal-from-bottom'
								data-reveal-delay='200'>
								How can we <span className='text-color-primary'>help you?</span>
							</h1>
							<br />
							<hr />
							<br />
							<div>{postItems}</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

About.propTypes = {
	fetchFaqs: PropTypes.func.isRequired,
	faqs: PropTypes.array.isRequired,
	newFaq: PropTypes.object,
};

const mapStateToProps = (state) => ({
	faqs: state.faqs.items,
	newFaq: state.faqs.item,
});

export default connect(mapStateToProps, { fetchFaqs })(About);

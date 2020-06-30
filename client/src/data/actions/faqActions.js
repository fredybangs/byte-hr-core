import { FAQ_SERVER } from '../Config';

export const fetchFaqs = () => (dispatch) => {
	fetch(`${FAQ_SERVER}`)
		.then((res) => res.json())
		.then((faqs) =>
			dispatch({
				type: 'FETCH_FAQS',
				payload: faqs,
			}),
		);
};

export const createFaq = (faqData) => (dispatch) => {
	fetch(`${FAQ_SERVER}`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(faqData),
	})
		.then((res) => res.json())
		.then((faq) =>
			dispatch({
				type: 'NEW_FAQ',
				payload: faq,
			}),
		);
};

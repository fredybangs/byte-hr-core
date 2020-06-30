const initialState = {
	items: [],
	item: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'FETCH_FAQS':
			return {
				...state,
				items: action.payload,
			};
		case 'NEW_FAQ':
			return {
				...state,
				item: action.payload,
			};
		case 'FILTER_FAQ':
			return {
				faq: action.payload,
			};
		default:
			return state;
	}
}

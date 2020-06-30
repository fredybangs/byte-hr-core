const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	intro: {
		type: String,
	},
	bullets: [{ bullet: '' }, { bullet: '' }],
	notes: {
		type: String,
	},

	// var parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] })
});

module.exports = mongoose.model('Faq', faqSchema);

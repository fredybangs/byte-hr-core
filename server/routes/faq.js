const express = require('express');
const router = express.Router();
const Faq = require('../models/faq');

// GET ALL FAQ
router.get('/', async (req, res) => {
	try {
		const faqs = await Faq.find();
		res.json(faqs);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//GET A FAQ BY ID
router.get('/:id', getFaq, (req, res) => {
	res.send(res.faq);
});

// ADD FAQ
router.post('/', async (req, res) => {
	const faq = new Faq({
		intro: req.body.intro,
		title: req.body.title,
		notes: req.body.notes,
		bullets: req.body.bullets,
	});

	try {
		const newFaq = await faq.save();
		res.status(201).json(newFaq);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

//DELETE FAQ
router.delete('/:id', getFaq, async (req, res) => {
	try {
		await res.faq.remove();
		res.json({ message: 'FAQ Deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// UPDATE FAQ
router.patch('/:id', getFaq, async (req, res) => {
	if (req.body.title != null) {
		res.faq.title = req.body.title;
	}
	if (req.body.intro != null) {
		res.faq.intro = req.body.intro;
	}
	if (req.body.notes != null) {
		res.faq.notes = req.body.notes;
	}
	if (req.body.bullets != null) {
		res.faq.bullets = req.body.bullets;
	}

	try {
		const updFaq = await res.faq.save();
		res.json(updFaq);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

async function getFaq(req, res, next) {
	let faq;
	try {
		faq = await Faq.findById(req.params.id);
		if (faq == null) {
			return res.status(404).json({ message: 'Cannot find faq' });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	res.faq = faq;
	next();
}

module.exports = router;

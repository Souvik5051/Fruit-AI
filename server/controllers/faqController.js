const Faq = require('../models/faqModel');

// Get all FAQs
const getFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.status(200).json(
            {
                success:true,
                data:faqs,
                message:"Entry created successfully"
            }
        )
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single FAQ by ID
const getFaqById = async (req, res) => {
    try {
        const faq = await Faq.findById(req.params.id);
        if (!faq) return res.status(404).json({ message: 'FAQ not found' });
        res.status(200).json(
            {
                success:true,
                data:faq,
                message:"Entry created successfully"
            }
        )
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new FAQ
const createFaq = async (req, res) => {
    const { fruit, question, answer } = req.body;
    
    if (!fruit || !question || !answer) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    const newFaq = new Faq({ fruit, question, answer });

    try {
        const savedFaq = await newFaq.save();
        res.status(200).json(
            {
                success:true,
                data:savedFaq,
                message:"Entry created successfully"
            }
        )
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a FAQ by ID
const updateFaq = async (req, res) => {
    const { fruit, question, answer } = req.body;

    try {
        const updatedFaq = await Faq.findByIdAndUpdate(
            req.params.id,
            { fruit, question, answer },
            { new: true }
        );

        if (!updatedFaq) return res.status(404).json({ message: 'FAQ not found' });
        res.status(200).json(
            {
                success:true,
                data:updatedFaq,
                message:"Entry created successfully"
            }
        )
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a FAQ by ID
const deleteFaq = async (req, res) => {
    try {
        const deletedFaq = await Faq.findByIdAndDelete(req.params.id);
        if (!deletedFaq) return res.status(404).json({ message: 'FAQ not found' });
        res.json({ message: 'FAQ deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getFaqs,
    getFaqById,
    createFaq,
    updateFaq,
    deleteFaq
};

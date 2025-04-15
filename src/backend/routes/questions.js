const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/trac_nghiem', async (req, res) => {
    try {
        const questions = await Question.find({ type: 'trac_nghiem' });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/dien_vao_cho_trong', async (req, res) => {
    try {
        const questions = await Question.find({ type: 'dien_vao_cho_trong' });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/dung_sai', async (req, res) => {
    try {
        const questions = await Question.find({ type: 'dung_sai' });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/phan_loai', async (req, res) => {
    try {
        const questions = await Question.find({ type: 'phan_loai' });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/phan_tang', async (req, res) => {
    try {
        const questions = await Question.find({ type: 'phan_tang' });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
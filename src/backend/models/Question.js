const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    type: String, // Loại câu hỏi: "trac_nghiem", "dien_vao_cho_trong", "dung_sai", "phan_loai", "phan_tang"
    question: String,
    options: [String], // Dành cho trắc nghiệm: ["A", "B", "C", "D"]
    answer: String,
    option_a: String, // Dành cho trắc nghiệm
    option_b: String,
    option_c: String,
    option_d: String,
    number_ans: Number, // Dành cho phân tầng
    row_1: String, // Dành cho phân tầng
    row_2: String,
    row_3: String,
    row_4: String,
    row_5: String,
    row_6: String,
    row_7: String,
    row_8: String,
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
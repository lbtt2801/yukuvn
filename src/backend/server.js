const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const questionRoutes = require('./routes/questions');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Kết nối MongoDB Atlas thành công'))
    .catch((err) => console.error('Lỗi kết nối MongoDB Atlas:', err));

app.use('/api/questions', questionRoutes);

app.get('/', (req, res) => {
    res.send('Backend API đang chạy!');
});

app.listen(port, () => {
    console.log(`Server chạy trên port ${port}`);
});
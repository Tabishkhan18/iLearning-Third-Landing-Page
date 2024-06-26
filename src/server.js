const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
    const { email, experience, phone } = req.body;
    // Implement security measures like input validation and sanitization here
    // Save the data to your database
    res.send({ message: 'Form submitted successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

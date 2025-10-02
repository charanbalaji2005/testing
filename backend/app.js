 
const express = require('express');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolio');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', portfolioRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

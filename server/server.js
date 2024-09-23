const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENWEATHER_API_KEY;

// Route to fetch weather data
app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

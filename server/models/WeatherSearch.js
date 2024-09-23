const mongoose = require('mongoose');
const WeatherSearchSchema = new mongoose.Schema({
  city: String,
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('WeatherSearch', WeatherSearchSchema);

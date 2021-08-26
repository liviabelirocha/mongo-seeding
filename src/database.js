const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/seeding?retryWrites=false", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Whoever has heroku setup will need to have this evviroment variable.  Value is retreived from Atlas.  Would have to create a database in order to create a connection string.  
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pets", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

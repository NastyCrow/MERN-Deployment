require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");

// const userRoutesFunction = require("./server/routes/user.routes");
const pirateRoutesFunction = require("./server/routes/pirate.routes");
// userRoutesFunction(app);
pirateRoutesFunction(app);

const server = app.listen(8080, () =>
  console.log("Our application is running on port 8000")
);

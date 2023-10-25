const express = require("express");
const cors = require("cors");
const app = express();
const expressRoute = require("./routes/index");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/", expressRoute);


const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

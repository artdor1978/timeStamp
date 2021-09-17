const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server started on port: " + port);
});

console.log("Hello World");
app.use(function (req, res, next) {
	console.log('req.method + " " + req.path + " - " + req.ip');
	next();
});
// app.get("/", function (req, res) {
// 	res.send("Hello Express");
// });

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});
app.use(express.static(__dirname + "/public"));
app.get("/json", function (req, res) {
	res.json({
		message: "Hello json",
	});
});

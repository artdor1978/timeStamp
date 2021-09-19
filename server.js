const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Server started on port: " + port);
});

console.log("Hello World");
app.use(function(req, res, next) {
	console.log(req.method + " " + req.path + " - " + req.ip);
	next();
});
// app.get("/", function (req, res) {
// 	res.send("Hello Express");
// });

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/views/index.html");
});
app.use(express.static(__dirname + "/public"));
app.get("/json", function(req, res) {
	res.json({
		message: "Hello json",
	});
});
app.get("/now", function(req, res, next) {
	req.time = new Date().toString();
	next();
}, function(req, res) {
	res.json({
		time: req.time
	});
});
app.get("/:word/echo", function(req, res) {
	res.json({
		echo: req.params.word
	});
});
app.get("/name", function(req, res) {
	let first = req.query.first;
	let last = req.query.last;
	res.json({
		name: `${first} ${last}`
	});
});
//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
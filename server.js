const express = require("express");
//const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server started on port: " + port);
});
// console.log("Hello World");
// app.use(function (req, res, next) {
// 	console.log(req.method + " " + req.path + " - " + req.ip);
// 	next();
// });
// app.use(bodyParser.urlencoded({ extended: false }));
// app.get("/", function (req, res) {
// 	res.send("Hello Express");
// });

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});
app.use(express.static(__dirname + "/public"));
// app.get("/json", function (req, res) {
// 	res.json({
// 		message: "Hello json",
// 	});
// });
// app.get(
// 	"/now",
// 	function (req, res, next) {
// 		req.time = new Date().toString();
// 		next();
// 	},
// 	function (req, res) {
// 		res.json({
// 			time: req.time,
// 		});
// 	}
// );
// app.get("/:word/echo", function (req, res) {
// 	res.json({
// 		echo: req.params.word,
// 	});
// });
// app.get("/name", function (req, res) {
// 	let first = req.query.first;
// 	let last = req.query.last;
// 	res.json({
// 		name: `${first} ${last}`,
// 	});
// });
app.get("/api/timestamp/:date", function (req, res) {
	let reqDate = new Date(req.params.date/1000).toUTCString();
	res.json({
		unix: req.params.date,
		utc: reqDate,
	});
});
//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
//https://replit.com/@jatinpatel136/boilerplate-project-timestamp
//https://www.unixtimestamp.com/
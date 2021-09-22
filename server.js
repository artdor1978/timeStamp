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
	let inputDate = new Date(req.params.date);
	
	if (inputDate.toString() == "Invalid Date") {
		inputDate = new Date(parseInt(req.params.date));
	}

	let unix = inputDate.getTime();
	let utc = inputDate.toUTCString();
	res.json({
		unix,
		utc,
	});
});
//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
//https://replit.com/@jatinpatel136/boilerplate-project-timestamp
//https://www.unixtimestamp.com/
//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


//new Date("April 13, 2017").getTime()-new Date("April 13, 2017").getTimezoneOffset()*60000
//new Date(new Date().setHours(new Date().getHours()-new Date().getTimezoneOffset()/60))



//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   !!!


//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
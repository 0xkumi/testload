const Async = require("async")
const request = require("request")
const url = process.argv["2"]

let a = []
for (let i = 0; i < 10000; i++) {
	a.push(i)
}

Async.mapLimit(a, 100, (i, cb) => {
	var random = Math.floor(Math.random()*100000)
	request.get({ url , headers: {"Range": `"${random}-${random+1}"`}})
		.on("error", function (err) {
			if (err) console.log(err)

		})
		.on('response', function (response) {
			if (response.statusCode == 403) {
				console.log(i)
				process.exit(-1)
			}
			cb()
		})
}, function (err, result) {
})
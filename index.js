const Async = require("async")
const request = require("request")
const url = process.args["2"]

let a= []
for (let i=0; i<10000;i++){
	a.push(i)
}

Async.mapLimit(a,40,(i,cb)=>{
	console.log(i)
	request.get(url)
	.on("error", function(err){
		if (err) console.log(err)
        process.exit(-1)
	})
	.on('response', function(response) {
    		console.log(response.statusCode) // 200
		cb()
	})
},function(err,result){
})
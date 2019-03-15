const Async = require("async")
const request = require("request")
const url = process.argv["2"]

let a= []
for (let i=0; i<10000;i++){
	a.push(i)
}

Async.mapLimit(a,40,(i,cb)=>{
	request.get({url, followAllRedirects: false,followRedirect: false})
	.on("error", function(err){
		if (err) console.log(err)
        
	})
	.on('response', function(response) {
			if (response.statusCode == 403) {
				console.log(i)
				process.exit(-1)
			}
		cb()
	})
},function(err,result){
})
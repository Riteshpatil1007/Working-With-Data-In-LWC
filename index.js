var http = require('http')
const server = http.createServer(function(req, res){
    res.write("Hello Salesforce Developers...!!!")
    res.end()
})
server.listen(8080,function(){
    console.log("listening on port 8080");
})
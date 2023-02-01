const http = require("http");

const server = http.createServer((req, res)=>{
// res.write("tareq adel abu hashish")
// res.end()

if(req.url == "/"){
    res.end("you are in the home page")
}
else if( req.url == "/about"){
    res.end("you are in the about page. ")
}
else{
    res.end(`
    <h1> Oopps!!</h1>
    <p> We can't seem to find the page looking for</p>
    <a href="/"> back home </a>
    `)
}
})

server.listen(5000)
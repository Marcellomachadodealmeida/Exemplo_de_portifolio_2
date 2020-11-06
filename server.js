const express = require('express')
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views",{
  express: server
})

server.get("/",function (req,res){
  return res.render("portifolio")
})

server.get("/sobre",function(req,res){
  return res.render("sobre")
})
server.get("/aulas", function(req,res){
  return res.render("aulas",{ items: videos})
})

server.listen(5000, function(){
  console.log('server is runing')
})
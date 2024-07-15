/*
const amount =12 

if(amount<10)
    console.log('small number')
console.log('large number')

console.log(`My node app.`)

//os module
const os = require('os')
//info about current user
const user =os.userInfo()
console.log(user);

//system uptime
console.log(`${os.uptime} System uptime`)

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem

}

//path 
const path = require('path')
console.log(`${path.sep} my path separator`)

const filePath= path.join('/content','/subfolder','test.txt')

const base = path.basename(filePath)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(`filepath:${filePath}, basename:'${base} , absolute:'${absolute}''`)

 const {readFile ,writeFile }= require('fs')
 
 readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log('There was an error',err)
        return;
    }
    console.log('Hey async readfile',result);
 })
 
 
 //http 
 const http =require('http')
 const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Welcome to our Home Page')
        res.end();
    }
    if(req.url==='/about-us'){
        res.end('Here is our short history')
    }
    else{
        res.end(`<h1>Oops! Page Not Found</h1>
        <a style="color:green;" href="/">Back Home</a>`)}
    

 })

 server.listen(5000)
 */

 const _=require('lodash')
 const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
const path = require('path')
console.log(__dirname)
let myPath = path.resolve(__dirname,'/img/so') 
let myPath2 = path.resolve(__dirname,'./img/so') 
let myPath3=path.resolve('/foo/bar', './baz')
let myPath4=path.resolve('/foo/bar', '/tmp/file/')
console.log('myPath=> '+myPath)
console.log('myPath2=> '+myPath2)
console.log('myPath3=> '+myPath3)
console.log('myPath4=> '+myPath4)


let myPath5 = path.join(__dirname,'/img/so');  
let myPath6 = path.join(__dirname,'./img/so');  
let myPath7=path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');  
console.log('myPath5=> '+myPath)
console.log('myPath6=> '+myPath2)
console.log('myPath7=> '+myPath3)

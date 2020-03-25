// ES Moudule 模块引入方式
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';
// CommonJs
var Header = require('./header.js');
var Sidebar = require('./sidebar');
var Content = require('./content.js')
// var cool = require('./cool.jpg')
import cool from './cool.jpg';
console.log(cool)


var img = new Image();
img.src = cool;

var root = document.getElementById('root');
root.append(img);


new Header();
new Sidebar();
new Content();
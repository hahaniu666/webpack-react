// ES Moudule 模块引入方式
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';
// CommonJs
var Header = require('./header.js');
var Sidebar = require('./sidebar');
var Content = require('./content.js')

new Header();
new Sidebar();
new Content();
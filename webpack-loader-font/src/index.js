// ES Moudule 模块引入方式
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';
// CommonJs
var Header = require('./header.js');
var Sidebar = require('./sidebar');
var Content = require('./content.js')
import './index.css';
import './style.scss';
import './font.scss';
import './icon.scss';
// import '../font/demo.css';
// import './font3/iconfont.css';
// var cool = require('./cool.jpg')
import cool from './cool.jpg';
console.log(cool)


var img = new Image();
img.src = cool;
img.classList.add('img');

var root = document.getElementById('root');
root.append(img);

// root.innerHTML = '<div class="iconfont icon-changjingguanli"></div>';

var frameDiv = document.createElement("div");//创建一个标签
var frameDiv2 = document.createElement("div");//创建一个标签
var frameDiv3 = document.createElement("div");//创建一个标签
frameDiv.className='iconfont icon-changjingguanli';
frameDiv2.className='iconfont icon-anjianchuanbing';
frameDiv3.className='iconfont icon-anjianliebiao';
root.appendChild(frameDiv);//把创建的节点frameDiv 添加到父类body 中；
root.appendChild(frameDiv2);
root.appendChild(frameDiv3);
new Header();
new Sidebar();
new Content();
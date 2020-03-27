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
import './iconfont.scss';
// import '../font/demo.css';
// import '../font/iconfont';
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
var frameDiv1 = document.createElement("div");//创建一个标签
frameDiv.className = 'iconfont icon-changjingguanli';
frameDiv1.className = 'iconfont icontiaozhuanchaxun';
root.appendChild(frameDiv);//把创建的节点frameDiv 添加到父类body 中；
root.appendChild(frameDiv1);

var btn = document.createElement('div');
btn.innerHTML = '新增';
root.appendChild(btn);

btn.onclick = function () {
    console.log('click')
    var p = document.createElement('p');
    console.log(p)
    p.innerHTML = 'item';
    p.className = 'item';
    root.appendChild(p);
}

new Header();
new Sidebar();
new Content();

if(module.hot){
    module.hot.accept('./index.js', () => {
    })
}
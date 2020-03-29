// import _ from 'lodash';// 1mb

// 业务逻辑1mb
console.log(_.join(['a', 'b', 'c'], '.'));
// 省略10w行代码
console.log(_.join(['a', 'b', 'c'], '.'));

// 第一种方式
// 生成的main.js 1mb,会导致打包文件过大，加载时间过长
// 如果修改了业务逻辑，重新打包，又会生成main.js  1mb
// 重新访问页面的时候，又需要重新加载2mb的内容，导致时间比较长

// 第二种方式
//  mainjs被拆成两个文件，lodash.js(1mb)  main.js(1mb)，浏览器可以并行加载文件
// 如果改了业务代码，lodash，不需要加载，只需要加载main.js(1mb)即可
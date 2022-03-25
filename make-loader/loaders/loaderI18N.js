var args = require('yargs').argv;
var path = require('path');

const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this); // 自动分析this.query
    console.log(this.query) // 可以通过this.query获取到config中传过来的参数
    const callback = this.async(); // 异步loader，实际调用this.callback
    console.log('args', args)
    console.log('args.env', args.env,args.env && args.env.prod)
    setTimeout(() => {
        let replace = 'english';

        if (args.env) {
            replace = source.replace('{{title}}', 'english')
        } else {
            replace = source.replace('{{title}}', '中文')
        }
        console.log(replace)
        callback(null, replace)
    }, 1000)
}


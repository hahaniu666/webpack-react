const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const options = loaderUtils.getOptions(this); // 自动分析this.query
    console.log(this.query) // 可以通过this.query获取到config中传过来的参数
    const callback = this.async(); // 异步loader，实际调用this.callback

    setTimeout(() => {
        const replace = source.replace('hello', options.name);
        callback(null, replace)
    }, 1000)

    // this.callback(null, replace)
    // return replace;
}


// this.callback(
//     err: Error | null,
//     content: string | Buffer,
//     sourceMap?: SourceMap,
//     meta?: any
//   );
class CopyrightWebpackPlugin {
    constructor(options) {
        console.log('插件被使用了:', options.name)
    }
    // compiler，webpack实例，打包所相关的所有的内容，运行这个类会执行apply
    // https://webpack.js.org/api/compiler-hooks/#root
    apply(compiler) {

        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log('compiler');
        })

        // AsyncSeriesHook 异步钩子，compilation存放本次打包相关内容
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            debugger; // npm run debug 运行node调试工具进行插件调试
            console.log('运行异步钩子', compilation.assets)
            compilation.assets['copyright.txt'] = {
                source: function () {
                    return 'copyright by mu feng'
                },
                size: function () {
                    return 21;
                }
            };
            cb();
        })
    }

}

module.exports = CopyrightWebpackPlugin;
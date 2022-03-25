module.exports = function(source){
    console.log(this.query) // 可以通过this.query获取到config中传过来的参数
    const replace = source.replace('hello', this.query.name);
    return replace;
}
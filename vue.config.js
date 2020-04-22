const path = require('path');
module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    //webpack基本配置
    chainWebpack: config => {
        config.module.rule('js').include.add(path.resolve(__dirname, 'packages')).end().use('babel').loader('babel-loader').tap(options => {
            return options;
        });
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}
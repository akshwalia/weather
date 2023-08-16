const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    }, 

    devtool: 'inline-source-map',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    }, 

    module: {
        rules: [
            {
                test:/\.(png|jpg|svg)$/i,
                type: 'asset/resource',
            }
        ],
    }
}
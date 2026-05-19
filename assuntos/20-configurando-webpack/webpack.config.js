
const path = require('path')



module.exports = {
    entry:{
        main: './src/index.js', //identificando entrada
        hellow: './src/hellow.js'
    },
        mode:'production',
        output:{
            path: path.resolve(__dirname, 'public'),
            filename: '[name].bundle.min.js'
        }
}

const path = require('path')



module.exports = {
    entry:{
        index: './src/index.js', //identificando entrada
        
    },
        mode:'development',
        module:{
            rules:[{
                test: /\.css$/, // tipo de arquivo que vamos usar os lodars
                use: ['style-loader', 'css-loader']
            }]
        }
      
}
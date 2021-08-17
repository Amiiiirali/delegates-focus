const path = require('path');

module.exports = {
    entry: './public/registerElements.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
};
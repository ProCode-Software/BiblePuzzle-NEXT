const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: ['./src/js/firebase.js', './src/js/main.js'],
        account: './src/js/account.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    watch: true
};
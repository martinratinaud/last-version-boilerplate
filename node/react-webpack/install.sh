# install react
npm install react react-dom --save

# install webpack
npm install --save-dev webpack-dev-server

# install babel
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

# install eslint
npm install --save-dev eslint eslint-config-airbnb eslint-plugin-react

echo ================================================================
echo add this to your npm scripts
echo "dev" : "open http://localhost:8080/index.html && NODE_ENV=development webpack-dev-server --devtool eval --progress --colors --hot --inline --content-base build"
echo "build": "NODE_ENV=production webpack --config webpack/config.prod.js"
echo ================================================================

# start script
open http://localhost:8080/index.html && NODE_ENV=development webpack-dev-server --devtool eval --progress --colors --hot --inline --content-base build

# install react
npm install --save react react-dom

# install webpack
npm install --save-dev webpack-dev-server

# install babel
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

# install redux
npm install --save redux react-redux immutable

echo ================================================================
echo add this to your npm scripts
echo open http://localhost:8080 && webpack-dev-server --devtool eval --progress --colors --hot --content-base build
echo ================================================================

# start script
open http://localhost:8080 && webpack-dev-server --devtool eval --progress --colors --hot --content-base build

# install react
npm install react --save

# install webpack
npm install --save-dev webpack-dev-server

# install babel
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react

# start script
open http://localhost:8080 && webpack-dev-server --devtool eval --progress --colors --hot --content-base build

echo ================================================================
echo add this to your npm scripts
echo open http://localhost:8080 && webpack-dev-server --devtool eval --progress --colors --hot --content-base build
echo ================================================================

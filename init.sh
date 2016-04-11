#!/bin/sh
set -e

LANGUAGE=$1
BOILERPLATE=$2

echo "=> create temp directory and checkout code"
mkdir .tmp
cd .tmp
git clone https://github.com/martinratinaud/last-version-boilerplate
cd ..

echo "=> pick up needed boilerplate '$LANGUAGE/$BOILERPLATE'"
cp -R .tmp/last-version-boilerplate/$LANGUAGE/$BOILERPLATE/* .

echo "=> remove unnecessary files"
rm -Rf .tmp

echo "=> launch install of '$LANGUAGE/$BOILERPLATE'"
npm init --force
chmod 775 install.sh
./install.sh

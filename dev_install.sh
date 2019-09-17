#!/bin/bash


# install and link the library
yarn install;
yarn link;

cd demo;
yarn install;
yarn link react-menu-tree;

cd ../; # back to project root
# this is done to prevent duplication of react library
# when running the demo
npm link ./demo/node_modules/react;
npm link ./demo/node_modules/react-dom;

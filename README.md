# react-menu-tree

> React Menu Tree

[![NPM](https://img.shields.io/npm/v/react-menu-tree.svg)](https://www.npmjs.com/package/react-menu-tree) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-menu-tree
```

## Usage

```tsx
import * as React from "react";

import Menu from "react-menu-tree";

const menuOptions = [
  {
    title: "Getting Started",
    url: "getting-started",
    children: [
      {
        title: "Installation",
        url: "getting-started/installation"
      },
      {
        title: "Release Notes",
        url: "getting-started/release-notes"
      }
    ]
  },
  {
    title: "Other Menu Group",
    url: "other-menu-group",
    children: [
      {
        title: "Conflicts Resolution",
        url: "other-menu-group/conflicts-resolution"
      },
      {
        title: "Second Link",
        url: "other-menu-group/second-link"
      }
    ]
  }
];

class Example extends React.Component {
  render() {
    return (
      <Menu
        options={menuOptions}
        selectedOption="getting-started/release-notes"
        highlightClass="highlight"
      />
    );
  }
}
```

## Development Mode

The setup for development is kind of hacky, but the following steps should let you run both the demo app and the tests.

```bash
cd <project-root-folder>;

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
```

The issue we're "hacking" around is described by:

#### 1. The library needs to have `react` and `react-dom` declared as peer deps

In production (when it's installed from npm), the library has `react` and `react-dom` declared as peer deps and should work just fine since it would be installed in a `react` project.

Also, when importing the library in the `demo` app, the library needs to behave just like in prod env, thus it needs to use `react` and `react-dom` from the demo app.

#### 2. For testing the library, however, `react` and `react-dom` needs to be installed.

This can be achieved by declaring the 2 deps as dev dependencies. But when doing so, we'll face the 1st issue from above.

That's why we have to `npm link` those deps.

## License

MIT © [ErhanAbi](https://github.com/ErhanAbi)

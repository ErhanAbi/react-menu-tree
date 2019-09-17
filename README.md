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

## License

MIT © [ErhanAbi](https://github.com/ErhanAbi)

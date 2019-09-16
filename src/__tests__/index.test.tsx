import React from "react";
import renderer from "react-test-renderer";

import { Menu } from "..";
import { MenuItem } from "../menuItem";

const testMenuList: MenuItem[] = [
  {
    title: "Getting started",
    url: "getting-started",
    children: [
      { title: "First", url: "getting-started/first" },
      { title: "Installation", url: "getting-started/installation" },
      { title: "Site preparation", url: "getting-started/site-preparation" },
      {
        title: "Creating your site",
        url: "getting-started/creating-your-site"
      },
      {
        title: "Publishing your site",
        url: "getting-started/publishing-your-site"
      }
    ]
  },
  {
    title: "Guides",
    url: "guides",
    children: [
      {
        title: "Adding a Blog",
        url: "guides/adding-a-blog",
        children: [{ title: "First", url: "guides/adding-a-blog/first" }]
      },
      {
        title: "Custom Pages",
        url: "guides/custom-pages",
        children: [{ title: "First", url: "guides/custom-pages/first" }]
      },
      { title: "Enabling Search", url: "guides/enabling-search" },
      {
        title: "Navigation and Sidebars",
        url: "guides/navigation-and-sidebars"
      },
      {
        title: "Translations & Localization",
        url: "guides/trans-and-nav"
      },
      { title: "Versioning", url: "guides/versioning" }
    ]
  }
];

describe("Menu", () => {
  it("renders menu based on the given list of menu items", () => {
    const wrapper = renderer
      .create(<Menu options={testMenuList} highlightClass="highlight" />)
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it("renders menu based on the given list and highlights the selected menu item", () => {
    const wrapper = renderer
      .create(
        <Menu
          options={testMenuList}
          selectedOption="/guides/versioning"
          highlightClass="highlight"
        />
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

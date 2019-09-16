import React from "react";
import renderer from "react-test-renderer";

import { MenuOptions } from "../menuOptions";
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

describe("MenuOptions", () => {
  it("correctly renders", () => {
    const wrapper = renderer
      .create(
        <MenuOptions
          options={testMenuList}
          searchedValue=""
          selectedOption=""
          highlightClass=""
        />
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

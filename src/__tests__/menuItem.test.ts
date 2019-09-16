import { filterMenuItems, MenuItem } from "../menuItem";

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

// 1. it should return the list if no keyword is given
// 2. it should return the whole sub-tree starting from the top-most parent if there's a child matching
describe("filterMenuItems", () => {
  it("should return the list if no keyword is given", () => {
    const data = [
      { title: "Getting Started", url: "/getting-started", children: [] }
    ];
    expect(filterMenuItems(data, "")).toEqual(data);
  });

  it("should perform a lowercased search in all items and return the top-most parent containing the searched keyword", () => {
    const expected = [
      {
        title: "Getting started",
        url: "getting-started",
        children: [
          { title: "First", url: "getting-started/first" },
          { title: "Installation", url: "getting-started/installation" },
          {
            title: "Site preparation",
            url: "getting-started/site-preparation"
          },
          {
            title: "Creating your site",
            url: "getting-started/creating-your-site"
          },
          {
            title: "Publishing your site",
            url: "getting-started/publishing-your-site"
          }
        ]
      }
    ];

    expect(filterMenuItems(testMenuList, "pUbliShing yoUr sitE")).toEqual(
      expected
    );
  });

  it("should perform a lowercased search in all items and retunr the top-most parents if there are multiple parents meeting the criteria", () => {
    expect(filterMenuItems(testMenuList, "fiRsT")).toEqual(testMenuList);
  });
});

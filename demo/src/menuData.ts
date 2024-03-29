export const dataModel = [
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
      { title: "Adding a Blog", url: "guides/adding-a-blog" },
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
  },
  {
    title: "API",
    url: "api",
    children: [
      { title: "CLI Commands", url: "api/cli-commands" },
      {
        title: "Arguments",
        url: "cli/args",
        children: [
          { title: "port", url: "cli/args/port" },
          { title: "start", url: "cli/args/start" },
          {
            title: "stop",
            url: "cli/args/stop",
            children: [{ title: "First", url: "cli/args/stop/first" }]
          }
        ]
      },
      { title: "Commands", url: "cli/cmds" }
    ]
  }
];

// See https://observablehq.com/framework/config for documentation.
export default {
  title: "The Resume of Eric M. Greeff",
  // Pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],
  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  // '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">',
  root: "src", //The path to the source root.
  theme: "dashboard", // try "light", "dark", "slate", etc.
  header: "<h1>The Resume of Eric M. Greeff</h1>", // what to show in the header (HTML)
  footer: "Built with by [@modster](https://github.com/modster) using [Observablehq](https://observablehq.com/) and hosted by [GitHub Pages](https://pages.github.com/). &copy; 2024 Eric M. Greeff. All rights reserved.", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: false, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  output: "dist", // path to the output root for build
  search: true, // activate search
  linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};

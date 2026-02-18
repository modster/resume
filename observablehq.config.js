// See https://observablehq.com/framework/config for documentation.
export default {
  title: "Eric Greeff",
  // Pages will be listed in alphabetical order. Listing pages explicitly
  pages: [
    {
      name: "Contact Information",
      pages: [
        { name: "226-932-0820", path: "tel:+14032772222" },
        { name: "me@greeffer.com", path: "mailto:me@greeffer.com" },
      ],
    },
    {
      name: "Social Media and Links",
      pages: [
        { name: "Resume", path: "https://greeffer.com/resume" },
        { name: "LinkedIn.com", path: "https://www.linkedin.com/in/goodgreeff/" },
        { name: "Facebook.com", path: "https://www.facebook.com/mike.greeff" },
        { name: "X.com", path: "https://x.com/goodgreeff" },
        { name: "GitHub.com", path: "https://github.com/modster/resume" },
        { name: "Greeffer.com", path: "https://greeffer.com" },
      ]
    }
  ],
  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  // '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">',
  root: "src", //The path to the source root.
  theme: "dashboard", // try "light", "dark", "slate", etc.
  header: `<h1>Eric Greeff</h1>`, // what to show in the header (HTML)"
  footer: "Built using <a href=\"https://observablehq.com/\">Observablehq</a> &copy; 2026 Eric M. Greeff.", // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  output: "dist", // path to the output root for build
  search: false, // activate search
  linkify: true, // convert URLs in Markdown to links
  typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};

module.exports = {
  title: "maozongmin",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      // { text: "Projects", link: "/projects/" },
      // { text: "Guide", link: "/guide/" },
      { text: "导航", link: "/word/" },
      { text: "GitHub", link: "https://github.com/maozongmin/word" }
    ],
    displayAllHeaders: true,
    sidebarDepth: 1,
    sidebar: {
        '/word/':  [
            {
                title: '导航',
                collapsable: false,
                children: [
                    '',
                    'css',
                    'javascript',
                    'node',
                    'vue',
                    'git',
                    'jenkins',
                    'linux',
                    'markdown',
                    'nginx常用',
                    'other',
                ]
            }
        ],

    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

// function genSidebarConfig (title) {
//   return [
//     {
//       title,
//       collapsable: false,
//       children: [
//         '',
//         'getting-started',
//         'customize',
//         'advanced',
//       ]
//     }
//   ]
// }


module.exports = {
  title: "maozongmin",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Guide", link: "/guide/" },
      { text: "word", link: "/word/" },
      { text: "GitHub", link: "https://github.com/maozongmin/word" }
    ],
    sidebar: {
      '/guide/': [
            {
                title: 'guide',
                collapsable: false,
                children: [
                '',
                'getting-started',
                'customize',
                'advanced',
                ]
            }
        ],
      '/word/':  [
            {
                title: 'km',
                collapsable: false,
                children: [
                    '',
                    'css',
                    'git',
                    'jenkins',
                    'linux',
                    'markdown',
                    'nginx配置https',
                    'nginx常用',
                ]
            }
        ]
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


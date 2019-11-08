module.exports = {
  title: "maozongmin",
  description: "WEB前端开发,前端开发博客专注于前端开发,分享前端开发资源和前端开发技术资讯等,maozongmin",
  keywords: '前端开发,前端博客,前端技术,maozongmin',
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
                    'html',
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


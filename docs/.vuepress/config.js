// const path = require("path");
// let docs = path.join(__dirname, "../");
// const filehelper = require('./getFilenames.js');
// console.log(filehelper.genSidebar('word', filehelper.getFileName(docs+'/word/'), false))
module.exports = {
    title: "maozongmin",
    description:
        "WEB前端开发,前端开发博客专注于前端开发,分享前端开发资源和前端开发技术资讯等,maozongmin",
    keywords: "前端开发,前端博客,前端技术,maozongmin",
    head: [["link", { rel: "icon", href: `/logo.jpg` }]],
    base: "/",
    dest: "./dist",
    extend: "@vuepress/theme-default",
    themeConfig: {
        displayAllHeaders: true,
        smoothScroll: true,
        nav: [
            { text: "Home", link: "/" },
            { text: "导航", link: "/word/" },
            { text: "GitHub", link: "https://github.com/maozongmin/word" }
        ],
        sidebarDepth: 1,
        sidebar: {
            "/word/": [
                {
                    title: "导航",
                    collapsable: false,
                    children: [
                        "",
                        "html",
                        "css",
                        "javascript",
                        "node",
                        "vue",
                        "git",
                        "jenkins",
                        "linux",
                        "markdown",
                        "nginx",
                        "docker",
                        "other"
                    ]
                }
            ]
        },
        lastUpdated: "Last Updated"
    },

    markdown: {
        // options for markdown-it-anchor
        lineNumbers: true,
        anchor: { permalink: true },
        config: md => {
            md.use(require("markdown-it-katex"));
        }
    },
    plugins: [
        "@vuepress/back-to-top",
        '@vuepress/pwa'
    ]
};

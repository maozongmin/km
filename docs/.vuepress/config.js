// const path = require("path");
// let docs = path.join(__dirname, "../");
// const filehelper = require('./getFilenames.js');
// console.log(filehelper.genSidebar('word', filehelper.getFileName(docs+'/word/'), false))
module.exports = {
    title: 'maozongmin',
    serviceWorker: true,
    description:
        'WEB前端开发,前端开发博客专注于前端开发,分享前端开发资源和前端开发技术资讯等,maozongmin',
    keywords: '前端开发,前端博客,前端技术,maozongmin',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    base: '/',
    dest: './dist',
    extend: '@vuepress/theme-default',
    themeConfig: {
        displayAllHeaders: true,
        smoothScroll: true,
        nav: [{ text: 'Home', link: '/' }, { text: '导航', link: '/word/' }],
        sidebarDepth: 1,
        sidebar: {
            '/word/': [
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
                        'nginx',
                        'docker',
                        'other',
                        'question'
                    ]
                }
            ]
        },
        lastUpdated: '上次更新',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'maozongmin/km',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'maozongmin/km',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页'
    },

    markdown: {
        // options for markdown-it-anchor
        lineNumbers: true,
        anchor: { permalink: true },
        config: md => {
            md.use(require('markdown-it-katex'));
        }
    },
    plugins: [
        ['@vuepress/back-to-top'],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'H26iKkbCxGmDVflRNd8NFt1B-gzGzoHsz',
                    appKey: 'U4Arzom9kOqJRMNhhu12r49K',
                    notify: false,
                    verify: false,
                    avatar: 'mp',
                    placeholder: 'oh my god'
                }
            }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: true,
                updatePopup: {
                    message: 'New content is available.',
                    buttonText: 'Refresh'
                }
            }
        ]
    ]
};

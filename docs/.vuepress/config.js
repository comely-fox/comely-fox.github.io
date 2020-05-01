const path = require('path')
module.exports = {
  dest:'dist',
  base:'/dist',
  title: 'comely-fox',
  description: '记录日常趣事， 代码。',
  themeConfig: {
    // logo: '/assets/img/logo.png',

    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Demo',
        ariaLabel: 'Demo Menu',
        items: [
          { text: 'All', link: '/demo/' },
          { text: '九宫格', link: '/demo/gridview/' },
          { text: '简单html解析器', link: '/demo/html-parse/' },
          { text: '找大文件', link: '/demo/find-big-file/' }
        ]
      },
      {
        text: 'Pages',
        link: '/pages/'
      },
      { text: 'About', link: '/about.md' }
    ],
    displayAllHeaders: true, // 默认值：false
    // 侧边栏
    sidebar: 'auto',
    sidebarDepth: 5,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated', // string | boolean
    smoothScroll: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@nm': path.resolve(__dirname, '../../', 'node_modules')
      }
    }
  }
}

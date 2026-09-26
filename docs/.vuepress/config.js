module.exports = {
    lang: 'zh-CN',
    title: 'ChatGPT中文学习网 - Plus、Pro 5x、Pro 20x充值代充',
    description: '提供 ChatGPT Plus、Pro 5x、Pro 20x 充值代充咨询与订阅教程，帮你了解套餐选择、开通续费流程和支付问题。使用自己的账号，办理前确认条件；Pro 20x 仅咨询现有订阅续费及符合条件的恢复。',
    theme: 'vuepress-theme-vdoing',
    head: [['link', {
        rel: 'icon',
        href: '/ai.png'
    }], ["script", {},
        `
	var _hmt = _hmt || []; (function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?59033874dd991ce9246775fed052092a";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();`],
        /*['script', {}, `
          document.addEventListener('DOMContentLoaded', function () {
            document.body.oncopy = function () { return false; };
            document.body.oncut = function () { return false; };
            document.body.oncontextmenu = function () { return false; };
          });
        `],*/
        ['meta', {
            name: 'keywords',
            content: 'ChatGPT充值,ChatGPT代充,ChatGPT Plus充值,ChatGPT Plus代充,ChatGPT Pro5x充值,ChatGPT Pro5x代充,ChatGPT Pro20x充值,ChatGPT Pro20x代充,ChatGPT Pro续费,AI订阅教程,Codex使用教程'
        }],
        ['meta', {name: 'author', content: 'ChatGPT中文学习网'}],
        ['meta', {name: 'robots', content: 'index,follow'}],
        ['meta', {name: 'theme-color', content: '#2563eb'}],
        ['meta', {name: 'format-detection', content: 'telephone=no'}],
        ['meta', {property: 'og:site_name', content: 'ChatGPT中文学习网'}],
        ['meta', {property: 'og:image', content: 'https://aliyuntm.com/ai.png'}],
        ['meta', {name: 'twitter:card', content: 'summary'}],
        ['meta', {name: 'baidu-site-verification', content: 'codeva-ENK9MppSOV'}],
        ['meta', {name: '360-site-verification', content: 'a4f429e25468adf623a89dac02b9bc31'}],
        ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ],
    plugins: [['sitemap', {
        hostname: "https://aliyuntm.com",
        changefreq: 'daily',
        // 排除无实际内容的页面
        exclude: ["/404.html"]
    }],
        [require('./plugins/seo-enhance'), {
            hostname: 'https://aliyuntm.com',
            defaultImage: 'https://aliyuntm.com/ai.png',
            siteName: 'ChatGPT中文学习网',
            lang: 'zh-CN'
        }],
        ['@vuepress/back-to-top', true], ['vuepress-plugin-baidu-autopush', {}], ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/medium-zoom', {
            selector: 'img',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],

        [
            'copyright',
            {
                noCopy: true, // 选中的文字将无法被复制
                minLength: 11, // 如果长度超过 31 个字符
            },
        ]
    ],
    themeConfig: {
        logo: "/ai.png",
        siteTitle: false,
        lastUpdated: '上次更新',
        // string | boolean
        //sidebar: 'structuring',
        displayAllHeaders: true,
        // 默认值：false
        sidebarDepth: 2,
        pageStyle: 'line',
        // 站点配置（首页 & 文章页）

        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '充值代充',
                link: 'https://chongzhi.aliyuncn.com/'
            },
            {
                text: '充值教程',
                items: [
                    {text: 'Plus 充值代充', link: '/chatgptcn/proxy/recharge/'},
                    {text: 'Pro 5x 充值代充', link: '/tags/?tag=' + encodeURIComponent('ChatGPT Pro 5x代充')},
                    {text: 'Pro 20x 续费与恢复', link: '/chatgptcn/pro-20x-recharge-pause-plus-pro-5x/'},
                    {text: '充值方式对比', link: '/chatgptcn/plus/activate/'},
                    {text: '支付失败排查', link: '/chatgptcn/top-up/'}
                ]
            },
            {
                text: 'ChatGPT镜像站',
                link: '/chatgptcn/chatshare/'
            },
            {
                text: '索引',
                link: '/archives/',
                items: [{
                    text: '分类',
                    link: '/categories/'
                },
                    {
                        text: '标签',
                        link: '/tags/'
                    },
                    {
                        text: '归档',
                        link: '/archives/'
                    },
                ]
            }
        ],

        blogger: {
            avatar: '/girl.WebP',
            name: '小小纽扣',
            slogan: '梦想总在凌云志，意气风发',
        },
        footer: {
            createYear: 2024,
            // 博客创建年份
            copyrightInfo: '<a href="https://aliyuntm.com">ChatGPT中文学习网</a> · Plus / Pro 5x / Pro 20x 充值代充与订阅指南<br>办理条件以账号状态与当前服务说明为准。本服务与 OpenAI 无直接关联。',
            // 博客版权信息、备案信息等，支持a标签或换行标签</br>
        },
    }
}

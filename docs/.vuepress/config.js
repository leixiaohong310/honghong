module.exports = {
	lang: 'zh-CN',
	title: 'ChatGPT中文学习网站',
	description: '专注海外业务支付的指南平台,为个人与企业提供WildCard虚拟卡开通服务、海外支付工具推荐及实操教程,精选支持ChatGPT、Cursor、Poe等平台虚拟卡订阅指南，以及ChatGPT官网充值、镜像站服务！',
	theme: 'vuepress-theme-vdoing',
	head: [['link', {
		rel: 'icon',
		href: '/gpt-4.png'
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
	['meta', {name: 'keywords',content: 'ChatGPT官网充值,ChatGPT镜像站,ChatGPT Plus 一键升级,ChatGPT升级,wildCard怎么样,wildCard靠谱吗,wildCard安全吗,wildCard虚拟卡,wildCard信用卡,Claude订阅教程,OnlyFans订阅教程,Cursor订阅教程,Google play订阅教程,Wildcard虚拟卡升级教程,野卡升级教程,野卡是什么'}],
	['meta', {name:'baidu-site-verification',content:'codeva-ENK9MppSOV'}],
	['meta', {name:'360-site-verification',content:'a4f429e25468adf623a89dac02b9bc31'}],
	['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
	],
	plugins: [['sitemap', {
		hostname: "https://aliyuntm.com",
		// 排除无实际内容的页面
		exclude: ["/404.html"]
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
		logo: "/gpt-4.png",
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
			text: 'ChatGPT镜像站',
			link: '/chatgpt/chatshare/'
		},
		{
			text: 'ChatGPT升级',
			link: '/chatgpt/'
		},
		{
            text: 'WildCard虚拟卡',
			link: '/wildcard/'
        },
		{
			text: 'ChatGPT PLus 充值',
			link: '/openai/payment/'
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
        			copyrightInfo: 'H| <a href="https://aliyuntm.com" target="_blank">ChatGPT中文学习网</a>',
        			// 博客版权信息、备案信息等，支持a标签或换行标签</br>
        },
	}
}
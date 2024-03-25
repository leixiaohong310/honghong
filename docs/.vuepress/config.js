const {
	readFileList,
	readTotalFileWords,
	readEachFileWords
} = require('./webSiteInfo/readFile');

module.exports = {
	lang: 'zh-CN',
	title: 'ChatGPT中文教程',
	description: 'ChatGPT中文教程',
	theme: 'vuepress-theme-vdoing',
	head: [['link', {
		rel: 'icon',
		href: '/logo.png'
	}], ["script", {},
	`
	var _hmt = _hmt || []; (function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?59033874dd991ce9246775fed052092a";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();`],
	['meta', {name: 'keywords',content: 'ChatGPT注册,GPT-4,GPT4,ChatGPT账号,ChatGPT 3.5版本,GPT4模型,ChatGPT Plus 一键升级,OpenAI 专用浏览器,OpenAI API 转发服务'}],
	['meta', {name: 'referrer',content: 'no-referrer-when-downgrade'}], // 解决 Chrome 网站统计不准确问题
	['link', {rel: 'stylesheet',href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css'}] // 阿里在线矢量库
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
	{
		name: 'custom-plugins',
		globalUIComponents: ["PageInfo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
	},
	['vuepress-plugin-comment', {
		choosen: 'gitalk',
		options: {
			clientID: '0a4f1de3e80bac9198e7',
			// 你的client ID
			clientSecret: '4a3146a4fb0cb1e736a5a2927a88013c4ab148d9',
			// 你的client secret
			repo: 'leichunhongx.github.io',
			// GitHub 仓库
			owner: 'leichunhongx',
			// GitHub仓库所有者
			admin: ['leichunhongx'],
			// 对仓库有写权限的人
			// distractionFreeMode: true,
			pagerDirection: 'last',
			// 'first'正序 | 'last'倒序
			// 下面的不用修改，默认这些即可
			id: "<%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %>",
			//  页面的唯一标识,长度不能超过50
			title: "「评论」<%- document.title %>",
			// GitHub issue 的标题
			labels: ["Gitalk", "Comment"],
			// GitHub issue 的标签
			body: "<%- document.title %>：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
		}
	}],

	],
	themeConfig: {
		logo: "/logo.png",
		siteTitle: false,
		lastUpdated: '上次更新',
		// string | boolean
		sidebar: 'structuring',
		displayAllHeaders: true,
		// 默认值：false
		sidebarDepth: 2,

		pageStyle: 'line',
		// 站点配置（首页 & 文章页）
		blogInfo: {
			blogCreate: '2024-02-29',
			// 博客创建时间
			indexView: true,
			// 开启首页的访问量和排名统计，默认 true（开启）
			pageView: true,
			// 开启文章页的浏览量统计，默认 true（开启）
			readingTime: true,
			// 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
			eachFileWords: readEachFileWords([''], 300, 160),
			// 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
			mdFileCountType: 'archives',
			// 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
			totalWords: 'archives',
			// 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
			moutedEvent: '.blogger-wrapper',
			// 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
			// 下面两个选项：第一次获取访问量失败后的迭代时间
			indexIteration: 2500,
			// 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
			pageIteration: 2500,
			// 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
			// 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
		},

		nav: [
		{
			text: '首页',
			link: '/'
		},
		{
            text: '最新推荐',
            link: '/recommendations/'
        },
		{
			text: 'ChatGPT注册升级',
			link: '/chatgpt/'
		},
		{
			text: 'ChatGPT订阅',
			link: '/chatgptplus/',
			items: [{
				text: '订阅教程',
				link: '/chatgptplus/upgrade-gpt.html'
			},
			{
            	text: 'GPT5',
            	link: '/chatgptplus/gpt5'
            },
			{
				text: '取消自动扣费/订阅',
				link: '/chatgptplus/how-to-cancel-chatgptplus.html'
			},
			{
				text: '升级GPT4',
				link: '/chatgptplus/upgrade-gpt4-on-your-own.html'
			},
			{
				text: 'Claude3',
				link: '/chatgptplus/claude3.html'
			},
			]
		},
		{
			text: 'ChatGPT账号',
			link: '/chatgpt-account/',
			items: [{
				text: '账号购买',
				link: '/chatgpt-account/'
			},
			{
                text: '账号代充',
                link: '/chatgpt-account/recharge/'
            }
			]
		},
		{
        			text: 'WildCard虚拟卡',
        			link: '/wildcard/',
        			items: [

        			{
        				text: '平台详解',
        				link: '/wildcard/'
        			},
        			{
        				text: '注册教程',
        				link: '/wildcard/register.html'
        			},

        			]

        },
		{
			text: 'OnlyFans',
			link: '/onlyfans/'
		},
		{
			text: 'Sora',
			link: '/sora/'
		},
		{
			text: 'ChatGPT简介',
			link: '/chatgpt-info/',
			items: [{
				text: 'ChatGPT是什么',
				link: '/chatgpt-info/what-is-chatgpt.html'
			},
			{
				text: 'ChatGPT能干什么',
				link: '/chatgpt-info/what-can-chatgpt-do.html'
			},
			{
				text: 'Prompt工程',
				link: '/chatgpt-info/Asking-ChatGPT-for-High-Quality-Answers.html'
			},
			{
				text: 'AI模型简史',
				link: '/chatgpt-info/AI-life.html'
			},

			]
		},
		{
			text: 'ChatGPT帮助中心',
			link: '/chatgpt-help/',
			items: [
			{
				text: '解决ChatGPT发不出去消息',
				link: '/chatgpt-help/unable-to-send-messages.html'
			},
			{
            	text: '自动扣费失败，如何续订',
            	link: '/chatgpt-help/payment-failure'
            },

			]
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
			],
		}],

	   blogger: {
              avatar: '/head.jpg',
              name: '鸿',
              slogan: '梦想总在凌云志，意气风发',
        },
		footer: {
			createYear: 2024,
			// 博客创建年份
			copyrightInfo: 'HH | <a href="https://aliyuntm.com" target="_blank">MIT License</a>',
			// 博客版权信息、备案信息等，支持a标签或换行标签</br>
		},
		sidebar: {
			'/chatgpt/': [{
				title: 'ChatGPT',

				children: [''],
			},
			],
			'/chatgpt-account/': [{
				title: 'ChatGPT账号',
				children: ['','recharge'],
			},
			],
			'/chatgpt-info/': [{
				title: 'ChatGPT简介',
				children: ['', 'what-can-chatgpt-do', 'Asking-ChatGPT-for-High-Quality-Answers', 'AI-life'],
			},
			],
			'/chatgptplus/': [{
				title: 'ChatGPT PLUS',
				children: ['','gpt5','how-to-cancel-chatgptplus', 'upgrade-gpt4-on-your-own', 'claude3'],
			},
			],

			'/onlyfans/': [{
				title: 'OnlyFans ',
				children: [''],
			},
			],

			'/sora/': [{
				title: 'Sora',
				children: [''],
			},
			],

			'/chatgpt-help/': [{
				title: 'ChatGPT帮助中心',
				children: ['','payment-failure'],
			},
			],

			'/wildcard/': [{
				title: 'WildCard虚拟卡',
				children: ['', 'register'],
			},
			],

		}

	}
}
module.exports = {
	lang: 'zh-CN',
	title: 'ChatGPT中文教程',
	description: 'ChatGPT中文教程',
	theme: 'vuepress-theme-vdoing',
	head: [["script", {},
	`
	var _hmt = _hmt || []; (function() {
		var hm = document.createElement("script");
		hm.src = "https://hm.baidu.com/hm.js?59033874dd991ce9246775fed052092a";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();`], ["meta", {
		name: "keywords",
		content: "ChatGPT,ChatGPT Plus,GPT-4,GPT4,ChatGPT升级,ChatGPT账号,GPT-4升级,GPT4升级,ChatGPT中文教程,Onlyfans订阅"
	}]
	//      ['meta',{name: 'referrer', content: 'no-referrer-when-downgrade'}],
	//      ['link', {rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css'}]
	],
	plugins: {
		'sitemap': {
			hostname: 'https://aliyuntm.com'
		}
	},
	themeConfig: {
		logo: "/gptNew.png",
		siteTitle: false,
		nav: [{
			text: '首页',
			link: '/'
		},
		{
			text: 'ChatGPT',
			link: '/chatgpt/'
		},
		{
			text: 'ChatGPT PLUS',
			link: '/chatgptplus/'
		},
		{
			text: 'ChatGPT账号',
			link: '/chatgpt-account/'
		},
		{
			text: 'ChatGPT代充',
			link: '/chatgpt-recharge/'
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
			link: '/chatgpt-info/'
		},
		{
			text: 'ChatGPT帮助中心',
			link: '/chatgpt-help/'
		}],
		sidebar: {
			'/chatgpt/': ['how-to-update-gpt4'],
			'/chatgpt-account/': ['/'],
			'/chatgpt-recharge/': ['/'],
			'/chatgpt-info/': ['what-is-chatgpt', 'AI-life', 'what-can-chatgpt-do', 'Asking-ChatGPT-for-High-Quality-Answers'],
			'/chatgptplus/': ['upgrade-gtp', 'how-to-cancel-chatgptplus'],
			'/onlyfans/': ['/'],
			'/sora/': ['/'],
			'/chatgpt-help/': ['unable-to-send-messages']
		}
	}
}
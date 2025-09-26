---
title: 使用WildCard绑定chatgpt API以及chatgpt Key申请最新详细教程
description: 如何能调用 chatgpt API，chatgpt 如何绑卡？如何申请 Key，如何通过手机验证？
meta: 
  - 
    name: description
    content: 如何能调用 chatgpt API，chatgpt 如何绑卡？如何申请 Key，如何通过手机验证？
  - 
    name: keywords
    content: chatgpt API充值订阅
tags: 
  - chatgpt API充值订阅
date: 2024-11-10 20:56:45
permalink: /openapi/api/
categories: 
  - ChatGPT升级
---

# 使用WildCard绑定chatgpt API以及chatgpt Key申请最新详细教程
## 温馨提醒
在chatgpt绑卡前，一定要保证卡上至少有5美元的余额，否则会绑卡失败

## 登录 chatgpt platform

点击[platform.chatgpt.com](platform.chatgpt.com)，打开页面后然后输入你的chatgpt帐号和密码(也就是你的ChatGPT帐号)

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-193851%402x.png)

## 为chatgpt绑定付款方式

登录以后，点击右上角的  Settings，然后点击billing ，就可以进入充值入口。或者直接[访问地址](https://platform.chatgpt.com/settings/organization/billing/overview)

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-193945%402x.png)

点击 Add payment details

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-193955%402x.png)

点击“Set up paid account”，选择是个人使用还是公司

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194004%402x.png)

输入[WildCard注册的虚拟卡](https://chatgpt.aliyuncn.com/)使用邀请码 **GPT310** 有2美元开卡优惠。填写卡号，有效期、CVV以及邮编，下面输入姓名、WildCard 提供的帐单地址，然后点“continue“,如果你还不知道怎么注册WildCard虚拟卡可以看看[这篇文章](https://aliyuntm.com/wildcard/update/)。
![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194018%402x.png)

绑卡结束后，会让你选择充值金额，可以是5美元到50美元之间的任意金额，充值任意金额之后，就可以直接使用 GPT-4 的API。
![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194041%402x.png)

绑卡成功后，充值金额如果出现卡片被拒绝的提示，可以先关闭充值弹窗，刷新页面后先开启自动充值（确认下新添加的卡片是否设置为默认卡，自动充值都是从默认卡片扣费的，参考下图，卡片的Default置灰则代表是默认卡）。
![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194054%402x.png)

开启自动充值后，卡片余额足够的情况下（自动充值最低 10 美金，可能还需要绑卡预扣款 5 美金，卡片最好至少有 15 美金），一般过一段时间会自动充值到api里面，可以稍等等看。


## chatgpt 申请 API Key

点击菜单中的“API Keys”就可以看到已经创建的API Keys以及添加API Key的按钮，你也可以直接输入这个[链接创建API Keys](https://platform.chatgpt.com/api-keys)

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194133%402x.png)

然后点击 Start verification，需要验证一下海外手机号

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194141%402x.png)

验证手机号码
![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194152%402x.png)

这时候登录 [WildCard](https://chatgpt.aliyuncn.com/)，在页面里面找到菜单「海外手机号」服务，点击「申请手机号」申请成功之后，复制分配的手机号。

![](https://hlplch.aliyuntm.com/chatgpt/WechatIMG901.jpg)

国家请选择 🇬🇧 英国 United Kindom，然后将号码粘贴到chatgpt的注册页面输入框里，点击下方的“发送验证码”按钮。

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194338%402x.png)

在 [WildCard](https://chatgpt.aliyuncn.com/) 页面，点击刷新按钮，看到6位数验证码已经显示在网页上了，复制然后回到 chatgpt 填写，就可以完成chatgpt注册过程。

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194354%402x.png)

获取验证码填入就行了
![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194405%402x.png)

如果没收到验证码，或者遇到手机号码已经被注册的提示，就申请新手机号，一般3个号码能稳定收到至少1个验证码。

验证成功之后会有提示，这里请注意，每个海外手机号可以验证两个 API，如果第二次使用这个手机号验证，会提示这个手机号已经绑定了一个 API，这个没有影响，可以正常使用，无需担心。

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194427%402x.png)

然后正常创建和复制 api key 就行了

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194437%402x.png)

## API 消费额度和扣费

chatgpt 会根据你充值的金额，对你进行消费限额，比如你充值了5美元，调用 API 也最多消费 5 美元。

如果连续2次扣费失败（比如遇到卡内余额不足），chatgpt 就会封禁绑定的卡号。

API调用的消费情况[链接](https://platform.chatgpt.com/usage)
![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194508%402x.png)
API调用额度限制，和支持的模型（GPT-3.5/GPT-4）[链接](https://platform.chatgpt.com/settings/organization/limits)

![](https://hlplch.aliyuntm.com/chatgpt/WX20241110-194516%402x.png)

## 使用WildCard绑定chatgpt API总结

借助[WildCard](https://chatgpt.aliyuncn.com/)提供的虚拟卡，可以轻松为chatgpt API绑定虚拟卡使用支付宝充值使用。如果你有调用chatgpt API的需求可以按照此教程来操作。




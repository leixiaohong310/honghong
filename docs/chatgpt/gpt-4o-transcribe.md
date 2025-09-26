---
title: chatgpt 又放大招！全新语音模型来了，AI 也能“听懂”人话了
description: 3 月 21 日，chatgpt 悄悄发布了一套全新的语音模型，涵盖语音转文本（STT）和文本转语音（TTS）功能
meta: 
  - 
    name: description
    content: 3 月 21 日，chatgpt 悄悄发布了一套全新的语音模型，涵盖语音转文本（STT）和文本转语音（TTS）功能
  - 
    name: keywords
    content: gpt-4o-transcribe,gpt-4o-mini-transcribe,gpt-4o-mini-tts
tags: 
  - gpt-4o-transcribe
  - gpt-4o-mini-transcribe
  - gpt-4o-mini-tts
permalink: /chatgpt/gpt-4o-transcribe/
categories: 
  - chatgpt
date: 2025-03-22 21:11:03
---

# chatgpt 推出全新语音模型，AI 语音助手更进一步

3 月 21 日，chatgpt 发布了一系列全新的语音模型，涵盖语音转文本（STT）和文本转语音（TTS）两大方向，让开发者能更轻松地打造智能语音助手。这次更新带来了三款新模型：

- gpt-4o-transcribe（语音转文本）：识别准确率进一步提升，单词错误率（WER）降低，在多个测试中超越了 Whisper 模型。
- gpt-4o-mini-transcribe（精简版 STT）：在保证识别质量的同时，速度更快，资源占用更少。
- gpt-4o-mini-tts（文本转语音）：支持“可引导性”，开发者可以控制 AI 说话的方式，而不仅仅是内容。

这次升级，意味着 AI 语音交互距离“更自然、更拟人”的目标又迈进了一步。

## 语音识别更强，适应各种复杂场景
![](https://hlplch.aliyuntm.com/chatgpt/WechatIMG1214.jpg)
gpt-4o-transcribe 采用了更丰富的高质量音频数据进行训练，能够更精准地捕捉语音细节，减少错误识别，在嘈杂环境、不同口音甚至快语速情况下都能稳定转录，适用于多个实际场景，比如：

- 客服中心，面对来自全球的用户咨询时，能够精准理解不同口音，减少人工处理成本。
- 会议记录，即使多人同时交谈，也能清晰转录，不再需要手动整理笔记。

而 gpt-4o-mini-transcribe 则更偏向于资源有限但仍需要高质量语音识别的场景。虽然比完整版稍逊一筹，但整体表现依然优于 Whisper 模型，在多语言测试中也表现出色，尤其是英语和西班牙语等语言。

## 文本转语音的进化，不再是“电子音”
这次推出的 gpt-4o-mini-tts，让 AI 朗读文本的方式发生了质的变化。以往的语音合成听起来生硬、毫无情感，而这次，开发者可以直接控制 AI 说话的风格，比如：

- 正式、专业的客服语气
- 轻松愉快的年轻人聊天风格
- 充满激情的演讲风格
- 甚至是模仿中世纪骑士的古典腔调
  
![](https://hlplch.aliyuntm.com/chatgpt/WechatIMG1213.jpg)
你还可以给 AI 设定更具体的语气，比如“像一位温暖而富有同情心的医生一样说话”，让 AI 以更贴合情境的方式表达内容。
![](https://hlplch.aliyuntm.com/chatgpt/WechatIMG1212.jpg)

### 价格方面

- gpt-4o-transcribe：每分钟 0.006 美元，与原来的 Whisper 模型价格一致。
- gpt-4o-mini-transcribe：更便宜，每分钟 0.003 美元。
- gpt-4o-mini-tts：每分钟 0.015 美元，进一步降低了高质量语音合成的门槛。

![](https://hlplch.aliyuntm.com/chatgpt/WechatIMG1215.jpg)

国内想使用 chatgpt的开发者或者团队，都会遇到充值的难题，国内的信用卡和银行卡都不行，作者在这里推荐使用海外虚拟卡，作者使用两年多啦，比较方便，支付宝直接充值使用，随充随到，冲多了可以秒提现到支付宝账号。

> 虚拟卡链接 ：[https://chatgpt.aliyuncn.com/](https://chatgpt.aliyuncn.com/)

## 语音 AI 的两种实现方式

chatgpt 在直播中演示了 AI 语音助手的实际应用，还介绍了两种主流的语音 AI 处理方式：

### 1. 语音到语音的端到端模型

系统直接将用户语音输入转换成语音回复，中间不经过文本转换。这种方式反应更快，已经应用在 ChatGPT 的高级语音模式中，适合需要即时响应的场景，比如智能语音助手、实时翻译等。

### 2. “链式方法”

这也是 chatgpt 重点介绍的方案。这种方法将语音交互拆解为三个步骤：

1. 语音转文本（STT），先把用户说的话转成文字。
2. 文本处理（LLM），AI 理解文本内容并生成回应。
3. 文本转语音（TTS），最终再用 AI 语音朗读生成的回复。

相比端到端模型，这种方法的好处是更稳定、可控，同时也更容易集成到现有的 AI 系统中。开发者可以基于已有的文本处理能力，快速扩展语音功能，而不需要重新训练语音模型。

值得一提的是，chatgpt 还举办了一个广播比赛。
用户可以在 [http://chatgpt.fm](http://chatgpt.fm) 制作音频，接着使用 chatgpt.fm 上的「分享」按钮生成链接，然后在 X 平台分享。最具创意的前三名将各获一台限量版 Teenage Engineering OB-4。音频时长建议控制在 30 秒左右，可在语音、表达、发音或剧本语调变化上尽情发挥创意。

![](https://hlplch.aliyuntm.com/chatgpt/WechatIMG1211.jpg)

## 语音 AI 的未来：更自然，更有“人味”

今年 AI 领域的一个新趋势是强调情感价值，不再只是冷冰冰的工具，而是向着更拟人化的方向发展。GPT-4.5、Grok 3 都在强调“更有个性、更有情绪”，而语音 AI 作为最接近人类沟通方式的技术，正在变得越来越像真人。

最近在硅谷爆火的 Sesame AI 就是一个典型例子，它能实时感知用户情绪，并做出更具共鸣的回应。与此同时，chatgpt 这次的语音升级、以及即将发布的 Meta Llama 4，也都在向更自然的语音交互靠拢。

AI 需要更“有人味”吗？很多聊天机器人都会声明自己“没有情感”，但用户依然会在与 AI 的对话中找到情绪价值，甚至不自觉地与 AI 建立某种情感连接。或许，这就是人类天生的沟通需求——即使对方是 AI，我们依然希望被理解，被倾听。

未来的 AI，不只是能听懂你的话，而是能真正理解你的情绪，这才是语音 AI 进化的终极方向。  


# gf2-daily-helper
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/chesha1/gf2-daily-helper)

> [!IMPORTANT]
> 2026 年 5 月 31 日的登录接口 `401` 问题已通过更新接口域名和登录加密方式修复。
> 本项目仍依赖官方社区接口，如果官方后续再次调整接口或加密逻辑，可能需要同步更新代码或配置。

Girls' Frontline 2 Exilium Official Community Check-in Helper

[少前 2 国服官网社区](https://gf2-bbs.exiliumgf.com/)每日任务助手

自动化完成签到、获取积分、兑换物品，部署到云厂商的 serverless 服务上，可以实现全自动完成任务

详细的视频介绍：https://www.bilibili.com/video/BV1vS411A7i5/

> [!CAUTION]
> 使用自动化工具可能导致您的账号被封，请谨慎考虑是否使用  
> 目前没见过有人提到用了被封号，但不排除这种可能  
> 我不怕死，我先用了  

## 执行逻辑
进行每日签到，查看帖子、点赞、分享来获取积分，然后兑换可能的物品

由于每天获得的积分，在兑换完每日资源后，只剩 10 个积分，所以有时候需要积累几天，不能立即兑换信息核

## 使用方法
目前提供 5 种使用方法：
1. [Cloudflare Worker](./docs/cloudflare.md)
2. [AWS Lambda](./docs/aws.md)
3. [华为云 函数工作流（推荐中国大陆用户使用）](./docs/huawei-cloud.md)
4. [GitHub Actions（推荐网络能流畅访问 GitHub 的用户优先使用这个，而不是比较繁琐的华为云，不过需要每 60 天激活一次）](./docs/github-actions.md)
5. [本地运行](./docs/local.md)

所有部署方式都需要配置 `ACCOUNT_NAME`、`PASSWORD` 和 `ENCRYPTION_KEY`，各项含义见 [通用配置说明](./docs/configuration.md)。

阿里云和腾讯云不提供长久免费的 serverless 服务

GCP 对于中国大陆的用户，可能网络不可达

## 有效性
每日助手很依赖这个官方论坛对于每日任务不上难度，不用太多校验手段，所以将来可能会失效

截至 2026 年 5 月 31 日，登录接口 `401` 问题已修复，目前还能用。后续如果官方社区再次调整接口或登录加密逻辑，每日助手可能需要继续更新。

## 未来开发
- [ ] 浏览器插件
- [ ] 外服官方社区

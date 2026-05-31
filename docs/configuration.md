<h1>通用配置说明</h1>

所有部署方式都需要提供下面 3 个配置项：

| 名称 | 说明 |
| --- | --- |
| `ACCOUNT_NAME` | 散爆账号，填写手机号或邮箱 |
| `PASSWORD` | 散爆账号密码，填写明文密码，程序会在请求前自行处理 |
| `ENCRYPTION_KEY` | 官方社区登录接口使用的 AES-CBC 加密密钥 |

当前可用的 `ENCRYPTION_KEY` 为：

```text
a86a86^oH$04r6A1
```

这个值来自官方社区登录页前端脚本。它不是账号密码，但如果官方社区后续再次调整登录逻辑，这个值也可能变化；如果任务日志里再次出现登录 `401` 或登录返回异常，优先检查 `ENCRYPTION_KEY` 是否还是最新值。

## `ENCRYPTION_KEY` 是怎么发现的

打开官方社区页面 `https://gf2-bbs.exiliumgf.com/` 后，页面 HTML 会加载一份前端 JS，例如：

```html
<script defer="defer" src="https://community-cdn.exiliumgf.com/website/source/bbspc1780041073859/js/app.a49edaae.js"></script>
```

下载这份 JS 后，搜索 `login/account`、`AES.encrypt` 或 `Utf8.parse`，可以找到登录前处理账号密码的逻辑。当前版本的登录逻辑里写着：

```js
Utf8.parse("a86a86^oH$04r6A1")
```

同一段代码会先把密码做一遍 MD5 类处理，然后把 `account_name` 和处理后的 `passwd` 都用这段 key 作为 AES-128-CBC 的 key 和 iv 加密，再把 Base64 结果改成 URL-safe 形式。因此项目里把这段官方前端脚本里的硬编码 key 抽成了 `ENCRYPTION_KEY` 配置项。

如果需要重新验证，可以用抓包拿到真实请求里的 `account_name` 密文，再用本项目的加密函数和明文账号重新计算一次；输出完全一致时，就说明当前 `ENCRYPTION_KEY`、AES 模式、iv、padding 和 Base64 URL-safe 处理都对上了。

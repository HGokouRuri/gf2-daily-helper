<h1>本地运行</h1>

- [1. 安装依赖](#1-安装依赖)
- [2. 配置](#2-配置)
- [3. 运行](#3-运行)

## 1. 安装依赖

```bash
pnpm install
```

## 2. 配置

到 `src/index-local.ts` 中配置你的账号信息：

```ts
const CONFIG = {
    ACCOUNT_NAME: 'your_account_name_here',
    PASSWORD: 'your_password_here',
    ENCRYPTION_KEY: 'encrypt_key_here',
};
```

`ENCRYPTION_KEY` 的当前值和配置项说明见 [通用配置说明](./configuration.md)。

## 3. 运行

```bash
pnpm run local
```

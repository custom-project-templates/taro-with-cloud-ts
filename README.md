# 微信小程序(taro)+云开发模板

和官方模板相比：
- client 里都改为了 hooks 写法
- 云函数开发使用 [funpack](https://github.com/XHMM/funpack)，开发体验更好
- eslint 关闭部分规则

## 使用
1. 下载该仓库
2. `cd client && yarn` 安装小程序端依赖
3. `cd cloud && yarn` 安装云函数依赖
4. 更新 `client/config` 目录下的 `dev.js` 和 `prod.js` 中的 `CLOUD_ENV` 变量，将其替换成云环境ID

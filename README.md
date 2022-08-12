# 微信小程序(taro)+云开发模板

和官方模板相比：
- client 里都改为了 hooks 写法
- 云函数开发支持 typescript 并能正常部署
- eslint 关闭部分规则

## 使用
1. 下载该仓库
2. `cd client && yarn` 安装小程序端依赖
3. `cd cloud && yarn` 安装云函数依赖（注意：若要使用云函数本地调试功能，请手动前往该函数目录下运行 `yarn install`，否则调试时提示 node_modules 未安装）
4. **开启 IDE 的 compile on save 功能**，以确保 cloud 目录里的 ts 文件每次改动都被编译为了 js（鄙人使用 webstorm 开启很简单，vscode 未做研究）
5. 更新 `client/config` 目录下的 `dev.js` 和 `prod.js` 中的 `CLOUD_ENV` 变量，将其替换成云环境ID

## 项目结构说明
- 云函数相关：
  - `cloud` 目录使用了 yarn workspace，避免每个云函数依赖重复安装
  - 云函数的 ts 文件为何不直接放到对应函数的根目录而是放到了 `src` 下？ 因为当根目录同时出现 `index.ts` 和 `index.js` 时，云函数部署会失败（挺无语哈）
  - 云函数中的 `tsconfig.json` 里使用了 `files` 配置项，而非 `include`，因为使用 `include` 会和 `outDir` 冲突。**所以如果后续给 `src` 新增文件时，记得手动更新到 `files` 里。**

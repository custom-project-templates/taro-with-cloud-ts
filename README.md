# 微信小程序(taro)+云开发模板

和官方模板相比：
- client 里都改为了 hooks 写法
- 云函数开发支持 typescript 并能正常部署

## 使用
- `cd client && yarn`
- `cd cloud && yarn`
- 开启IDE的 compile on save 功能（鄙人使用webstorm，vscode未做研究）

## 说明
- 云函数目录说明
  - `cloud` 目录使用了 yarn workspace，以避免每个云函数安的依赖重复安装
  - 云函数的 ts 文件为何不直接放到对应函数的根目录而是放到了 `src` 下？ 因为当根目录同时出现 `index.ts` 和 `index.js` 时，云函数部署会失败（挺无语哈）
  - 云函数中的 `tsconfig.json` 里使用了 `files` 配置项，而非 `include`，因为使用 `include` 会和 `outDir` 冲突，所以如果后续给 `src` 新增文件时，记得手动更新到 `files` 里

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const cloud = require("wx-server-sdk");
cloud.init({
    // @ts-ignore
    env: cloud.DYNAMIC_CURRENT_ENV,
});
exports.main = async (event, context) => {
    console.log(event);
    console.log(context, "test");
    const wxContext = cloud.getWXContext();
    return {
        event,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
        env: wxContext.ENV,
    };
};

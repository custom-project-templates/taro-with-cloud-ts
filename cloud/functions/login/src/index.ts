import * as cloud from "wx-server-sdk";

cloud.init({
  // @ts-ignore
  env: cloud.DYNAMIC_CURRENT_ENV,
});

export const main = async (event: any, context: cloud.ICloud.WXContext) => {
  console.log(event);
  console.log(context, "login");
  const wxContext = cloud.getWXContext();
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
  };
};

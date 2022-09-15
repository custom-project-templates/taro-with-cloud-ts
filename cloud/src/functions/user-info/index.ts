import * as cloud from "wx-server-sdk";
import { UserModel } from "../../types";

cloud.init({
  // @ts-ignore
  env: cloud.DYNAMIC_CURRENT_ENV,
});
const db = cloud.database();

export const main = async (event: any, context: cloud.ICloud.WXContext) => {
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  const userQuery = await db
    .collection("users")
    .where({
      openid,
    } as Partial<UserModel>)
    .get();
  const arr = (userQuery as cloud.DB.IQueryResult).data;
  const dbUser = arr.length ? arr[0] : null;

  if (!dbUser) {
    return null;
  } else {
    return dbUser;
  }
};

import * as cloud from "wx-server-sdk";
import { UserModel } from "../../types";
import { createUser } from "../../utils";

const envId = cloud.DYNAMIC_CURRENT_ENV;
cloud.init({
  // @ts-ignore
  env: envId,
});
const db = cloud.database();

export const main = async (event: any, context: cloud.ICloud.WXContext) => {
  const { OPENID } = cloud.getWXContext();
  const { avatar, name } = event;

  const userQuery = (await db
    .collection("users")
    .where({
      openid: OPENID,
    } as Partial<UserModel>)
    .get()) as cloud.DB.IQueryResult;
  const user = userQuery.data.length > 0 ? userQuery.data[0] : null;
  if (!user) {
    await db.collection("users").add({
      data: createUser({
        name,
        avatar,
        openid: OPENID as string,
      }),
    });
  }

  return {
    ok: true,
  };
};

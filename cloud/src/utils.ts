import { UserModel } from "./types";

export function createUser({
  name,
  avatar,
  openid,
}: {
  name: string;
  avatar: string;
  openid: string;
}): UserModel {
  return {
    name,
    avatar,
    openid,
  };
}

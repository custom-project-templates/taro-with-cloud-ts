import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";

import "./index.scss";

const IndexPage = () => {
  const [ctx, setCtx] = useState<any>(null);

  const getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {},
      })
      .then((res) => {
        setCtx(res.result);
      });
  };

  return (
    <View>
      <View className="index">
        <Button onClick={getLogin}>获取登录云函数</Button>
        <Text>context：{JSON.stringify(ctx)}</Text>
      </View>
    </View>
  );
};

export default IndexPage;

import { FC, PropsWithChildren, useEffect } from "react";
import Taro from "@tarojs/taro";

import "./app.scss";

const App: FC<PropsWithChildren<any>> = (props) => {
  useEffect(() => {
    if (process.env.TARO_ENV === "weapp") {
      Taro.cloud.init();
    }
  }, []);
  return props.children;
};

export default App;

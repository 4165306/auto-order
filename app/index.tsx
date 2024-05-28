import { useRef, useState } from "react";
import { Button, Modal, StatusBar, Text, View } from "react-native";
import PddConfig from "./components/config/pdd-config";
import HWebView from "./components/module/HWebView";
import Guide from "./components/config/guide";

export default function Index() {
  const pddConfigRef = useRef<PddConfig | null >(null)
  const guideRef = useRef< Guide | null >(null)
  const webview = useRef<HWebView | null >(null)
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        paddingTop: StatusBar.currentHeight
      }}
    >
      <View style={{height: '80%'}}>
        <HWebView ref={webview} />
      </View>
      <View style={{padding: 10}}>
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <Button title={"拼多多配置"} onPress={() => pddConfigRef.current?.setVisiable(true)} />
          <Button title={"抖音配置"} />
          <Button title={"快手配置"} />
          <Button title={"使用说明"} onPress={() => guideRef.current?.setVisible(true)} />
        </View>
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
        <View style={{flex: 1, backgroundColor: "#909399", padding: 5, borderRadius: 5}}>
          <Text style={{color: '#f2f3f6', fontSize: 11}}>{"日志记录"}</Text>
        </View>
      </View>
      <PddConfig ref={pddConfigRef} />
      <Guide ref={guideRef} />
    </View>
  );
}

import { View, Text, Button, Platform, StatusBar, TextInput } from "react-native"
import HWebView, { HWebViewRef } from "../components/webview/HWebView"
import { useRef, useState } from "react";
import Curl from "../extends/curl/curl";
import Lmmyx from "../extends/pdd/lmmyx";
import PddOrderResultInterface from "../extends/pdd/interfaces";
import Awaits from "../extends/systems/awaits";
const logInfo = "日志信息"
const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0;


export default function WebView () {
  const [command, setCommand] = useState<string>('')
  const webview = useRef<HWebViewRef | null>(null)
  const runStart = () => {
    const curl = `
    curl 'https://freeh5.lmmyx.com/h5/v1/pdd/externalItemList?wp=&type=0&goodsId=&isShowWithDraw=1&customParams=Tz8xBrjDdYL9ouGbnmLRtA%3D%3D&userFee=0&channel=ofs&sign=8f79a0bdfcb01a5546b88f1e36ecc11f&token=&isEnd=false' \
    -H 'authority: freeh5.lmmyx.com' \
    -H 'promoterid: VJSycLhEFG' \
    -H 'sign: 8f79a0bdfcb01a5546b88f1e36ecc11f' \
    -H 'user-agent: Mozilla/5.0 (Linux; Android 14; SM-S9180 Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220067 MMWEBSDK/20240404 MMWEBID/2736 MicroMessenger/8.0.49.2600(0x28003152) WeChat/arm64 Weixin NetType/WIFI Language/en ABI/arm64' \
    -H 'x-requested-with: com.tencent.mm'
    `;
    (async () => {
      let r = await Lmmyx.getInstance(curl).getGoods()
      if (r.length < 0) {
        console.log('没有订单')
      }
      console.log('跳转链接', r[0].order_link)
      webview.current?.goto(r[0].order_link)
      // 等待页面加载完成
      await Awaits.awaitFunc(() => webview.current?.getUrl().indexOf('mobile.yangkeduo.com/duo_coupon_landing.html') !== -1)
      // 点击领取按钮
      webview.current?.evalJs(`document.querySelector('div.xkYBNdH3').click()`)
      await Awaits.awaitFunc(() => webview.current?.getUrl().indexOf('mobile.yangkeduo.com/goods.html') !== -1)
      webview.current?.evalJs(``)
    })()
  }
  return (
    <>
      <View style={{display: "flex", height: 500, flexDirection: "row", marginTop: statusBarHeight}}>
        <View style={{flex: 1}}>
          <HWebView ref={webview} />
        </View>
        <View style={{width: 150, backgroundColor: "#f2f3f6"}}>
          <Text style={{color: "#909399"}}>{logInfo}</Text>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Button title={"开始执行"} onPress={runStart} />
      </View>
      <View style={{padding: 10}}>
        <TextInput placeholder={"请输入拼多多链接"} style={{borderBottomWidth: 1}} value={command} onChangeText={setCommand} />
      </View>
    </>
  )
  
}
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import WebView from "react-native-webview"

type HWebViewProps = {
    uri?: string
    enableJS?: boolean
}

export type HWebViewRef = {
    goto: (url: string) => void;
    getUrl(): string;
    evalJs: (script: string) => void;
};

const HWebView = forwardRef<HWebViewRef, HWebViewProps>((props, ref) => {
    const { uri = 'https://mobile.yangkeduo.com/', enableJS = true } = props;
    const [webviewUrl, setWebViewUrl] = useState(uri)
    const webViewRef = useRef<WebView>(null);

    const webViewOnLoad = (syntheticEvent: any) => {
        const {nativeEvent} = syntheticEvent;
        const curl = nativeEvent.url;
        //根据url地址判断刚才已经完成什么操作
        const jmurl = decodeURIComponent(curl);
        setWebViewUrl(jmurl);
    }

    // 定义供父组件调用的方法
    useImperativeHandle(ref, () => ({
        goto: (url: string) => {
            setWebViewUrl(url)
        },
        getUrl: () => webviewUrl,
        evalJs: (script: string) => webViewRef.current?.injectJavaScript(script),
    }));

    return <WebView ref={webViewRef} source={{ uri: webviewUrl }} onLoad={webViewOnLoad} />;
});

export default HWebView;
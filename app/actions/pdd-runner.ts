import { HWebViewRef } from "@/app-example/components/webview/HWebView"

export interface PddRunnerInterface {
    // 订单Curl信息
    ordersCurl: string
    // 自动确认收货
    autoConfirmReceipt: boolean
    // 自动好评
    autoGoodReputation: boolean
    // 自动上传截图
    autoUploadSceeenHost: boolean
}

export type platformType = 'LMMX' | '蚁淘' | '赶俏'

export class PddRunner {

    static async main(config: PddRunnerInterface, webviewRef: HWebViewRef) {
        // 检测配置是否都正确
        this.checkConfig(config)
        // 检查是否登陆
        // -----任务监听开始------
        // 请求Curl返回 所有平台实现PddActionInterface接口(执行Curl，领取优惠券) 返回PddProductInterface[] 数据
        // 过滤PddProductInterface[], 废弃需要晒宝贝图的，价格差价过大的商品
        // 循环PddProductInterface[]开始
        //   PddActionInterface.getCoupon(PddProductInterface) 领取优惠券并跳转商品购买页面
        //   this.checkOrder(): void; 跳转下单页面
        //   this.pushOrder(type: wechat | alipay = alipay) : void 
        //   this.genQrCode() 生成支付链接二维码
        //   等待支付
        // 循环结束
    }

    static async check_order() {

    }

    private static checkConfig(config: PddRunnerInterface) {
    }
}
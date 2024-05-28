import Curl from "../curl/curl"
import PddOrderResultInterface from "./interfaces"

export default class Lmmyx {

    private request: string

    private static entity: Record<string, Lmmyx> = {}

    private constructor(request: string) {
        this.request = request
    }

    public static getInstance(request: string) {
        if (!this.entity[request]) {
            this.entity[request] = new Lmmyx(request)
        }
        return this.entity[request]
    }

    async getGoods(): Promise<PddOrderResultInterface[]> {
        const g = await Curl.exec(this.request)
        console.log(g.code)
        if (g.code !== 10001) {
            return []
        }
        const r: PddOrderResultInterface[] = []
        for (let i = 0; i < g.data.list.length; i ++) {
            const item = g.data.list[i]
            const urlParams = item.miniAppUrl.substring(26)
            const order_link = decodeURIComponent(urlParams)
            console.log(order_link, !item.isBuy, +item.merchantFee, (+item.cashbackAmount.replace('¥', '')), +item.platformFee)
            if (this.filterOrder(item) || !order_link) {
                continue;
            }
            r.push({
                order_link: order_link,
                good_name: item.title,
                order_price: +item.cashbackAmount.replace('¥', ''),
                platform_fee: +item.platformFee,
                gid: item.itemId
            })
        }
        return r
    }

    private filterOrder(item: any) {
        return item.isBuy || +item.merchantFee > 0 || (+item.cashbackAmount.replace('¥', '')) !== +item.platformFee || item.comment.indexOf('+晒图') === -1
    }

}
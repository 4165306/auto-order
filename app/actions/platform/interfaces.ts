export interface PddActionInterface {
    execCurl(curl: string): PddProductInterface[]
    geCoupon<T>(coupon: T): void;
}

export interface PddProductInterface {
    source: Record<string, any>
    coupon_link_params: any
}
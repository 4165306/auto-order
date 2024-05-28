function jumperCheckOrder(
    oc_pid, 
    duoduo_type, 
    _oc_cps_sign, 
    _oc_mkt_tr_sc,
    _oc_mkt_tr_token,
    _oc_mkt_domain,
    _x_ddjb_act,
    _x_ddjb_id,
    _x_ddjb_gs,
    page_id
) {
    const g = window.rawData.store.initDataObj.goods
    const sku = g.skus
    let skuId = ''
    let minPrice = 99999
    for (let i = 0; i < sku.length; i ++ ) {
        if (+sku[i].priceDisplay.price < minPrice) {
            minPrice = +sku[i].priceDisplay.price
            skuId = sku[i].skuId
        }
    }
    const href = ''
    href += 'https://mobile.yangkeduo.com/'
    // oc_rank_id | no-encode
    href += window.rawData.store.initDataObj.goods.destinationUrl
    // sku_id | no-encode
    href += '&sku_id' + skuId
    // group_id | no-encode
    href += '&group_id' + window.rawData.store.initDataObj.goods.groupTypes[1].groupID
    // goods_id | no-encode
    href += '&goods_id' + g.sku[0].goodsId
    // goods_numer | no-encode
    href += '&goods_number=1'
    // page_from | no-encode
    href += '&page_from=29'
    // detail_id | no-encode
    href += '&detail_id=' + g.activity.detailID
    // _oc_pid | no-encode
    href += '&oc_pid=' + oc_pid
    // _oc_duoduo_type | no-encode
    href += '&_oc_duoduo_type=' + duoduo_type
    // _oc_cps_sign | no-encode
    href += '&_oc_cps_sign=' + _oc_cps_sign
    // _oc_mkt_tr_sc | no-encode
    href += '&_oc_mkt_tr_sc=' + _oc_mkt_tr_sc
    // _oc_mkt_tr_token | no-encode
    href += '&_oc_mkt_tr_token' + _oc_mkt_tr_token
    // _oc_mkt_domain | no-encode
    href += '&_oc_mkt_domain=' + _oc_mkt_domain
    // refer_page_element | no-encode
    href += '&refer_page_element=open_btn'
    // source_channel | no-encode
    href += '&source_channel=0'
    // _x_ddjb_act | encode
    href += '&_x_ddjb_act=' + _x_ddjb_act
    // _x_ddjb_id | no-encode
    href += '&_x_ddjb_id=' + _x_ddjb_id
    // _x_ddjb_gs | encode
    href += '&_x_ddjb_gs=' + _x_ddjb_gs
    // refer_page_name | no-encode
    href += '&refer_page_name=goods_detail'
    // refer_page_id | no-encode
    href += '&refer_page_id=' + page_id
    // refer_page_sn | no-encode
    href += '&refer_page_sn=' + page_id.split('_')[0]
    location.href = href
}

const href = location.href

jumperCheckOrder()
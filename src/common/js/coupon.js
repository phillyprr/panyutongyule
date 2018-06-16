/* eslint-disable camelcase */
export default class CouponFactory {
  constructor({id, title, platform_price, shop_price, stock, promotion_type, end_at, not_allow_time, collected, shop_logo, shop_name}) {
    this.id = id
    this.title = title
    this.platform_price = Math.floor(platform_price)
    this.shop_price = Math.floor(shop_price)
    this.stock = stock
    this.collected = collected
    this.promotion_type = promotion_type
    this.end_at = end_at ? end_at.split(' ')[0] : ''
    this.not_allow_time = not_allow_time
    this.shop_logo = shop_logo
    this.shop_name = shop_name
  }
}

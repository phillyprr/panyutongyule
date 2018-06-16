import base from './base'

export default class Coupon extends base {
  /**
   * 获取商家优惠券列表
   * @param merchantId 商家Id
   * @returns {Promise.<*>}
   */
  static async getShopCouponList(merchantId, data) {
    const url = `${this.baseUrl}/api/merchants/show-merchant/${merchantId}`
    return await this.get(url, data)
  }

  /**
   * 获取商家优惠券详情
   * @param merchantId 优惠券Id
   * @returns {Promise.<*>}
   */
  static async getShopCouponDetail(couponId) {
    const url = `${this.baseUrl}/api/merchants/coupons/${couponId}`
    return await this.get(url)
  }

  /**
   * 获取用户优惠券列表
   * @param status 状态(未使用，已使用，已过期) page 页码
   * @returns {Promise.<*>}
   */
  static async getUserCouponList(status, page) {
    const url = `${this.baseUrl}/api/coupons/promotions`
    let data = {
      status,
      page
    }
    return await this.get(url, data)
  }

  /**
   * 获取用户优惠券详情
   * @param id 优惠券id
   * @returns {Promise.<*>}
   */
  static async getUserCouponDetail(id) {
    const url = `${this.baseUrl}/api/coupons/promotions/${id}`
    return await this.get(url)
  }

  /**
   * 获取商家礼包详情
   * @param packageId 礼包id
   * @returns {Promise.<*>}
   */
  static async getPackageDetail(packageId) {
    const url = `${this.baseUrl}/api/merchants/gift-bags/${packageId}`
    return await this.get(url)
  }

  /**
   * 收藏优惠券
   * @param id 优惠券id
   * @returns {Promise.<*>}
   */
  static async storeCoupon(id) {
    const url = `${this.baseUrl}/api/favorite/promotion`
    return await this.post(url, {promotion_id: id})
  }

  /**
   * 取消收藏优惠券
   * @param id 优惠券id
   * @returns {Promise.<*>}
   */
  static async cancelStoreCoupon(id) {
    const url = `${this.baseUrl}/api/favorite/promotion/${id}`
    return await this.delete(url)
  }

  /**
   * 收藏礼包
   * @param id  礼包Id
   * @returns {Promise.<*>}
   */
  static async storePackage(id) {
    const url = `${this.baseUrl}/api/favorite/gift`
    return await this.post(url, {gift_bag_id: id})
  }

  /**
   * 取消收藏礼包
   * @param id
   * @returns {Promise.<*>}
   */
  static async cancelStorePackage(id) {
    const url = `${this.baseUrl}/api/favorite/gift/${id}`
    return await this.delete(url)
  }
}

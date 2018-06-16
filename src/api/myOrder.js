import base from './base'

export default class myOrder extends base {
  /**
   * 获取订单数据
   * @param status状态 page页码
   * @returns {Promise.<*>}
   */
  static async getOrderList(status, page) {
    const url = `${this.baseUrl}/api/orders/wechat-orders`
    let data = {
      status,
      page
    }
    return await this.get(url, data)
  }
  /**
   * 获取单条订单数据
   * @param id 订单id
   * @returns {Promise.<*>}
   */
  static async getOrderDetail(id) {
    const url = `${this.baseUrl}/api/orders/wechat-orders/${id}`
    return await this.get(url)
  }
  /**
   * 申请退款
   * @param token jk_token
   * @returns {Promise.<*>}
   */
  static async orderRebate(id, number, money, cause) {
    const url = `${this.baseUrl}/api/orders/refund`
    let data = {
      order_id: id,
      number,
      cause,
      money
    }
    return await this.post(url, data)
  }
  /**
   * 查看单条退款详情
   * @param id 订单id
   * @returns {Promise.<*>}
   */
  static async getRefundDetail(id) {
    const url = `${this.baseUrl}/api/orders/refund-info/${id}`
    return await this.get(url)
  }
  /**
   * 查看单条订单优惠券列表
   * @param id 订单id
   * @returns {Promise.<*>}
   */
  static async getOrderCouponList(id) {
    const url = `${this.baseUrl}/api/orders/customer-promotions/${id}`
    return await this.get(url)
  }
  /**
   * 提交评价
   * @param data 评星,评价,印象,订单id,优惠券ID
   * @returns {Promise.<*>}
   */
  static async setAppraise(data) {
    const url = `${this.baseUrl}/api/info/appraises`
    return await this.post(url, data)
  }
  /**
   * 付款
   * @param
   * @returns {Promise.<*>}
   */
  static async paymentOrder(data) {
    const url = `${this.baseUrl}/api/orders/wechat-orders`
    return await this.post(url, data)
  }
}

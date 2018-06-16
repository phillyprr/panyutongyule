import base from './base'

export default class Order extends base {
  /**
   * 获取支付参数
   * @param data
   * @returns {Promise.<*>}
   */
  static async operation(data) {
    const url = `${this.baseUrl}/api/orders/wechat-orders`
    return await this.post(url, data)
  }
}

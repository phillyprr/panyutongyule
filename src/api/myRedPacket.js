import base from './base'

export default class GetRedPacket extends base {
  /**
   * 获取用户红包总览
   * @param token jk_token
   * @returns {Promise.<*>}
   */
  static async getTotalRedpacket() {
    const url = `${this.baseUrl}/api/redpackets/monies`
    return await this.get(url)
  }

  /**
   * 获取用户红包列表
   * @param page 页码
   * @returns {Promise.<*>}
   */
  static async getTotalRedpacketList(page) {
    const url = `${this.baseUrl}/api/redpackets/promotion`
    let data = {
      page
    }
    return await this.get(url, data)
  }

  /**
   * 获取用户红包列表
   * @param
   * @returns {Promise.<*>}
   */
  static async withDrawMoney(money) {
    const url = `${this.baseUrl}/api/info/withdrawals`
    let data = {
      money_amount: money
    }
    return await this.post(url, data)
  }
}

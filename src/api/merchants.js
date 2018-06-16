import base from './base'

export default class Merchants extends base {
  /**
   * 获取广场商家列表
   * @returns {Promise.<*>}
   */
  static async getPlazaMerchants() {
    const url = `${this.baseUrl}/api/merchants/plaza-merchants`
    return await this.get(url)
  }

  /**
   * 获取商家详情
   * @param id  商家Id
   * @returns {Promise.<*>}
   */
  static async getMerchantsDetail(id) {
    const url = `${this.baseUrl}/api/merchants/plaza-merchants-show/${id}`
    return await this.get(url)
  }

  /**
   * 保存浏览记录
   * @param data
   * @returns {Promise.<*>}
   */
  static async saveLog(data) {
    const url = `${this.baseUrl}/api/merchants/save-log`
    return await this.post(url, data)
  }
}

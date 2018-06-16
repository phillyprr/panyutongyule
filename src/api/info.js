import base from './base'

export default class Info extends base {
  /**
   * 获取小程序二维码
   * @param data -> path,width,is_forever
   * @returns {Promise.<*>}
   */
  static async createQrode (data) {
    const url = `${this.baseUrl}/api/info/create-qrcode`
    return await this.get(url, data)
  }

  /**
   * 收集formId
   * @param data
   * @returns {Promise.<*>}
   */
  static async collectFormIds(data) {
    const url = `${this.baseUrl}/api/info/collect-formid`
    return await this.post(url, data, false)
  }
}

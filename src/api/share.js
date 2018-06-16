import base from './base'

export default class share extends base {
  /**
   * 获取分享有礼详细信息
   * @param
   * @returns {Promise.<*>}
   */
  static async getShareAndPrizeDetail(data) {
    const url = `${this.baseUrl}/api/activity/share`
    return await this.get(url, data)
  }

  static async getSharePrize(data) {
    const url = `${this.baseUrl}/api/activity/share-prize`
    return await this.get(url, data)
  }
}

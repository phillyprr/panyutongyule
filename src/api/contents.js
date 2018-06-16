import base from './base'

export default class Contents extends base {
  /**
   * 获取商家内容列表
   * @returns {Promise.<void>}
   */
  static async getMerchantContents(data) {
    const url = `${this.baseUrl}/api/contents/merchant-contents`
    return await this.get(url, data)
  }

  /**
   * 获取内容详情
   * @param id 内容id
   * @returns {Promise.<*>}
   */
  static async getContentDetail(id) {
    const url = `${this.baseUrl}/api/contents/merchant-contents/${id}`
    return await this.get(url)
  }

  /**
   * 收藏内容
   * @param id 内容Id
   * @returns {Promise.<*>}
   */
  static async storeContent(id) {
    const url = `${this.baseUrl}/api/favorite/content`
    return await this.post(url, {content_id: id})
  }

  /**
   * 取消收藏内容
   * @param id 内容Id
   * @returns {Promise.<*>}
   */
  static async cancelStoreContent(id) {
    const url = `${this.baseUrl}/api/favorite/content/${id}`
    return await this.delete(url)
  }
}

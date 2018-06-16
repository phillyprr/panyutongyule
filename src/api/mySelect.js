import base from './base'

export default class mySelect extends base {
  /**
   * 获取用户收藏优惠券列表
   * @param token jk_token
   * @returns {Promise.<*>}
   */
  static async getSelectList(page) {
    const url = `${this.baseUrl}/api/favorite/promotion`
    let data = {
      page
    }
    return await this.get(url, data)
  }
  /**
   * 获取用户收藏内容列表
   * @param token jk_token
   * @returns {Promise.<*>}
   */
  static async getContentList(page) {
    const url = `${this.baseUrl}/api/favorite/content`
    let data = {
      page
    }
    return await this.get(url, data)
  }
  /**
   * 获取用户礼包收藏列表
   * @param
   * @returns {Promise.<*>}
   */
  static async getKacList(page) {
    const url = `${this.baseUrl}/api/favorite/gift`
    let data = {
      page
    }
    return await this.get(url, data)
  }
  /**
   * 收藏内容
   * @param id 内容id
   * @returns {Promise.<*>}
   */
  static async selectContent(id) {
    const url = `${this.baseUrl}/api/favorite/content`
    let data = {
      content_id: id
    }
    return await this.post(url, data)
  }
  /**
   * 取消内容收藏
   * @param id 内容id
   * @returns {Promise.<*>}
   */
  static async cancleSelectContent(id) {
    const url = `${this.baseUrl}/api/favorite/content/${id}`
    return await this.delete(url)
  }
}

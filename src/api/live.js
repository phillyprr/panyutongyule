import base from './base'
export default class Live extends base {
  /**
   * 获取直播与优惠券列表
   * @returns {Promise.<*>}
   */
  static async getLiveMsg(data) {
    const url = `${this.baseUrl}/api/activity/live/detail`
    return await this.get(url, data)
  }

  /**
   * 获取直播评论列表
   * @returns {Promise.<*>}
   */
  static async getComment(id) {
    const url = `${this.baseUrl}/api/activity/live/message`
    const data = {'activity_id': id}
    return await this.get(url, data)
  }

  /**
   * 发表评论
   * param activityId 活动id  content评论内容
   * @returns {Promise.<*>}
   */
  static async setComment(activityId, content) {
    // console.log(id)
    const url = `${this.baseUrl}/api/activity/live`
    const data = {'activity_id': activityId, 'content': content}
    return await this.post(url, data)
  }

  /**
   *
   * @param id
   * @returns {Promise.<*>}
   */
  static async getConpon(id) {
    // console.log(id)
    const url = `${this.baseUrl}/api/merchants/coupons/${id}`
    return await this.get(url)
  }
}

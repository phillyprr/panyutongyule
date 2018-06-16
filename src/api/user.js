import base from './base'

export default class User extends base {
  /**
   * 获取用户token
   * @param data 用户授权
   * @returns {Promise.<*>}
   */
  static async authorise(data) {
    const url = `${this.baseUrl}/api/info/authorise`
    return await this.post(url, data)
  }

  /**
   * 获取用户信息
   * @returns {Promise.<*>}
   */
  static async getUserInfo(data, loading) {
    const url = `${this.baseUrl}/api/info/personal`
    return await this.get(url, data, loading)
  }

  /**
   * 修改性别、生日
   * @returns {Promise.<*>}
   */
  static async updataMsg(data) {
    const url = `${this.baseUrl}/api/info/info-modify`
    return await this.post(url, data)
  }

  /**
   * 发送验证码
   * @returns {Promise.<*>}
   */
  static async getPhoneCode(data) {
    const url = `${this.baseUrl}/api/info/send-message`
    return await this.post(url, data)
  }

  /**
   * 绑定手机号码
   * @returns {Promise.<*>}
   */
  static async bindPhone(data) {
    const url = `${this.baseUrl}/api/info/bind-mobile`
    return await this.get(url, data)
  }

  /**
   * 修改手机号码
   * @returns {Promise.<*>}
   */
  static async changePhone(data) {
    const url = `${this.baseUrl}/api/info/update-bind-mobile`
    return await this.get(url, data)
  }

  /**
   * 上传头像
   * @returns {Promise.<*>}
   */
  static async updateAvatar(name) {
    const url = `${this.baseUrl}/api/info/image-change`
    return await this.updateImg(url, name)
  }
}

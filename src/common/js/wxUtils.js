/* eslint-disable no-undef */
import wepy from 'wepy'
import Tips from './tips'

export default class wxUtils {
  /**
   * 如果能够后退（多层），则navigaetBack，否则调用redirectTo
   */
  static backOrRedirect(url) {
    const pages = getCurrentPages()
    // route在低版本不兼容
    const index = pages.findIndex(item => ('/' + item.__route__) === url)
    if (pages.length < 2 || index < 0) {
      wx.redirectTo({
        url: url
      })
    } else {
      const delta = pages.length - 1 - index
      wx.navigateBack({
        delta: delta
      })
    }
  }
  /**
   * 如果能够后退（多层），则navigaetBack，否则调用navigateTo
   */
  static backOrNavigate(url) {
    const pages = getCurrentPages()
    // route在低版本不兼容
    const index = pages.findIndex(item => ('/' + item.__route__) === url)
    if (pages.length < 2 || index < 0) {
      wx.navigateTo({
        url: url
      })
    } else {
      const delta = pages.length - 1 - index
      wx.navigateBack({
        delta: delta
      })
    }
  }

  /**
   * 微信支付
   * @param param -> 支付参数
   * @returns {Promise}
   */
  static wxPay(param) {
    return new Promise((resolve, reject) => {
      wepy.requestPayment({
        ...param,
        complete: res => {
          if (res.errMsg === 'requestPayment:ok') {
            resolve(res)
          } else {
            reject(res)
          }
        }
      })
    })
  }

  /**
   * 检查SDK版本
   */
  static isSDKExipred() {
    const {SDKVersion} = wepy.getSystemInfoSync()
    console.info(`[version]sdk ${SDKVersion}`)
    return SDKVersion == null || SDKVersion < '1.2.0'
  }

  /**
   * 检查SDK版本
   */
  static checkSDK() {
    if (this.isSDKExipred()) {
      Tips.modal('您的微信版本太低，为确保正常使用，请尽快升级')
    }
  }
}

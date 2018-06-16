// 研发站：
// 图片地址     https://img.jerryf.cn
//   单点登录地址  https://dev.jike-jwt.jerryf.cn
//   B端api地址   https://dev.jike-backend-api.jerryf.cn
//   C端api地址   https://dev.jike-wap-api.jerryf.cn
//
//   测试站
// 图片地址     https://img.jkweixin.net
//   单点登录地址  https://jwt.jkweixin.net
//   B端api地址   https://backend-api.jkweixin.net
//   C端api地址   https://wap-api.jkweixin.net
//
//   正式站
// 图片地址     https://img.jkweixin.com
//   单点登录地址  https://jwt.jkweixin.com
//   B端api地址   https://backend-api.jkweixin.com
//   C端api地址   https://wap-api.jkweixin.com

const version = '/v1'

const URLS = {
  image: 'https://img.live.gytcrm.com',
  login: 'https://jwt.live.gytcrm.com',
  api: 'https://wap-api.live.gytcrm.com' + version
}

class URIS {
  constructor() {
    this.image = URLS.image
    this.login = URLS.login
    this.api = URLS.api
  }
}

export default new URIS()

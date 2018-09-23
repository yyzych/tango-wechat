import userApi from '../apis/user'

export default class Authorize {
  static init () {
    this.inited = false
    this.code = ''
    this.role = 0
    this.sessionid = ''
    this.userInfo = {}
    this.scope = {
      userInfo: false,
      userLocation: false,
      address: false,
      invoiceTitle: false,
      werun: false,
      record: false,
      writePhotosAlbum: false,
      camera: false
    }
    // await this.getCode()
    // await this.getSession()
    // await this.getRole()
    this.inited = true
  }

  static async getCode () {
    return new Promise((resolve, reject) => {
      let self = this
      wx.login({
        success: function(res) {
          self.code = res.code
          resolve()
        }
      })
    })
  }

  static async getSession () {
    let response = await userApi.getSession({code: this.code})
    if (!response.success) {
      throw response
    }
    this.sessionid = response.data
  }

  static async getRole () {
    let response = await userApi.getRole({sessionid: this.sessionid})
    if (!response.success) {
      throw response
    }
    this.role = response.data
  }

  static async getUserInfo () {
    return new Promise((resolve, reject) => {
      let self = this
      wx.getUserInfo({
        success: function (res) {
          self.userInfo = res.userInfo
          resolve(self.userInfo)
        }
      })
    })
  }

  static async getAuthSetting () {
    return new Promise((resolve, reject) => {
      let self = this
      wx.getSetting({
        success: function (res) {
          for (let key in res.authSetting) {
            self.scope[key.replace('scope.', '')] = res.authSetting[key]
          }
          resolve(self.scope)
        }
      })
    })
  }
}

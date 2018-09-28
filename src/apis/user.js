import base from './base'

export default class user extends base {
  static async getSession (data) {
    const url = `${this.baseUrl}/user/session`
    return await this.httpPost(url, data)
  }
  static async getRole (data) {
    const url = `${this.baseUrl}/user/role`
    return await this.httpGet(url, data)
  }
}

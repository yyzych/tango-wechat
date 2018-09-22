import base from './base'
import http from '../utils/Http'

export default class user extends base {
  static async getSession (data) {
    const url = `${this.baseUrl}/user/session`
    return await http.post(url, data)
  }
  static async getRole (data) {
    const url = `${this.baseUrl}/user/role`
    return await http.get(url, data)
  }
}

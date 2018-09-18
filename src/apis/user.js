import base from './base'
import http from '../utils/Http'

export default class user extends base {
  static async authorize (data) {
    const url = `${this.baseUrl}/user/authorize`
    return await http.post(url, data)
  }
}

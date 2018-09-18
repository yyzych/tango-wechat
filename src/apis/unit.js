import base from './base'
import http from '../utils/Http'

export default class unit extends base {
  static async get (data) {
    const url = `${this.baseUrl}/unit`
    return await http.get(url, data)
  }
}

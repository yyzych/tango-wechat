import base from './base'
import http from '../utils/Http'

export default class word extends base {
  static async get ({wordId}) {
    const url = `${this.baseUrl}/word/${wordId}`
    return await http.get(url)
  }
  static async getAll (data) {
    const url = `${this.baseUrl}/word`
    return await http.get(url, data)
  }
}

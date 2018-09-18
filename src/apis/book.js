import base from './base'
import http from '../utils/Http'

export default class book extends base {
  static async get ({bookId}) {
    const url = `${this.baseUrl}/book/${bookId}`
    return await http.get(url)
  }
  static async getAll (data) {
    const url = `${this.baseUrl}/book`
    return await http.get(url, data)
  }
}

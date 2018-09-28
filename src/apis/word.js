import base from './base'
import http from '../utils/Http'

export default class word extends base {
  static async get({ wordId }) {
    const url = `${this.baseUrl}/word/${wordId}`
    return await http.get(url)
  }
  static async getAll(data) {
    const url = `${this.baseUrl}/word`
    return await http.get(url, data)
  }
  static async search(data) {
    const url = `${this.baseUrl}/word/search`
    return await http.post(url, data)
  }
  static async getNextWord(data) {
    const url = `${this.baseUrl}/word/next`
    return await http.post(url, data)
  }
  static async getPrevWord(data) {
      const url = `${this.baseUrl}/word/prev`
      return await http.post(url, data)
  }
}

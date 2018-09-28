import base from './base'

export default class word extends base {
  static async get({ wordId }) {
    const url = `${this.baseUrl}/word/${wordId}`
    return await this.httpGet(url)
  }
  static async getAll(data) {
    const url = `${this.baseUrl}/word`
    return await this.httpGet(url, data)
  }
  static async search(data) {
    const url = `${this.baseUrl}/word/search`
    return await this.httpPost(url, data)
  }
  static async getNextWord(data) {
    const url = `${this.baseUrl}/word/next`
    return await this.httpPost(url, data)
  }
  static async getPrevWord(data) {
    const url = `${this.baseUrl}/word/prev`
    return await this.httpPost(url, data)
  }
}

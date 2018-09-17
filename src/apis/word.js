import base from './base';

export default class word extends base {
  static async get ({wordId}) {
    const url = `${this.baseUrl}/word/${wordId}`
    return await this.get(url)
  }
  static async getAll (data) {
    const url = `${this.baseUrl}/word`
    return await this.get(url, data)
  }
}

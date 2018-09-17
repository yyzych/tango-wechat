import base from './base';

export default class book extends base {
  static async get ({bookId}) {
    const url = `${this.baseUrl}/book/${bookId}`
    return await this.get(url)
  }
  static async getAll (data) {
    const url = `${this.baseUrl}/book`
    return await this.get(url, data)
  }
}

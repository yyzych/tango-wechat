import base from './base';

export default class unit extends base {
  static async get (data) {
    const url = `${this.baseUrl}/unit`
    return await this.get(url, data)
  }
}

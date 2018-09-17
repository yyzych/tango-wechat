import base from './base';

export default class user extends base {
  static async authorize (data) {
    const url = `${this.baseUrl}/user/authorize`
    return await this.post(url, data)
  }
}

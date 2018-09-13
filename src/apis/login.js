import base from './base';

export default class login extends base {
  static async token (data) {
    const url = `${this.baseUrl}/wx/miniprogram/token`;
    return await this.post(url, data);
  }
  static async login (data) {
    const url = `${this.baseUrl}/wx/miniprogram/login`;
    return await this.post(url, data);
  }
}
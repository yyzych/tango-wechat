import wepy from 'wepy'
import Tips from './Tips';

const app = getApp();

// HTTP工具类
export default class http {
  static async request(method, url, data, tip = false) {
    const param = {
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    };
    const res = await wepy.request(param);
    if (this.isSuccess(res)) {
      let value = res.data
      if (value.success) {
        return value
      } else {
        if (value.data && (value.data.code === -1 || value.data.code === 0)) {
          wx.reLaunch({url: '/pages/login/login'})
          return {success: false}
        } else {
          if (tip) {
            Tips.toast(value.message, 1000)
          }
          return value
        }
      }
    } else {
      console.error(method, url, data, res);
      throw this.requestException(res);
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode;
    // 微信请求错误
    if (wxCode !== 200) {
      return false;
    }
    const wxData = res.data;
    return wxData;
  }

  /**
   * 异常
   */
  static requestException(res) {
    const error = {};
    error.statusCode = res.statusCode;
    const wxData = res.data;
    const serverData = wxData.data;
    if (serverData) {
      error.serverCode = wxData.code;
      error.message = serverData.message;
      error.serverData = serverData;
    }
    return error;
  }

  static get(url, data, tip) {
    return this.request('GET', url, data, tip)
  }

  static put(url, data, tip) {
    return this.request('PUT', url, data, tip)
  }

  static post(url, data, tip) {
    return this.request('POST', url, data, tip)
  }

  static patch(url, data, tip) {
    return this.request('PATCH', url, data, tip)
  }

  static delete(url, data, tip) {
    return this.request('DELETE', url, data, tip)
  }
}

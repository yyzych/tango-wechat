import wepy from 'wepy'

// HTTP工具类
export default class http {
  static async request(method, url, data) {
    const param = {
      url: url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
    const res = await wepy.request(param)
    if (res.statusCode !== 0) {
      res.data.success = res.data.code === 0
      return res.data
    } else {
      console.error(method, url, data, res)
      throw res
    }
  }

  static get(url, data) {
    return this.request('GET', url, data)
  }

  static put(url, data) {
    return this.request('PUT', url, data)
  }

  static post(url, data) {
    return this.request('POST', url, data)
  }

  static patch(url, data) {
    return this.request('PATCH', url, data)
  }

  static delete(url, data) {
    return this.request('DELETE', url, data)
  }
}

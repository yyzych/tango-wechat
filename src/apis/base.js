import crypto from 'crypto-js'
import http from '../utils/Http'
import {
  baseUrl,
  resourceUrl,
  appSecret
} from '../config'

export default class base {
  static baseUrl = baseUrl
  static resourceUrl = resourceUrl

  static sign (data) {
    let cryptoStr = data ? JSON.stringify(data) + appSecret : appSecret

    let signedData = {
      timestamp: parseInt(Date.now() / 1000),
      sign: crypto.SHA256(cryptoStr).toString()
    }

    if (data) {
      signedData.data = JSON.stringify(data)
    }

    return signedData
  }

  static httpGet(url, data) {
    return http.get(url, this.sign(data))
  }

  static httpPut(url, data) {
    return http.put(url, this.sign(data))
  }

  static httpPost(url, data) {
    return http.post(url, this.sign(data))
  }

  static httpPatch(url, data) {
    return http.patch(url, this.sign(data))
  }

  static httpDelete(url, data) {
    return http.delete(url, this.sign(data))
  }
}

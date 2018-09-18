import wepy from 'wepy';

export default class base {
  // 获取基本URL
  static baseUrl = wepy.$instance.globalData.baseUrl;
}

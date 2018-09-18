export default class Cache {
  static getReadingBook() {
    return wx.getStorageSync('readingBook')
  }

  static removeReadingBook() {
    return wx.removeStorageSync('readingBook')
  }

  static setReadingBook(data, option = {merge: true}) {
    if (!option.merge) {
      wx.setStorageSync('readingBook', data)
      return data
    }
    let book = this.getReadingBook()
    if (!book) {
      wx.setStorageSync('readingBook', data)
      return data
    }
    for (var prop in data) {
      book[prop] = data[prop]
    }
    wx.setStorageSync('readingBook', book)
    return book
  }

  static setReadingUnit(data) {
    return this.setReadingBook({
      readingUnit: data
    })
  }
}

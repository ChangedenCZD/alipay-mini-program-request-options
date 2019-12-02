const Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}
const DataType = ['json', 'text', 'base64', 'arraybuffer']
const DEFAULT_TIMEOUT = 60000
const DEFAULT_DATA_TYPE = 'json'

class Options {
  constructor (url) {
    this.url = url
    this.data = {}
    this.headers = {}
    this.method = Methods.GET
    this.timeout = DEFAULT_TIMEOUT
    this.dataType = DEFAULT_DATA_TYPE
  }

  setUrl (url) {
    this.url = url
    return this
  }

  setData (data) {
    this.data = data || {}
    return this
  }

  setMethod (method) {
    if (Object.keys(Methods).includes(method)) {
      this.method = method || Methods.GET
    }
    return this
  }

  setHeaders (headers) {
    this.headers = headers || {}
    return this
  }

  setTimeout (timeout) {
    this.timeout = timeout || DEFAULT_TIMEOUT
    return this
  }

  setDataType (dataType) {
    if (DataType.includes(dataType)) {
      this.dataType = dataType || DEFAULT_DATA_TYPE
    }
    return this
  }

  request (complete) {
    return new Promise((resolve, reject) => {
      const { url, method, headers, data, dataType } = this
      my.request({
        url,
        method,
        headers,
        data,
        dataType,
        success: res => {
          if (dataType.toLowerCase() === 'json') {
            resolve(res.data)
          } else {
            resolve(res)
          }
        },
        fail: err => {
          reject(err)
        },
        complete
      })
    })
  }
}

module.exports = {
  Methods,
  Options
}

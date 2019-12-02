# alipay-mini-program-request-options
> 基于[支付宝小程序请求Api](https://docs.alipay.com/mini/api/owycmh)的二次封装
<br>

## Usage
```js
const { Methods, Options } = require("alipay-mini-program-request-options");
// 目前支付宝仅支持以下4种请求方式
const { GET, POST, PUT, DELETE } = Methods;

new Options(`请求URL`)
  .setUrl(`更换请求URL`)
  .setMethod(POST)
  .setHeaders({
    'content-type': 'application/json;charset=UTF-8'
  })
  .setTimeout(60000)
  .setData({
    keyword: 'test'
  })
  .request(function () {
    console.log('completed')
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
```

### Constructor Options
|Name|Type|Require|Default Value|
| ------ | ------ | ------ | --- |
| url | String | false | undefined |

### Methods
|Name|Param name array|Param type array|Return|
| ------ | ------ | ------ | --- |
| setUrl | [url] | [String] | this |
| setMethod | [method] | [String] | this |
| setHeaders | [headers] | [Object] | this |
| setTimeout | [timeout] | [Integer] | this |
| setData | [data] | [Object] | this |
| request | [completeCallback] | [Function] | Promise |

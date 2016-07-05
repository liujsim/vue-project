首页
xmlhttprequest
```
var xhr = new window.XMLHttpRequest()
xhr.addEventListener('readystatechange', function () {
  if (this.readyState === 4) {
    console.log(this.responseText)
  }
})
xhr.open('GET', 'https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=all')
xhr.setRequestHeader('cache-control', 'no-cache')
xhr.send('')
```

fetch
```
fetch('https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=all').then(function(response) {
  return response.json() // 必须返回 promise 对象
}).then(function (data) {
  console.log(data)  // 可以赋值给其他语句
}).catch(function (e) {
  console.log('Oops, error')
})
```

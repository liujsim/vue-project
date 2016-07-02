首页
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

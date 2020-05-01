---
title: 找出大于指定大小的文件
sidebarDepth: 5
prev: /demo/
next: /demo/find-big-file/
---

# 找出大于指定大小的文件

找出大于指定大小的文件， 并原封不动的移动到 dist 目录下。

- main.js 入口文件
- read.js 递归的读取指定文件下的所有文件
- filter.js 过滤出超出指定大小的文件
- mkdir.js 建立缺失的文件夹
- move.js 移动过滤后的文件到 dist 目录下

---

[下载代码](/findBigFile.zip)

## main.js

```javascript
const readFile = require('./read').readFileSync
const moveFile = require('./move').moveFile
const filterFile = require('./filter').filterFile

const src = '' // 要过滤的文件夹
readFile(src, function(url) {
  filterFile(
    (path) => {
      // 过滤成功后的回调
      // 成功后移动文件到新目录下
      console.log(path)
      moveFile(path, './dest/' + path)
    },
    url.path, // 被过滤的文件
    {
      // 过滤的文件类型
      type: /\.(?:jpe?g|png|gif|svg)$/,
      // 指定过滤的文件大小
      size: 3
    }
  )
})
```

## read.js

```javascript
const fs = require('fs')

/**
 * 递归的读取某目录下的所有文件, 并采用回调的形式传递
 * @param {String} dir 要搜索的文件目录
 * @param {Function} callback 搜索到的所有文件, 并回调出去
 */
exports.readFileSync = function readFile(dir, callback) {
  const list = fs.readdirSync(dir, callback)
  list.forEach((file) => {
    var path = dir + '/' + file
    const stats = fs.statSync(path)
    stats.isFile()
      ? callback({
          path,
          dir,
          filename: file,
          size: stats.size,
          type: path.slice(path.lastIndexOf('.') + 1)
        })
      : readFile(path, callback)
  })
}
```

## move.js

```javascript
const mkdir = require('./mkdir').mkdirSync
const fs = require('fs')
const path = require('path')

/**
 *  文件移动, 不会影响原始文件, 依赖于mkdir函数
 *
 * @param {Function} from 要移动的文件
 * @param {String} to 文件移动的路径
 */
exports.moveFile = function(from, to) {
  const dir = path.parse(to).dir
  if (!fs.existsSync(dir)) {
    mkdir(dir)
  }
  if (!fs.existsSync(to)) {
    const sourceFile = path.join(__dirname, from)
    const destPath = path.join(__dirname, to)
    const readableStream = fs.createReadStream(sourceFile)
    const writableStream = fs.createWriteStream(destPath)
    readableStream.pipe(writableStream)
  } else {
    console.log("Don't have to move" + '\n-------------')
    return
  }
  console.log(to + '\n' + 'Move to complete' + '\n-------------')
}
```

## filter.js

```javascript
const path = require('path')
const fs = require('fs')
const util = require('util')

/**
 *  文件过滤器
 *
 * @param {Function} callback 过滤后合格的文件的回调函数
 * @param {String} filename 需要过滤的文件
 * @param {Object} filter {size: 界限, 文件大小超过后需要过滤, type: 要过滤的文件类型}
 */
exports.filterFile = function(
  callback,
  filename,
  filter = { type: /\.(jpeg|png|gif|jpg|svg)$/, size: 100 /*100kb*/ }
) {
  var ext = path.parse(filename).ext
  var baseSize = fs.statSync(filename).size
  var pattern = util.isRegExp(filter.type)
    ? filter.type
    : new RegExp(filter.type)

  if (pattern.test(ext) && filter.size * 1024 <= baseSize) {
    callback(filename)
  }
}
```

## mkdir.js

```javascript
const fs = require('fs')
const path = require('path')
/**
 * 递归的创建需要的文件目录
 * @param {String} dir 文件路径
 */
exports.mkdirSync = function mkdir(dir) {
  const pathInfo = path.parse(dir)
  if (!fs.existsSync(pathInfo.dir)) {
    mkdir(pathInfo.dir)
  }
  fs.mkdirSync(pathInfo.dir + '/' + pathInfo.base)
}
```

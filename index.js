const fs = require('fs')
const path = require('path')

/**
 * 依据文件路径自动生成路由
 * @param app
 * @param routesPath
 */
module.exports.init = function (app, routesPath) {
  let fileList = []

  findFile(routesPath, fileList)

  fileList.forEach(filePath => {
    const router = require(filePath)

    let url = filePath.replace(routesPath, '')
      .replace('.js', '')
      .replace(/\\/g, '/')

    if (url.indexOf('/index') === 0) {
      url = '/'
    }

    app.use(url, router)
  })
}

function findFile(routesPath, list) {
  const fileList = fs.readdirSync(routesPath)
  let filePath

  fileList.forEach(file => {
    filePath = path.normalize((path.join(routesPath, file)))

    if (/\.js/.test(file)) {
      list.push(filePath)
    } else {
      findFile(filePath, list)
    }
  })
}
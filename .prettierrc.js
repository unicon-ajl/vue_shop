
module.exports = {
  printWidth: 100,
  tabWidth: 2, // 超过最大值换行
  semi: false, // 结尾不用分号
  singleQuote: true, // 使用单引号
  // disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  htmlWhitespaceSensitivity: 'ignore',
  trailingComma: 'none', // 函数后面不加逗号，如果不写这一个，在methods 最后一个函数也会加逗号，eslint会报错，多了一个逗号
}

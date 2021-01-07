<template>
  <button @click="download">点击下载</button>
</template>

<script>
export default {
  name: 'DownloadCpn',
  props: {
    code: {
      type: String
    },
    filename: {
      type: String,
      default: 'test'
    }
  },
  methods: {
    download() {
      let element = document.createElement('a')
      //这样子就能把链接指向我们自己创建的字符串文件
      element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(this.code)
      )
      //加了这个属性就不让浏览器打开a的href而是下载
      element.setAttribute('download', this.filename + '.vue')
      //虚拟代理
      element.style.display = 'none'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }
  }
}
</script>

<style></style>

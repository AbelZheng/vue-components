<template>
  <!-- 演示demo -->
  <download :code="res" filename="lll"></download>
</template>

<script>
// download 引入
import Download from 'components/download/Download'
import template from 'components/download/template'
export default {
  name: 'DownloadDemo',
  components: {
    Download
  },
  data() {
    return {
      name: 'tt',
      res: ''
    }
  },
  created() {
    this.res = template('<div>123</div>')
  }
}
</script>
<style lang="scss"></style>

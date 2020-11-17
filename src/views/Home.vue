<template>
  <div class="home">
    <div class="current_theme">
      <span>当前主题色</span><span class="theme_font_color">{{ theme }}</span>
    </div>
    <el-button class="custom_btn_plain" @click="change">切换主题</el-button>
    <el-button class="custom_btn" disabled>按钮</el-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      input: ''
    }
  },
  computed: {
    ...mapState(['theme'])
  },
  methods: {
    ...mapMutations(['changeTheme']),
    change () {
      const theme = this.theme === 'blue' ? 'red' : 'blue'
      this.changeTheme(theme)
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    text-align: center;
    .current_theme {
      margin-bottom: 20px;
    }
  }
</style>

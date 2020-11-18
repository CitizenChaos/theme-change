<template>
  <div class="home">
    <div class="current_theme">
      <span>当前主题色</span><span class="theme_font_color">{{ theme }}</span>
    </div>
    <div class="btn_wrapper">
      <el-button class="custom_btn_plain">按钮</el-button>
      <el-button class="custom_btn" disabled>按钮</el-button>
    </div>
    <el-radio-group v-model="radio" @change="change">
      <el-radio label="red">红色主题</el-radio>
      <el-radio label="blue">蓝色主题</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      input: '',
      radio: 'blue'
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
  .current_theme,
  .btn_wrapper {
    margin-bottom: 20px;
  }
}
</style>

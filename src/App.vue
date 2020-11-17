<template>
  <div id="app" :class="`${theme}_theme`">
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['theme'])
  },
  created () {},
  methods: {
    // getSearchArgs (arg) {
    //   if (!arg) return
    //   const args = {}
    //   const query = location.search.substring(1)
    //   const pairs = query.split('&')
    //   for (let i = 0; i < pairs.length; i++) {
    //     const pos = pairs[i].indexOf('=')
    //     if (pos === -1) continue
    //     const name = pairs[i].substring(0, pos)
    //     let value = pairs[i].substring(pos + 1)
    //     value = decodeURIComponent(value)
    //     args[name] = value
    //   }
    //   return args[arg]
    // }
  }
}
</script>

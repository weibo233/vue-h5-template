<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return{}
  },
  created(){
    this.$nextTick(()=>{
        const elWidthValue = this.$refs.app.offsetWidth;
           this.$store.dispatch('setAppWidth', elWidthValue)
    })
  }
}
</script>
<style lang="scss">
</style>

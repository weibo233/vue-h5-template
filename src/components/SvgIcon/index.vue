<template>
  <div style="svg-box">
    <svg :class="svgClass" aria-hidden="true" ref="svg">
    <use :xlink:href="iconName" width="100%" height="100%"></use>
  </svg>
  </div>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    size:{
      type:Object,
      default:() =>{
        return{
          width:"",
          height:""
        }
      }
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  },
  mounted() {
    if(this.size.width) {
        this.$nextTick(()=>{
          this.$refs.svg.style.width = this.size.width
          this.$refs.svg.style.height = this.size.height
        })
      } 
  }
}
</script>

<style scoped>
.svg-box{
  text-align:center;
  background: rgba();
}
.svg-icon {
  width: 2em;
  height: 2em;
  font-size: 20px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
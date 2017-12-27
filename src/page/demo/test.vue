<template>
  <div class="wrap"> 
      <h1>{{name}}</h1>
  </div>
</template>
<script>
export default {
  data () {
      return {
          name : "meeting"
      }
  },
  mounted () {
      alert("!!!!!!!!!");
  }
}
</script>
<style>
.wrap{
    position: relative;
    left:0;
    top:0;
    bottom:0;
    right:0;
    width:100%;
    height:100%;
}
</style>


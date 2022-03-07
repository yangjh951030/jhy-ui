<template>
  <div id="app">
    <jhy-button @click="open">555555555555555</jhy-button>
    <div id="test">
      <jhy-modal v-model="show"><template >555555</template> <button @click="close">close</button></jhy-modal>
    </div>
    <jhy-modal v-model="shows"><template >6666</template><button @click="close">close</button></jhy-modal>
    <jhy-tabs v-model="me">
      <jhy-tabs-item name="1">555</jhy-tabs-item>
      <jhy-tabs-item name="2">666</jhy-tabs-item>
      <jhy-tabs-item name="3">7777</jhy-tabs-item>
      <div>5555555555</div>
    </jhy-tabs>
  </div>
</template>

<script>
import jhyButton from '../UI/button/button'
import jhyModal from '../UI/modal/modal'
import jhyTabs from '../UI/tabs/tab'
import jhyTabsItem from '../UI/tabs/tabitem'
export default {
  name: 'App',
  components: {
    jhyButton,
    jhyModal,
    jhyTabs,
    jhyTabsItem
  },
  data(){
    return {
      show:false,
      shows:false,
      me:'1'
    }
  },
  methods:{
    open(){
      this.$Modal({
        content:'<h1>55555</h1>'
      })
      // this.show = true;
    },
    close(){
      this.show = false;
    },
  }
}
</script>

<style>
body{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#test{
  position: absolute;
  width: 500px;
  height:500px;
  transform: translate(-50%,-50%);
  background: #00ff00;
}
</style>

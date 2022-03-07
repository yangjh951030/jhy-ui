<template>
    <transition :name="tabsAnimation">
        <div v-show="name === isShow" :class="jhyTabsItemClasses"><slot></slot></div>
    </transition>
</template>
<script>
export default {
    name:'jhyTabsItem',
    props:{
        name:{
            type:String,
            default:''
        },
        animation:{
            type:String,
            default:'default'
        }
    },
    data(){
        return {
            isShow:''
        }
    },
    created(){
        this.isShow = this.$parent.nowTabs
    },
    computed:{
        jhyTabsItemClasses(){
            return [
                'jhy-tabs-item-default'
            ]
        },
        tabsAnimation(){
            return `jhy-tabs-item-${this.animation}`
        }
    },
    methods:{
        show(value){
            this.isShow = value;
            console.log(this.isShow)
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="less" scoped>
.jhy-tabs-item-default{
    left:0;
    transition:  0.5s;
}
</style>
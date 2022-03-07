<template>
    <div>
        <div :class="tabsTitleClasses">
            <div v-for="(item,index) in titleArray" 
            :key="index" :class="['jhy-tabs-title-btn',item === value?'jhy-tabs-title-choosed':'']" 
            @click="chooseTabs(item)">{{item}}</div>
        </div>
        <keep-alive>
            <div :class="tabsContentClasses"><slot></slot></div>
        </keep-alive>
    </div>
</template>
<script>
export default {
    name:'jhyTabs',
    model:{
        prop:'value',
        event:'choose'
    },
    props:{
        value:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            nowTabs:this.value,
            titleArray:[]
        }
    },
    created(){ 
        let slots = [];
        console.log(this.$slots.default)
        this.$slots.default.forEach((item)=>{
            if(item.componentOptions !== undefined && item.componentOptions.tag === 'jhy-tabs-item'){
                slots.push(item);
            } // 搞不懂这个到底是怎么实现的，点击完之后还会显示！！！
        })
        this.$slots.default = slots;
    },
    computed:{
        tabsTitleClasses(){
            return ['jhy-tabs-title-default']
        },
        tabsContentClasses(){
            return ['jhy-tabs-content-default']
        },
    },
    methods:{
        chooseTabs(value){
            this.$emit('choose',value)
        },
        notify(value){
            this.$children.forEach((item)=>{
                item.show(value)
            })
            console.log(this.$children)
        }
    },
    watch:{
        value:function(val){
            this.nowTabs = val;
            this.notify(this.nowTabs)
        }
    },
    mounted(){
        console.log(this.$slots.default);
        console.log(this.$children);
        this.$slots.default.forEach((item)=>{
            this.titleArray.push(item.componentOptions.propsData.name)
        })
        console.log(this.$slots.default);
        console.log(this.titleArray)
        // this.$children = this.$children.filter(item=>
        //      item.$options._componentTag=== 'jhy-tabs-item'
        //  )
        // console.log(this.$children)
        // this.$children.filter((item)=>item.)
    }
}
</script>
<style lang="less" scoped>
.jhy-tabs-title-btn{
    display: inline-block;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #000;
}
.jhy-tabs-title-choosed{
    background: brown;
}
</style>
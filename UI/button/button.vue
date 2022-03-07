<template>
    <button :class="jhyButtonClasses" @click="handerClick">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:'jhyButton',
    model:{

    },
    props:{
        default:{
            type:Boolean,
            default:true
        },
        gradient:{
            type:Boolean,
            default:false
        },
        gradientHover:{
            type:Boolean,
            default:false
        },
        myClasses:{
            type:[String,Array,Object],
            default:''
        }
    },
    data(){
        return {

        }
    },
    computed:{
        jhyButtonClasses(){
            return [
                this.default?'jhy-button-default':'',
                this.gradient?'jhy-button-gradient':'',
                this.gradientHover?'jhy-button-gradient-hover':'',
                this.myClasses?this.myClasses:''
                
            ]
        }
    },
    methods:{
        handerClick(e){
            this.$emit('click',e);
        }
    },
    mounted(){

    },
    watch:{

    }
}
</script>
<style lang="less" scoped>
@width:100px;
@height:40px;
@padding:10px;
@defaultbackground:#5266eb;
@hoverBackground:#5277ff;
@border:1px solid white;
@borderRadius: 5px;
@fontSize:1em;
.shenglv{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.jhy-button-default{
    min-width: @width;
    max-width: 200px;
    height:@height;
    padding: @padding;
    border: @border;
    border-radius: @borderRadius;
    outline: none;
    font-size: @fontSize;
    background: @defaultbackground;
    color: black;
    .shenglv();
    &:hover{
        background: @hoverBackground;
    }
}
.jhy-button-gradient{
    border: 1px solid #bbaacc;
    background-image: linear-gradient(125deg   , red, green,yellow,blue,);
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 400%;
    color: transparent;
    .shenglv();
    animation: gradients 10s  linear infinite ;
    &:hover{
        border: 1px solid black;
        background-image: linear-gradient(125deg, red,green,yellow,blue);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
}
@keyframes gradients {
    0% {
        background-position: 0% ;
    }
    50%{
        background-position: 100% ;
    }
    100% {
        background-position: 0% ;
    }
    
}
.jhy-button-gradient-hover{
    border: 1px solid #bbaacc;
    background-image: linear-gradient(125deg , red, green,yellow,blue);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    .shenglv();
    &:hover{
        border: 1px solid black;
        background-image: linear-gradient(125deg, red,green,yellow,blue);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        background-size: 400%;
        animation: gradients 10s  linear infinite ;
    }
}

</style>
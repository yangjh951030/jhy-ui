<template>
    <transition :name="showModalAnimation">
        <div v-if="value" :class="modelMaskClasses">
            <div :class="slotModalClasses">
                <!-- <div :class="modalHeaderClasses">
                    <div><slot name="header"></slot></div><button @click="handerClick">close</button></div>
                <div :class="modalBodyClasses"><slot name="body"></slot></div>
                <div :class="modalFooterClasses"><slot name="footer"></slot></div> -->
                <div v-if="content === false"><slot></slot></div>
                <div v-if="content !== false">
                    <div v-html="content"></div>
                    <button @click="handerClick">close</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'jhyModal',
    model:{
        prop:'value',
        event:'close'
    },
    props:{
        value:{
            type:Boolean,
            default:false
        },
        mask:{
            type:Boolean,
            default:true
        },
        animation:{
            type:String,
            default:'default'
        },
        myModalContentClasses:{
            type:[Array,String,Object],
            default:''
        }

    },
    data(){
        return {
            content:false
        }
    },
    computed:{
        showModalAnimation(){
            if(this.animation === 'rotate'){
                return 'modal-rotate-animation';
            }else if(this.animation === 'bottom') {
                return 'modal-bottom-animation';
            }else if(this.animation === 'left'){
                return 'modal-left-animation';
            }
            return 'modal-default-animation';
        },
        modelMaskClasses(){
            return [
                this.mask ? 'jhy-modal-mask-default': 'jhy-modal-mask-none',
                this.value === false? 'jhy-modal-close':''
            ]
        },
        slotModalClasses(){
            return ['jhy-modal-content',this.myModalContentClasses];
        },
        modalHeaderClasses(){
            return ['xx']
        },
        modalBodyClasses(){
            return ['xx']
        },
        modalFooterClasses(){
            return ['xx']
        }
    },
    methods:{
        handerClick(){
            this.$emit('close',false);
            console.log('是否执行,没有的话执行到下一布，仅限于js编码的弹窗');
            this.value = false;
        }
    },
    mounted(){
        
    },
    beforeDestroy(){
        
    },
    watch:{
        value:function(val){
            if(val === true) {
                document.body.append(this.$el)
            }
        }
    }
}
</script>
<style lang="less" scoped>

.fixposition{
    position: fixed;
}
@keyframes rotates {
    from{
        transform: scale(0) rotateZ(0deg);
    }
    to{
        transform: scale(1) rotateZ(360deg)
    }
}
@keyframes toptobottom {
    from {
        top:100%
    }
    to{
        top:0%
    }
}
@keyframes lefttoright {
    from {
        left:100%
    }
    to {
        left: 0%;
    }
}
@keyframes scales {
    from {
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }
}
.modal-rotate-animation-enter-active{
    animation: rotates 0.5s ease-out ;
}
.modal-rotate-animation-leave-active{
    animation: rotates 0.5s ease-out reverse;
}
.modal-bottom-animation-enter-active{
    animation: toptobottom 0.5s ease-out ;
}
.modal-bottom-animation-leave-active{
    animation: toptobottom 0.5s ease-out reverse;
}
.modal-left-animation-enter-active{
    animation: lefttoright 0.5s ease-out ;
}
.modal-left-animation-leave-active{
    animation: lefttoright 0.5s ease-out reverse;
}
.modal-default-animation-enter-active{
    animation: scales 0.5s ease-out ;
}
.modal-default-animation-leave-active{
    animation: scales 0.5s ease-out reverse;
}
.jhy-modal-mask-default{
    .fixposition();
    left:0%;
    top:0%;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(27, 25, 25, 0.5)
}
.jhy-modal-mask-none{
    .fixposition();
    min-width: 100px;
}
.jhy-modal-content{
    position: absolute;
    left:50%;
    top:50%;
    min-width: 300px;
    min-height: 300px;
    background: white;
    transform: translate(-50%,-50%);
}

</style>
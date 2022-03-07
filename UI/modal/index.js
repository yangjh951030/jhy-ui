import jhyModal from './modal'
import vue from 'vue'
const modal = vue.extend(jhyModal)
jhyModal.install = function (options) {
    if(options === undefined || options === null){
        options = {
            content:'是否确认'
        }
    } else if(typeof options === 'string'|| typeof options === 'number'){
        options = {
            content: options
        }
    }
    let instance  = new modal({
        data: options,
        beforeDestroy(){
            document.body.removeChild(instance.$el);//这个问题还是有点多
        }
    }).$mount();
    document.body.appendChild(instance.$el);
    vue.nextTick(()=>{
        instance.value = true; // 不会导致修改props而出错
    })
}

export default jhyModal
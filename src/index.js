import Button from '../package/button/index.js';
import FormMaking from '../package/formMaking/index.js'

//把所有组件存储起来
const components = [Button, FormMaking];
const install = Vue => {
    //判断组件是否安装，如果暗转改了就不安装了，按需引用
    if (install.installed) {
        return;
    }
    install.installed = true;
    //遍历注册所有组件
    components.map(component => Vue.use(component));
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
    ...components
}
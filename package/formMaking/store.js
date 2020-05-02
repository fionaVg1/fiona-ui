import vue from 'vue';
export const store = vue.observable({componentName:''});
export const mutations = {
    changeComponent(type){
        store.componentName = type;
    }
}
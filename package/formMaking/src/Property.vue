<template>
    <div>
        <header class="el-header" style="height: 45px;">
            <div class="config-tab active" v-on:click="changeComponent">字段属性</div>
            <div class="config-tab" v-on:click="changeComponent">表单属性</div>
        </header>
        <main>
            <component :is="currentView"></component>
        </main>
    </div>
</template>
<script>
    import filedProperty from "./FieldProperty.vue";
    import formProperty from './FormProperty.vue';
    export default {
        name: 'Property',
        components:{
            filedProperty,formProperty
        },       
        data() {
            return {
                currentView:'filedProperty'
            }
        },
        methods: {
            changeComponent: function (event) {
                if(this.currentView === 'filedProperty'){
                    this.currentView = 'formProperty';
                }else{
                    this.currentView = 'filedProperty';
                }
                var target = event.target,tempClassList=[];
                for(let clz of target.classList){
                    tempClassList.push(clz);
                }
                // Vue.util.extend(tempClassList,target.classList);
                target.classList.add("active");
                var sibling = target.previousSibling || target.nextSibling;
                sibling.classList.value = '';
                for(let clz of tempClassList){
                    sibling.classList.add(clz);
                }
            }
        }
    }
</script>
<style scoped>
    .el-header {
        border-bottom: 2px solid #e4e7ed;
        padding: 0 5px;
    }
   .config-tab.active {
        border-bottom: 2px solid #409eff;
    }
  .config-tab {
        height: 45px;
        line-height: 45px;
        display: inline-block;
        width: 145px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        position: relative;
        cursor: pointer;
    }
</style>
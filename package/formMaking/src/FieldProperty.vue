<template>
    <div>
        字段属性{{componentName}}
    </div>
</template>
<script>
    import {store} from '../store.js'
    export default{
        name:'filedProperty',     
        data(){
            return{
                // componentName:store.componentName
            }
        },
        computed:{
            componentName(){
                return store.componentName;
            }
        }      
    }
</script>
<style scoped>
</style>
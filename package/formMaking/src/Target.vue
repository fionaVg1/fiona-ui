<template>
    <div class="el-container container">
        <div class="el-main" >
            <form class="el-form el-form--label-right">
                <div class="widget-form-list" v-on:dragover="dragover" v-on:drop="drop">
                    <div class="el-form-item widget-view  el-form-item--small" v-for="item in items" :key="item.type">
                        <label class="el-form-item__label" style="width: 100px;">{{item.name}}</label>
                        <div class="el-form-item__content" style="margin-left: 100px;">
                            <component :is="item.type" v-on:component-click="showProperty"></component>
                        </div> 
                    </div>                                  
                </div>     
            </form>
        </div>
        
    </div>
</template>
<script>
    import {mutations} from '../store.js'
    export default {
        name: 'Target',    
        methods: {
            dragover:function (event) {
                  event.preventDefault();           
            },
            drop: function (event) {
                event.preventDefault();
                var type = event.dataTransfer.getData("type");              
                this.items.push({type:type});   
            },
            showProperty: function(type){                
                console.log(type)
                mutations.changeComponent(type);
            }
        },
        data() {
            return {
                items:[],               
            }
        },
        computed:{
           
        }  
    }
</script>
<style scoped>
    .container {
        flex-direction: column !important;
        position: relative;
        min-height:700px;
    }
    
    .el-main {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    
    .el-main::after {
        content: '',
    }
    .el-form{
        height:calc(100% - 20px);
    }
    
    .widget-form-list {
        background: #fff;
        border: 1px dashed #999;      
        margin: 10px;
        height:100%;
    }
</style>
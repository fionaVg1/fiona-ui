<template>
    <div class="components-list">
        <div class="widget-cate"><span>基础字段</span></div>
        <ul>
            <li v-for="item in basicFields" :key="item.type"  :id="item.type" class="form-edit-widget-label" draggable="true" v-on:dragstart="dragstart">
                <a>
                    <i class="icon iconfont icon-input">                      
                    </i>
                    <span>{{item.name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    import Util from '../util.js';
    export default {
        name: 'Source',    
        components:{           
        },  
        data() {
            return {
                basicFields: []
            }
        },
        methods: {
            dragstart: function(event) {
                event.dataTransfer.setData("type", event.target.id);
            }
        },       
        created() {
            this.basicFields = Util.getBasicFields();
        }
    }
</script>
<style scoped>
    .components-list {
        padding: 8px 0;
        width: 100%;
        height: 100%;
    }
    .components-list .widget-cate {
        padding: 8px 12px;
        font-size: 13px;
    }
    .widget-cate span{
        display:inline-block;
        width:100%;
        text-align:left;
    }
    .form-edit-widget-label {
        font-size: 12px;
        display: block;
        width: 48%;
        line-height: 26px;
        position: relative;
        float: left;
        left: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 1%;
        color: #333;
        border: 1px solid #f4f6fc;
    }
    .components-list ul {
        position: relative;
        overflow: hidden;
        padding: 0 10px 10px;
        margin: 0;
    }
    .form-edit-widget-label>a {
        display: block;
        cursor: move;
        background: #f4f6fc;
        border: 1px solid #f4f6fc;
    }
    .components-list .form-edit-widget-label>a .icon {
        margin-right: 6px;
        margin-left: 8px;
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
    }   
    .components-list .form-edit-widget-label>a span {
        display: inline-block;
        vertical-align: middle;
    }
</style>
<template>
    <div style="position: relative;">
        <div class="el-container">
            <aside class="left">               
                <Source></Source>
            </aside>
            <section class="center">
                <Target v-on:component-click="changeProperty"></Target>
            </section>
            <aside class="right">   
                <Property></Property>                    
            </aside>
        </div>
    </div>
</template>
<script>
    import Source from './Source.vue'
    import Target from './Target.vue'
    import Property from './Property.vue'    
    export default {
        name: 'formMaking',
        components: {
            Source,
            Target,
            Property
        }, 
        data(){
            return{
                
            }
           
        }, 
        
    }
</script>
<style >
    *, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
    .el-container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        min-width: 0;
    }
    
    .left {
        width: 250px;
    }    
    .center {
        /* min-height: 700px; */
        border: 1px dashed grey;
        flex: 1;
    }    
    .right {
        width: 300px;
    }
</style>
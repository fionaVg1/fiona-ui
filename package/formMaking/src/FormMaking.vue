<template>
    <div>
        <div class="left">
            <span>基础字段</span>
            <source v-for="item in basicFields" :key="item.id" :name="item.name"></source>
        </div>
        <div class="right">
            <target></target>
        </div>
    </div>
</template>
<script>
    import Source from './Source.vue'
    import Target from './Target.vue'
    import Util from '../util.js'
    export default {
        name: 'formMaking',
        components: {
            Source,
            Target
        },
        data() {
            return {
                basicFields: []
            }
        },
        created() {
            this.basicFileds = Util.getBasicFields();
        }
    }
</script>
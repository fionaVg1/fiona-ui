/* 两种全局注册组件的方法： 1. Vue.component() 2. Vue.use() 该方法前提是你的组件里必须有一个install方法 */
<template>
    <button type="button" :class="[`fiona-button`,`fiona-button--${type}`,{'is-circle':circle},{'is-plain':plain},{'is-round':round},{'is-disabled':disabled}]" :disabled="disabled" @click="handleClick">
        <i :class="icon" v-if="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>
<script>
    export default {
        name: 'fionaButton',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            icon: {
                type: String,
                default: ''
            },
            circle: {
                type: Boolean,
                default: false
            },
            plain: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick(e) {
                e.stopPropagation();
                e.preventDefault();
                this.$emit('component-click', this.$options.name); //向父组件传递通知
            }
        }
    }
</script>
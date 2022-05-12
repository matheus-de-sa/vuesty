<template>
    <button
        ref="btn"
        v-bind="$attrs"
        type="button"
        class="sty-button"
        :disabled="disabled"
        v-on="listeners"
        :class="[
            `sty-button-${isColor ? color : ''}`,
            `sty-button-${type}`,
            {
                'sty-button-loading-back': loading,
                'sty-button-disabled': disabled,
                'sty-button-active': active,
                'sty-button-shadow': shadow,
                'sty-button-icon-include': $slots.icon,
                'sty-button-icon-include-only': $slots.icon && !$slots.default
            },
            `sty-button-size-${size}`
        ]"
        :style="styles"
    >
        <div
            v-if="loading"
            :class="{ 'sty-button-loading': loading }"
            :style="stylesLoading"
        >
            <!-- <i class="bx bx-loader-circle bx-spin bx-rotate-90"></i> -->
        </div>
        <div v-if="$slots.icon" class="sty-button-icon">
            <slot name="icon"></slot>
        </div>
        <div v-if="$slots.default" class="sty-button-text">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    name: 'sty-button',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        border: {
            type: Boolean,
            default: false
        },
        relief: {
            type: Boolean,
            default: false
        },
        shadow: {
            type: Boolean,
            defaul: false
        },
        size: {
            type: String,
            default: 'default'
        },
        loading: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'primary'
        }
    },
    data() {
        return {}
    },
    methods: {},
    computed: {}
}
</script>

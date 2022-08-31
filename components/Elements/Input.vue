<template>
<div class="flex flex-row py-2 py-2">
    <label class="min-w-[80px]">{{ label }}</label>
    <input @change="handleChage" :name="name" class="border border-slate-200 w-full shadow-sm text-sm rounded p-2" :type="type" :placeholder="placeholder" />
</div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: 'input'
        },
        placeholder: {
            type: String,
            default: 'Input the field'
        },
        pattern: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        handleChage: {
          type: Function,
          default: function(){}
        }
    }
}
</script>

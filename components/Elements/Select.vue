<template>
<div class="flex flex-row py-2">
    <label class="min-w-[80px]">{{ lable }}</label>
    <select :data-type="data_type" @change="changeItem" class="border border-slate-200 rounded text-sm p-2 " :name='name'>
        <option v-for="(item,index) in items" :key="index" :value="index">{{ item.type }}</option>
    </select>
</div>
</template>

<script>
export default {
    name: 'Select',
    props: {
        name: {
            type: String,
            default: 'select'
        },
        lable: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default () {
                return []
            }
        },
        changeItem: {
            type: Function,
            default: function () {
                console.log('Select Changed !!');
            }
        },
        select_value: {
          type: String,
          default:''
        },
        data_type: {
          type: String,
          default:''
        }
    },
}
</script>

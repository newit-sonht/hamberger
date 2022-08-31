<template>
<div class="w-full bg-green-700 p-6">
    <Form />
</div>
</template>

<script>
import Form from '@/components/Page/Hamberger/Form'
import ChosenItem from '@/components/Page/Hamberger/ChosenItem'
export default {
    name: 'hamberger',
    components: {
        Form,
        ChosenItem
    }
}
</script>

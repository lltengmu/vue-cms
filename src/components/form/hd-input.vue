<template>
    <input type="text" class="ht-input" :value="props.modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"/>
</template>

<script setup lang="ts">

const props = defineProps({
    modelValue:String
})
</script>

<style scoped>
.ht-input{
    @apply border border-gray-200 placeholder:text-xs w-full rounded-sm py-1 px-2 outline-none focus:ring-1 ring-offset-2 ring-violet-600 duration-300 border-white
}
</style>
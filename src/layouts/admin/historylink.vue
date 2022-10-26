<template>
    <div class="hidden md:block bg-white p-3 border-t border-b">
        <div class="grid grid-flow-col gap-3 justify-start">
            <a href="" v-for="link of links" class="bg-white border rounded-sm py-2 px-4 hover:bg-violet-600 hover:text-white">
                {{ link.title }}
                <i class="fa fa-times ml-1"></i>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const links = ref<{ title: string }[]>([
    { title: '编辑器' },
    { title: '订单列表' },
    { title: '用户管理' },
    { title: '销售总额' },
    { title: '编辑器' },
    { title: '订单列表' },
    { title: '用户管理' },
    { title: '销售总额' },
    { title: '编辑器' },
    { title: '订单列表' },
    { title: '用户管理' },
    { title: '销售总额' },
]);
</script>

<style scoped>

</style>
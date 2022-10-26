<template>
    <div class="grid md:grid-cols-4 gap-3 bg-gray-100">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="(card,index) of cards" :key="index"
            class="cursor-pointer">
            <template #header>
                <div class="flex justify-between item-center">
                    {{ card.title }}
                    <el-tag type="danger" size="small" effect="dark">月</el-tag>
                </div>
            </template>
            <section class="flex justify-between items-center">
                <span class="text-3xl">$2165461 </span>
                <i :class="[card.icon,card.iconColor]" class=" text-4xl"></i>
            </section>
            <section class="text-base mt-6 flex justify-between items-center">
                {{ card.totalTitle }}
                <span>{{ card.total }}</span>
            </section>
        </el-card>
    </div>
    <div class="p-3 mt-5 grid md:grid-cols-2 gap-3">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
            <template #header>
            <div>
                <span>用戶統計</span>
            </div>
            </template>
            <div id="echart1" class="h-72 w-full"></div>
        </el-card>
        <el-card shadow="always" :body-style="{ padding: '20px' }">
            <template #header>
            <div>
                <span>销售额</span>
            </div>
            </template>
            <div id="echart2" class="h-72 w-full"></div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { echart1,echart2 } from './echart'
interface Icard {
    title: string,
    price: number, 
    icon: string,
    iconColor: string,
    totalTitle: string,
    total: number,
}
const cards = ref<Icard[]>([
    { title: "总人数", price: 65145, iconColor: "text-violet-500", icon: "fas fa-address-card", totalTitle: '总人数', total: 15614 },
    { title: "销售额", price: 98451, iconColor: "text-green-500", icon: "fas fa-apple-alt", totalTitle: '总销售额', total: 16515 },
    { title: "订单数", price: 15562, iconColor: "text-blue-500", icon: "fas fa-award", totalTitle: '总订单数', total: 916141 },
    { title: "评论数", price: 26261, iconColor: "text-red-500", icon: "fas fa-baseball-ball", totalTitle: '总评论数', total: 489456 },
])
nextTick(() => {
    echarts.init(document.getElementById('echart1')).setOption(echart1);
    echarts.init(document.getElementById('echart2')).setOption(echart2);
})

</script>

<style scoped>

</style>
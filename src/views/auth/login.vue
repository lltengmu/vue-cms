<template>
    <Form @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
        <div class="w-[720px] bg-white -translate-y-16 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
            <div class="p-6 flex flex-col justify-between">
                <div>
                    <h2 class="text-center text-gray-700 text-lg mt-3 font-bold">会员登录</h2>
                    <div class="mt-8">
                        <Field name="account" value="admin@qq.com" label="账号" placeholder="请输入邮箱或者手机号!" class="hd-input" :validate-on-input="true" />
                        <p v-if="errors.account" class="hd-error">请输入邮箱或者手机号!</p>
                        <Field type="password" name="password" value="123456" label="密码" placeholder="请输入密码!" class="hd-input mt-3" :validate-on-input="true" />
                        <ErrorMessage name="password" as="div" class="hd-error" />
                    </div>
                    <hd-button />
                    <div class="flex justify-center mt-3">
                        <i class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"></i>
                    </div>
                </div>
                <div class="flex gap-2 justify-center mt-5">
                    <hd-link />
                    <a href="" class="text-xs text-gray-700">会员注册</a>
                    <a href="" class="text-xs text-gray-700">找回密码</a>
                    <a href="" class="text-xs text-gray-700">找回密码</a>
                </div>
            </div>
            <div class="hidden md:block relative">
                <img src="/images/login.jpg" class="absolute h-full w-full object-cover" alt="">
            </div>
        </div>
    </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import v from '@/plugins/validate'
import { validate } from 'vee-validate';
import userApi from '@/api/userApi';
import utils from '@/utils';
import { useRouter } from 'vue-router';
import { cacheEnum } from '@/enum/cacheEnum';
//引入验证类库
const { Form, Field, ErrorMessage } = v
const router = useRouter()


//或者使用vee-validate组件的验证规则
const schema = {
    account: { required: true, email: true, regex: /.+@.+|\d{11}/i },
    password: { required: true, min: 3 }
}

//定义表单提交事件处理函数
const onSubmit = async (values: any) => {
    utils.user.login(values)
}
</script>
<script lang="ts">
export default {
    route: { name: 'login' }
}
</script>
<style lang="scss" scoped>
form {
    @apply bg-slate-300 h-screen flex justify-center items-center p-5 md:p-0
}
</style>
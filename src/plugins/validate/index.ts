import * as veeValidate from 'vee-validate'
import { required, max, min, confirmed, email } from '@vee-validate/rules'
import rules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import yup from './yup'

//注册所有的验证规则
Object.keys(rules).forEach((key) => {
    veeValidate.defineRule(key, rules[key])
})
veeValidate.configure({
    generateMessage:localize('zh_CN',zh_CN)
})
const modules = { yup,...veeValidate }
export default modules
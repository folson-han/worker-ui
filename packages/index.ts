// 导入button组件
import WButton from './Button/index';
import { App } from "vue";
import { Options } from "./types";

// 组件列表
const components = [
    WButton
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (app: App, opts: Options = { color: "#1890ff", size: "small" }) => {
    // 遍历注册全局组件
    components.map(component => app.component(component.name, component));
    app.provide("color", opts.color);
    app.provide("size", opts.size);
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    WButton
}

import WButton from "./src/index.vue";
import { App } from "vue";

WButton.install = function (Vue: App) {
    Vue.component(WButton.name, WButton);
}

export default WButton;

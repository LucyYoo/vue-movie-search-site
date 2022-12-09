import * as Vue from "vue";
import App from "~/App";
import store from "~/store";
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = Vue.createApp(App);
app.use(BootstrapVue3);
app.use(store);
app.mount("#app");

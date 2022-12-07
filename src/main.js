import * as Vue from "vue";
import App from "~/App";
import fetchPlugin from '~/plugins/fetch';

const app = Vue.createApp(App);
app.use(fetchPlugin);
app.mount("#app");

export { default as Button } from "./components/Button.vue";
export { default as Loading } from "./components/Loading.vue";
export { default as Switch } from "./components/Switch.vue";

export default {
  install(app) {
    app.component("Button", require("./components/Button.vue").default);
    app.component("Loading", require("./components/Loading.vue").default);
    app.component("Switch", require("./components/Switch.vue").default);
  },
};

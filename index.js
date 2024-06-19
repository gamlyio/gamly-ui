export { default as Button } from "./components/Button.vue";

export default {
  install(app) {
    app.component("Button", require("./components/Button.vue").default);
  },
};

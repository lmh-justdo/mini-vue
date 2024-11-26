import { createApp } from "../../dist/mini-vue.esm-bundler.js";
import App from "./App.js";

const rootContainer = document.querySelector("#root");
const ins = createApp(App);
ins.mount(rootContainer);

console.log("ins", ins);

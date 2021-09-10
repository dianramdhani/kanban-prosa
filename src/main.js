import 'bootstrap';
import './assets/scss/style.scss';
import { createApp } from 'vue';
import App from './App.vue';
import draggable from "vuedraggable";
import Task from './components/Task';
import store from './store';

const app = createApp(App);
app.use(store);
app.component('draggable', draggable);
app.component('Task', Task);
app.mount('#app');

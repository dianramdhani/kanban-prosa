import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
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

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import draggable from "vuedraggable";
import Task from './components/Task';


const app = createApp(App);
app.component('draggable', draggable);
app.component('Task', Task);
app.mount('#app');

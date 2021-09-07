
import { createStore } from 'vuex'
import backlog from './modules/backlog';
import done from './modules/done';
import todo from './modules/todo';

export default createStore({
    modules: {
        backlog,
        done,
        todo,
    }
})